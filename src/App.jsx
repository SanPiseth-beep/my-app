import React from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';

const App = () => {
  const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

  const getRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Greeting />
      <UserInfo />
      <h3>Random Task: {getRandomTask()}</h3>
    </div>
  );
};

export default App;