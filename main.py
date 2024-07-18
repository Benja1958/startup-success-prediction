# main.py

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler

# Sample data
data = {
    'funding': [100000, 500000, 150000, 300000, 700000],
    'team_experience': [5, 7, 3, 6, 8],
    'market_trend': [0.8, 0.9, 0.7, 0.85, 0.95],
    'success': [1, 1, 0, 1, 1]
}

df = pd.DataFrame(data)

# Features and target variable
X = df[['funding', 'team_experience', 'market_trend']]
y = df['success']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the data
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize and train the model
model = LogisticRegression(max_iter=1000)  # Increase max_iter if needed
model.fit(X_train_scaled, y_train)

# Make predictions
y_pred = model.predict(X_test_scaled)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.2f}')
