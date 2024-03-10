// OutputBar.js

import React, { useState } from 'react';
import './OutputBar.css'; // Import the CSS file

export const OutputBar = () => {
    const [userInput, setUserInput] = useState('');
    const [prediction, setPrediction] = useState(null);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        setPrediction('');
    };

    const handlePredictClick = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/predict_sentiment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ review: userInput }),
            });

            if (!response.ok) {
                throw new Error('Failed to get prediction from the API');
            }
            const result = await response.json();
            setPrediction(result.sentiment);
            setUserInput('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div className="input-container">
                <textarea
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Enter your review..."
                />
                <div className="submit-button">
                    <button onClick={handlePredictClick}>Predict Sentiment</button>
                </div>
            </div>

            {prediction !== null && (
                <div className="prediction-output">
                    <h3>Prediction:</h3>
                    <h3>{prediction}</h3>
                </div>
            )}
        </div>
    );
};
