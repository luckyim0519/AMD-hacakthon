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


if __name__ == '__main__':
    app.run(debug=True)
