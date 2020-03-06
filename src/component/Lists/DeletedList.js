import React from 'react';
import DeletedCard from '../Todos/DeletedCard';

const DeletedList = (props) => {
    return (
        <div className="todo-completed">
            <h2> Deleted Tasks </h2>
            <ul className="todo-list-completed">
                {props.todos.map(todo=><DeletedCard todo={todo} key={todo.id} onRestore={props.restoreTodo} />)}
            </ul>
        </div>
    )
};

export default DeletedList;