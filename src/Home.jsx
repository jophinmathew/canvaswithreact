import React from 'react';
//import logo from './logo.svg';
import './App.css';

class Home extends React.Component
{
    
    componentWillUpdate()
    {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 150, 100);
    }
    
    render()
    {
        return (
            <div>
              <canvas id="can">
        
              </canvas>
              
            </div>
          );
    }
}
export default Home;