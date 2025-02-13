import React from 'react';

const Greeting = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello, Welcome to React!</h1>
      <p style={{ color: 'blue', fontSize: '18px' }}>
        Today's date is {currentDate}
      </p>
    </div>
  );
};

export default Greeting;