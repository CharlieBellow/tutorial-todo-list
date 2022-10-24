import React, { useState} from 'react'
import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAddiction}) => {

  const [inputData, setInputData] = useState('')
  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddiction(inputData)
    setInputData("") /* limpando o input */
  }
  return ( 
    <div className="add-task-container">
      <input onChange={handleInputChange} className="add-task-input" type="text" value={inputData } />
      <div className="add-task-button-container">
        <Button onClick={ handleAddTaskClick}>Adicionar</Button>

      </div>

    </div>
  );
}

export default AddTask;