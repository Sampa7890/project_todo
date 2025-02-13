import React, { useState } from 'react'
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import TodoFormEditor from './TodoFormEditor';
const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        const upperCaseTask = todo.toUpperCase();
        setTodos([...todos, { id: uuidv4(), task: upperCaseTask, completed: false, isEdit: false },])
        console.log(todos)
    }
    const toggleComplete =id =>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
        
    }
    const deleteTodo = id =>{
        setTodos(todos.filter(todo=>todo.id !==id))
    }
    const editTodo = id =>{
        setTodos(todos.map(todo => 
            todo.id === id 
                ? { ...todo, isEditing: !todo.isEditing } 
                : todo
        ));
            }
    const editTask = (task,id)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo))
    }
    return (

        <div className='todoWrapper container'>
            <h1 className='display-4 '>List Your Task For Today!</h1>
            <TodoForm addTodo={addTodo} />

            {todos.map((todo,index) => (
                todo.isEditing?(
                    <TodoFormEditor editTodo={editTask} task={todo}/>
                ):(
                <Todo task={todo} toggleComplete={toggleComplete} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo} index={index}/>
                )
            ))}


        </div>
    )
}

export default TodoWrapper;
