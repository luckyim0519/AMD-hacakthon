import React, { useState } from "react";

export const ProjectEvaluation = () => {
  const [formData, setFormData] = useState({
    cost: '',
    time: '',
  });
  const [result, setResult] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/predict_regression', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cost: formData.cost,
          time: formData.time
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      const responseData = await response.json();
      setResult(responseData.result);

      setFormData({  // Clear all the form fields after successful submission
        cost: '',
        time: '',
 
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, you can set an error state or display an error message to the user
    }
  };

  return (
    <div className="float-seg-middle">
      <h1>PROJECT EVALUATOR</h1>
      <form onSubmit={handleSubmit}>
        <label>Cost ($):</label>
        <input type="number" name="cost" value={formData.cost} onChange={handleChange} />
        <br />
        <label>Time (days):</label>
        <input type="number" name="time" value={formData.time} onChange={handleChange} />
        <br />
        <button type="submit">Predict Feasibility</button>
      </form>
      <div className={result === "Project is worth doing." ? "green" : "red"}>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};