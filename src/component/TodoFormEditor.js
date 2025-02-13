import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'

const TodoFormEditor = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // Check if the input is empty or null
        if (!value.trim()) {
            alert("🚫 Task cannot be empty!");
            setValue(task.task);
            return ;
        }
        // edit todo
        const upperCaseValue = value.toUpperCase();
        editTodo(upperCaseValue, task.id);
        setValue("");
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input text-bg-dark p-2" placeholder='Update task' />
    <button type="submit" className='todo-btn btn btn-dark'>Update<FontAwesomeIcon icon={faSquarePen} style={{color:'blueviolet'}} /></button>
  </form>
  )
}
export default TodoFormEditor;