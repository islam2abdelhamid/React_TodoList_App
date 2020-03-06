import React from 'react';
import CompletedCard from '../Todos/CompletedCard';

const CompletedList = (props) => {
    return (
        <div className="todo-completed">
            <h2> Completed Tasks </h2>
            <ul className="todo-list-completed">
                {props.todos.map(todo => <CompletedCard todo={todo} key={todo.id} onDelete={props.deleteTodo} />)}
            </ul>

        </div>
    )
};

export default CompletedList;