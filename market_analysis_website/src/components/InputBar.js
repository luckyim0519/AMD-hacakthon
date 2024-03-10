import React, { useState } from 'react';


export const InputBar = () => {
  // State to manage the user input
  const [userInput, setUserInput] = useState('');

  // Handler function to update the state on user input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handler function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the user input, such as sending it to an API or processing it
    console.log('User Input:', userInput);
    // You can also reset the input after processing if needed
    setUserInput('');
  };

  return (
        <form onSubmit={handleSubmit}>
        {/* Input element for user input */}
        <div className = "input-container">
        <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type something..."
        />
        </div>

        <div className = "submit-button">
            {/* Button to submit the form */}
            <button type="submit">Submit</button>
        </div>
        
        </form>
  );
};

