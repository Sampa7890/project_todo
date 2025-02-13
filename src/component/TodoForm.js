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
                <input type='text' className='todoText' placeholder='Type Your Task' value={value} onChange={(e) => {
                    setValue(e.target.value)
                }}></input>
                <button type='submit' className='todoSubmit'>Add <FontAwesomeIcon icon={faSquarePlus} /></button>
            </form>
        </div>
    )
}

export default TodoForm
