import React from 'react'

const TodoForm = () => {
    return (
        <div>
            <h1>Hello I am ToDo Form</h1>
            <form className='todoForm'>
                <input type='text' className='todoText' placeholder='Type Your Task'></input>
                <button type='submit' className='todoSubmit'>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm
