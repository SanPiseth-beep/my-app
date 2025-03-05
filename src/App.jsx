import React from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import Counter from './components/Counter';
import TaskForm from './components/TaskForm';

const App = () => {
  const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

  const getRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  };

  const handleAlert = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Greeting username1="Alice" username2="Bob" />
      <UserInfo handleClick={handleAlert} />
      <Counter />
      <h3>Random Task: {getRandomTask()}</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <TaskForm />
    </div>
  );
};

export default App;