import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEdit: false },])
        console.log(todos)
    }
    return (
        <div className='todoWrapper'>
            <h1>List Your Task For Today!</h1>
            <TodoForm addTodo={addTodo} />

            {todos.map((todo) => (
                <Todo task={todo} key={todo.id} />

            ))}


        </div>
    )
}

export default TodoWrapper
