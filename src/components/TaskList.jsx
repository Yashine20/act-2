import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} {task.completed ? "(Complété)" : "(En cours)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;