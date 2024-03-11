import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score
from joblib import dump, load
import pickle as pickle

# Load the data from CSV file
data = pd.read_csv('/Users/luckyim/Desktop/AMD_hackathon/datasets/engineering_data.csv')

# Assuming 'worth_doing' is the target variable
X = data[['time', 'cost']]
y = data['worth_doing']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create SVM classifier
svm_classifier = SVC(kernel='linear')

# Train the classifier
svm_classifier.fit(X_train, y_train)

# Predictions on the test set
y_pred = svm_classifier.predict(X_test)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)

dump(svm_classifier, 'trained_model_SVC.joblib')
with open('additional_objects.pkl', 'wb') as f:
    pickle.dump({'X_train': X_train, 'X_test': X_test, 'y_train': y_train, 'y_test': y_test}, f)
pickle.dump()