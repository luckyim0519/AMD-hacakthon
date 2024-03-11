from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import re 
from sklearn.feature_extraction.text import CountVectorizer
import pandas as pd
import pickle
import json
import numpy as np


app = Flask(__name__)
CORS(app) # Enable CORS for all routes 

# Load your trained model + vectorizer
model = joblib.load('./trained_models/trained_model_amd_review_data_one_page.joblib')
vec = pickle.load(open('./trained_models/vectorizer.pickle', 'rb'))
svm_model = joblib.load('./trained_models/trained_model_SVC.joblib')

# Data preprocessing
def preprocess_txt(text):
  if not isinstance(text, str):
    text = str(text)
  text = re.sub(r'[^a-zA-Z\s]', '', text)
  text = text.lower()
  return text


@app.route('/predict_sentiment', methods=['POST'])
def predict_sentiment():
    prompt = request.get_json()

    # Get data (future implementation would be to dynamically scrape web for prompt word)
    if(prompt["prompt"] == "amd processors"): 
      df = pd.read_csv('./datasets/amd_review_data_mult_pages.csv')
      df_review = df.iloc[:,1]

      df_review = df_review.apply(preprocess_txt)
      df_review_tok = vec.transform(df_review)

      # Make a prediction using your model
      prediction = model.predict(df_review_tok)
      print(f"prediction", prediction)

      pred_list = prediction.tolist()
      return jsonify({'predictions': pred_list})
    else: 
      return jsonify({'predictions': []})

@app.route('/predict_regression', methods=['POST'])
def predict_regression():
    # Get form data
    data = request.json

    time = data.get('cost')
    cost = data.get('time')
    print(f"Received form data: time: {time}, cost: {cost}")
    # Make prediction using the SVM regression model
    prediction = svm_model.predict([[time, cost]])

    # Define the response message based on the prediction
    result = "Green light! Project cost is worthwhile." if prediction[0] == 1 else "Red light! Project costs outweigh benefits. Reconsider this project scope."

    return jsonify({'result': result})

@app.route('/submit_form', methods=['POST'])
def submit_form():
    data = request.json
    # Assuming the JSON data sent from the client contains 'name', 'email', and 'message'
    name = data.get('cost')
    email = data.get('time')
    
    # Process the form data as needed
    # For demonstration purposes, we'll just print the data to the console
    print(f"Received form data: Name: {name}, Email: {email}")

    
    # Optionally, you can perform additional processing, store data in a database, etc.

    # Return a response indicating success
    return jsonify({'message': 'Form submitted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
