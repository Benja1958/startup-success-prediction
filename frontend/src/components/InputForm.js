// frontend/src/components/InputForm.js

import React, { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [funding, setFunding] = useState('');
  const [teamExperience, setTeamExperience] = useState('');
  const [marketTrend, setMarketTrend] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/predict', {
        funding: parseFloat(funding),
        team_experience: parseInt(teamExperience),
        market_trend: parseFloat(marketTrend)
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Prediction failed:', error);
    }
  };

  return (
    <div>
      <h2>Startup Success Prediction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Funding:
          <input
            type="number"
            value={funding}
            onChange={(e) => setFunding(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Team Experience:
          <input
            type="number"
            value={teamExperience}
            onChange={(e) => setTeamExperience(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Market Trend:
          <input
            type="number"
            step="0.01"
            value={marketTrend}
            onChange={(e) => setMarketTrend(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Predict</button>
      </form>
      {prediction && (
        <p>Prediction: {prediction}</p>
      )}
    </div>
  );
};

export default InputForm;
