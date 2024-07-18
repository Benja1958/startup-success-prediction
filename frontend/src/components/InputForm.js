// frontend/src/components/InputForm.js

import React, { useState } from 'react';
import axios from 'axios';  // Ensure axios is installed: npm install axios

const InputForm = () => {
    const [formData, setFormData] = useState({
        funding: '',
        team_experience: '',
        market_trend: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/predict', formData);
            console.log(response.data);
            // Handle response (e.g., update state with prediction result)
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Funding:
                <input type="number" name="funding" value={formData.funding} onChange={handleChange} />
            </label>
            <br />
            <label>
                Team Experience:
                <input type="number" name="team_experience" value={formData.team_experience} onChange={handleChange} />
            </label>
            <br />
            <label>
                Market Trend:
                <input type="number" step="0.01" name="market_trend" value={formData.market_trend} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Predict Success</button>
        </form>
    );
};

export default InputForm;
