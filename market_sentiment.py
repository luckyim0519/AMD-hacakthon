'''
market sentiment prediction

1. preprocessing the data
    1. text cleaning
    2. tokenization
    3. stop word removal
    4. lemmatizaiotn or steaming of data

using Navie's Bayes algorithm with multiple features
    #training the data
    #testing the data

'''
from sklearn import preprocessing
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.metrics import f1_score

import pandas as pd

df = pd.read_csv('dataset_2_MNB.csv')

df_perf = df.iloc[:,0]
df_costEff = df.iloc[:,1]
df_design = df.iloc[:,2]
df_result = df.iloc[:,3]

########## data preprocessing ##########
le = preprocessing.LabelEncoder()
# converting string labels into numbers
costEff_encoded=le.fit_transform(df_costEff)
design_encoded=le.fit_transform(df_design)
label=le.fit_transform(df_result)

#combining the encoded features into one
features = list(zip(df_perf, costEff_encoded, design_encoded))

########## data processing ##########
X_train, X_test, y_train, y_test = train_test_split(features, label, test_size=0.33, random_state=125)

########## model builindg and training ##########
model = GaussianNB()

#train the model using the training set
model.fit(X_train, y_train)

#predict otuput
predicted = model.predict(X_test) 
print("predicted output: ", predicted)

########## model evaluation ##########
accuray = accuracy_score(predicted, y_test)
f1 = f1_score(predicted, y_test, average="weighted")

print("accuracy: ", accuray)
print("F1 score: ", f1)