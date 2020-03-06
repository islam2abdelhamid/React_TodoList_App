import React from 'react';

const DeletedCard = (props) => {

    const handleRestore = () => {
        props.onRestore(props.todo.id);
    }
    return (
        <li className="todo-item high">
            <div className="icon-check">
                <i className="pad-15 material-icons md-36 md-light">delete</i>
            </div>

            <div className="icon-delete" onClick={handleRestore}>
                <i className="pad-15 material-icons md-36 md-light">restore</i>
            </div>
            <div className="content">
                {props.todo.title}
            </div>
        </li>

    )
};

export default DeletedCard;