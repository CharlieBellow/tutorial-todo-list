import React, {useState} from 'react'
import './App.css';
import Tasks from './components/Tasks' 
import AddTask from './components/AddTask'

import {v4 as uuidv4} from 'uuid'


function App() {
  const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "estudar react",
			completed: false,
		},
		{
			id: 2,
			title: "fazer bolo",
			completed: true,
		},
	]);

	// como se lê a função: lidar com adição de tarefa
	const handleTaskAddiction = (taskTitle) => {
		const newTasks = [...tasks, {
			title: taskTitle,
			id: uuidv4(),
			completed: false,

		}]

	setTasks(newTasks)
	}

	const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter(task => task.id !== taskId)

		setTasks(newTasks)

	}

	const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed }
			
			return task;
		})

		setTasks(newTasks)
	}

  return (
		<div className="container">
			<AddTask handleTaskAddiction={ handleTaskAddiction} />
			<Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
		</div>
	);
}

export default App;
