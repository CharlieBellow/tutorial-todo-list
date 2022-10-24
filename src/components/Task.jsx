import React from 'react';
import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion}) => {
  //return <div className="task-container">{task.title}</div>;

  return (
    // estilo condicional
    <div className="task-container" style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
      {task.title}

        <div className="buttons-container"
        >
          <button onClick={() => handleTaskDeletion(task.id)} className="remove-task-icon">
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default Task;