import React, { useState } from 'react';

const Greeting = ({ username }) => {
  const [greeting, setGreeting] = useState(`Hello, ${username}!`);
  const currentDate = new Date().toLocaleDateString();

  const handleChangeGreeting = () => {
    setGreeting('Welcome to React!');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{greeting}</h1>
      <p>Today's date: {currentDate}</p>
      <button onClick={handleChangeGreeting}>Change Greeting</button>
    </div>
  );
};

export default Greeting;