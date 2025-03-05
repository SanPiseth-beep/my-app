import React from 'react';

const Greeting = ({ username1, username2 }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div style={{ textAlign: 'center', paddingTop: '150px' }}>
      <h1>
        Hello, {username1}!<br />
        Hello, {username2}!
      </h1>
      <p style={{ color: 'blue', fontSize: '18px' }}>
        Today's date is {currentDate}
      </p>
    </div>
  );
};

export default Greeting;