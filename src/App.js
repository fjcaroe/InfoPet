import React, { useState, useEffect } from 'react';
import './App.css';
import backgroundFull from "./images/infopetcl.png"

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = windowWidth >= 650 ? backgroundFull : backgroundFull;

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);
  return (
      <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
          <div className="App-content">
        
          </div>
      </div>
  );
};

export default App;