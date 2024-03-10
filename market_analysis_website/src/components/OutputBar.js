import {useState, useEffect} from "react"
import React from "react";
import { PieChart, Pie, Cell, Tooltip} from 'recharts';


export const OutputBar = () => {  
    const [userInput, setUserInput] = useState('')
    const [prediction, setPrediction] = useState(null)
    const [pieChartData, setPieChartData] = useState([]);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        setPrediction("");
      };

    useEffect(() => {
      console.log('pieChartData:', pieChartData);
    }, [pieChartData]); // Log pieChartData in the effect when it changes

    const handlePredictClick = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/predict_sentiment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userInput }),
        });

        if (!response.ok) {
        throw new Error('Failed to get prediction from the API');
        }

        const result = await response.json();
        setPrediction(result.predictions);
        setUserInput(''); 

        // Set the PieChart data state
        // Calculate the percentage of 1s and 0s
        const countOfOnes = result.predictions.filter((value) => value === 1).length;
        const countOfZeros = result.predictions.filter((value) => value === 0).length;
        const total = result.predictions.length;

        const percentageOfOnes = Math.round((countOfOnes / total) * 100);
        const percentageOfZeros = Math.round((countOfZeros / total) * 100);

        // Set the PieChart data state
        setPieChartData([
          { name: '1', value: percentageOfOnes, fill: '#00FF00', label: 'Positive' },
          { name: '0', value: percentageOfZeros, fill: '#FF0000', label: 'Negative' },
        ]);

        console.log('predictions:', result.predictions)

    } catch (error) {
        console.error('Error:', error);
    }
    };

    return (
        

        <div className = "floating-box">

        <div className = "input-container">
          <textarea
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter your prompt..."
          />
            <button onClick={handlePredictClick}>Predict Sentiment</button>
        </div>
          {prediction !== null && (

            <div className = "prediction-output">
              <h3>Prediction:</h3>
              <h3>{""}</h3>
            </div>
          )}
          <div className="graph-container"> {/* Apply container styles */}
            <PieChart className="pie-chart" width={400} height={400}> {/* Apply chart styles */}
                {/* <Pie data={pieChartData} dataKey="value" outerRadius={150} fill="green" /> */}
                <Pie data={pieChartData} dataKey="value" outerRadius={150} label fill="#8884d8" labelLine={false}>
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
                </Pie>
                <Tooltip formatter={(value) => `${value.toFixed(0)}%`} />
            </PieChart>
          </div>
      </div>
        
      );

}