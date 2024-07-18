// frontend/src/App.js

import React from 'react';
import './App.css';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Startup Success Prediction</h1>
      </header>
      <main>
        <InputForm />
      </main>
    </div>
  );
}

export default App;
