import smiley from '../style/images/smiley.png';
import React from 'react';

const App = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Hello World!</h1>
      <div id="smiley">
        <img src={smiley} id="smiley-img" alt="smiley" />
      </div>
      <div className="time-label"></div>
    </div>
  );
};

export default App;
