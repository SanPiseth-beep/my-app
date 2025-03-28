import React, { useState } from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState(['Buy groceries', 'Clean the house', 'Finish homework']);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => setSearch(e.target.value);

  const handleSort = () => {
    setTasks([...tasks].sort());
  };

  const addTask = (newTask) => {
    setTasks([...tasks, `${newTask.taskName}: ${newTask.description}`]);
  };

  const handleDeleteTask = (taskToDelete) => {
    if (window.confirm(`Are you sure you want to delete "${taskToDelete}"?`)) {
      setTasks(tasks.filter((task) => task !== taskToDelete));
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <Greeting username="Alice" />
      <UserInfo />
      <TaskForm addTask={addTask} />
      <input
        type="text"
        placeholder="Search Tasks"
        value={search}
        onChange={handleSearch}
      />
      <button onClick={handleSort}>Sort by Name</button>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleDeleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;