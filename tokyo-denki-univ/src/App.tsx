import React from 'react';
import './app.css'
import Maker from './Maker';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>
          <a href="https://tdu.app" target="_blank" rel="noopener noreferrer">
            TDUメーカー
          </a>
        </h1>
      </div>
      <Maker />
    </div>
  )
}

export default App;
