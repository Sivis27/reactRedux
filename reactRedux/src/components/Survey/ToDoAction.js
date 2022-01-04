import React from 'react'

const ToDoAction = (props) => {
    return (
        <div className="todo-item">
            <h2>{props.items}</h2>
        </div>
    )
}

export default ToDoAction;