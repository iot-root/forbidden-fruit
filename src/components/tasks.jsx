import React from 'react';
import './Tasks.css';

const Tasks = () => {
  return (
    <div className="tasks-section">
      <h2>Today's Tasks</h2>
      <div className="task-card">
        <p>You're all caught up on today's tasks, way to go!</p>
        <a href="#">View upcoming</a>
      </div>
    </div>
  );
};

export default Tasks;
