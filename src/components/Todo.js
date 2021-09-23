import React from 'react'
import {useState} from 'react'
import Modal from './Modal'
import BackDrop from './BackDrop'

export const Todo = () => {
    const [todos, setToDos] = useState([])
    const [confirm, setConfirm] = useState(false)
  
    const removeBackdropHandler = () => {
      setConfirm(false)
    }
  
    const deleteHandler = (event) => {
       event.preventDefault()
       setConfirm(true)
    }
  
    return (
      <div className="App">
        <div className="card">
  
  
          <h1>My Todos</h1>
          <h2> Title</h2>
          <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
          </div>
          
          {confirm && <BackDrop remove={removeBackdropHandler}/>}
          {confirm && <Modal remove={removeBackdropHandler}/>}
        </div>
      </div>
    );
}

export default Todo