import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 150, 100);
  return (
    <div>
      <canvas id="can">


      </canvas>
      
    </div>
  );
}

export default App;
