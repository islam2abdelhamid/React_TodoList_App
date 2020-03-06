import React from 'react';

const Card = (props) => {

    const handleDelete = () => {
        props.onDelete(props.todo.id)
    }

    const handleDone = () => {
        props.onDone(props.todo.id)
    }
    return (
        <li className="todo-item high">
            <h3 className="todo-title" onClick={handleDone}>
                <span className="action" >
                    <i className="material-icons md-36 icon-delete" onClick={handleDelete}>delete</i>
                    <i className="icon-checkbox-outline material-icons md-36 md-dark">check_box_outline_blank</i>
                    <i className="icon-checkbox material-icons md-36 md-light" >check_box</i>
                </span>
                <span className="title">{props.todo.title}</span>
            </h3>
        </li>
    );
};

export default Card;