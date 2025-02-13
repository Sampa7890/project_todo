import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete,deleteTodo,editTodo }) => {
    // Handle checkbox change with alert
    const handleCheckboxChange = () => {
        // Trigger the toggle function
        toggleComplete(task.id);

        // Show an alert when the checkbox is checked
        if (!task.completed) {
            alert(`🎉 Task "${task.task}" completed!`);
        }
    };

    return (
        <div className='todo' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0' }}>
            {/* Checkbox with dynamic color */}
            <div style={{ marginRight: '10px', padding: '2px' }}> 
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleCheckboxChange}
                    style={{
                        accentColor: task.completed ? 'green' : 'green',
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                        marginRight: '10px'
                    }}
                    title='Check me out if it is done'
                />
                <span style={task.completed ? { textDecoration: 'line-through', color: 'gray' } : {}}>
                    {task.task}
                </span>
            </div>   

            {/* Action icons */}
            <div className='todoIcon' style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>         
            {!task.completed && (
                <FontAwesomeIcon icon={faPenToSquare} style={{ color: 'blue' }} title="🖊️ Edit your description" onClick={()=>editTodo(task.id)}/>
            )}
                <FontAwesomeIcon icon={faTrashCan} style={{ color: 'red' }} title="⛔ Delete if no Longer needed" onClick={()=>deleteTodo(task.id)} />
            </div>
        </div>
    );
};

export default Todo;
