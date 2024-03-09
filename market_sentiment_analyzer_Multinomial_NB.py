import pandas as pd
import re

from sklearn import preprocessing
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.metrics import f1_score
from joblib import dump, load
import pickle as pickle

# Real Data Set #2
df = pd.read_csv('amd_review_data_labelled_one_page.csv')

df_review = df.iloc[:,1]
df_label = df.iloc[:,2]

print(df_review)

# Data preprocessing
def preprocess_txt(text):
  if not isinstance(text, str):
    text = str(text)
  text = re.sub(r'[^a-zA-Z\s]', '', text)
  text = text.lower()
  return text

df_review = df_review.apply(preprocess_txt)

# Convert string label into nums
le = preprocessing.LabelEncoder()
df_label_enc = le.fit_transform(df_label)

# Tokenize review
vec = CountVectorizer()
df_review_tok = vec.fit_transform(df_review)

# Split data into training and testing sets (20% reserved for testing, 80% reserved for training)
# Random_state seed with integer means shuffling is reproducable across mult func calls
X_train, X_test, y_train, y_test = train_test_split(df_review_tok, df_label_enc, test_size=0.2, random_state=42)

#create multinomial Naive Bayes model
model = MultinomialNB()

# Train the model on the training set
model.fit(X_train, y_train)

# Make predictions on the test set
predictions = model.predict(X_test)

# Evaluate the performance
accuracy = accuracy_score(predictions, y_test)
f1 = f1_score(predictions, y_test, average="weighted")
print("test case: ", y_test)
print("predictions: ", predictions)
print("accuracy: ", accuracy)
print("F1 score: ", f1)

dump(model, 'trained_model.joblib')
vec_file = "vectorizer.pickle"
pickle.dump(vec, open("vectorizer.pickle", "wb")) #Save vectorizer
# pickle.load(open("vectorizer.pickle", 'rb'))     #Load vectorizer

