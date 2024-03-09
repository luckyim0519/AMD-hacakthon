from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import re 
from sklearn.feature_extraction.text import CountVectorizer
import pandas as pd
import pickle


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
    data = request.get_json()

    review_raw = pd.DataFrame(data, index=[0])

    # Preprocess the data 
    review = preprocess_txt(review_raw)
    review = [review]
    review_tok = vec.transform(review)

    # Make a prediction using your model
    prediction = model.predict(review_tok)
    print(f"prediction", prediction)

    if(prediction[0] == 0): 
       pred_out = "negative"
    elif(prediction[0] == 1): 
        pred_out = "positive"
    else: 
       pred_out = "unknown"

    # Return the prediction as JSON
    return jsonify({'sentiment': pred_out})

if __name__ == '__main__':
    app.run(debug=True)
