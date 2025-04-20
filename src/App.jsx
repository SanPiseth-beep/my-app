import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore'; // Add doc and deleteDoc
import { db } from './firebase';
import { useAuth } from './AuthContext';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskForm from './components/TaskForm';
import AuthForm from './components/AuthForm';

const App = () => {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'tasks'), where('userId', '==', user.uid));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const tasksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksData);
      });
      return unsubscribe;
    }
  }, [user]);

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteDoc(doc(db, 'tasks', taskId)); // Delete the task from Firestore
        alert('Task deleted successfully!');
      } catch (error) {
        console.error('Error deleting task:', error);
        alert('Failed to delete the task. Please try again.');
      }
    }
  };

  // Render logic
  return (
    <div style={{ textAlign: 'center' }}>
      {!user ? (
        <AuthForm />
      ) : (
        <>
          <button onClick={logout}>Logout</button>
          <Greeting username={user.email} />
          <UserInfo />
          <TaskForm />
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                {task.taskName}: {task.taskDescription}{' '}
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default App;