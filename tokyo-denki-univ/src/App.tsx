import React from 'react';
import {TokyoDenkiUniv} from './tokyoDenkiUniv'
import './app.css'

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>
          <a href="https://github.com/yuto51942/tokyo-denki-univ" target="_blank" rel="noopener noreferrer">
            TDUメーカー
          </a>
        </h1>
      </div>
      <TokyoDenkiUniv />
    </div>
  )
}

export default App;
