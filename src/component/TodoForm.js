import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value){
            addTodo(value);
            setValue("")
        }
    }
    return (
        <div className='todoForm'>
            <form className='todoForm' onSubmit={handleSubmit}>
                <input className='text-bg-dark p-2' type='text'  placeholder='Type Your Task' value={value}  onChange={(e) => {
                    setValue(e.target.value)
                }}></input>
                <button type='submit' className='todoSubmit btn btn-dark'>Add <FontAwesomeIcon icon={faSquarePlus} style={{ color: 'green' }}/></button>
            </form>
        </div>
    )
}

export default TodoForm
