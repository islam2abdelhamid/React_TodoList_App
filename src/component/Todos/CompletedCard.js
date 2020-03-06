import React from 'react';

const CompletedCard = (props) => {

    const handleDelete = () => {
        props.onDelete(props.todo.id);
    }

    return (
        <li className="todo-item high">
            <div className="icon-check">
                <i className="pad-15 material-icons md-36 md-light">check_circle</i>
            </div>

            <div className="icon-delete" onClick={handleDelete}>
                <i className="pad-15 material-icons md-36 md-light">delete</i>
            </div>
            <div className="content">
                {props.todo.title}
            </div>
        </li>
    )
};

export default CompletedCard;