import React from 'react';
import ToDoAction from './ToDoAction';

const TodoLists = (props) => {
    return (
        <div className="todo-list">
            {props.items.length === 0 && <p>No Survey / Feedbacks found. Please add some.</p> }
            { props.items.map( (todo, index) => <ToDoAction key={index} items={todo}></ToDoAction>) }
        </div>
    );
};

export default TodoLists;