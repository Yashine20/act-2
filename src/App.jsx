import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des tâches :', error);
      });
  }, []);

  return (
    <div>
      <h1>Application de gestion des tâches</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
