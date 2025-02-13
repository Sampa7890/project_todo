import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task}) => {
    return (
        <div className='todo' style={{display:'flex',justifyContent:'center'}}>
            <div style={{ marginRight: '10px', padding: '2px' }}>{task.task}</div>   
            <div className='todoIcon'>         
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faTrashCan} />
            </div>
        </div>
    )
}

export default Todo
