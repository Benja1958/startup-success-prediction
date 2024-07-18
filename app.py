from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.linear_model import LogisticRegression  # Example model
from sklearn.preprocessing import StandardScaler  # Example data preprocessing

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Example model initialization (replace with your actual model)
model = LogisticRegression()

# Example data preprocessing (replace with your actual preprocessing steps)
scaler = StandardScaler()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # Assuming JSON data is sent from frontend
    funding = data.get('funding')
    team_experience = data.get('team_experience')
    market_trend = data.get('market_trend')

    # Your prediction logic here
    if funding is not None and team_experience is not None and market_trend is not None:
        # Example data preprocessing and prediction
        X_new = scaler.transform([[funding, team_experience, market_trend]])
        prediction = model.predict(X_new)

        # Return prediction as JSON response
        return jsonify({'success_probability': float(prediction[0])})
    else:
        return jsonify({'error': 'Invalid data received'})

if __name__ == '__main__':
    app.run(debug=True)
