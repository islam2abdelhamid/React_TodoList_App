import React, { useState } from 'react';
import Card from '../Todos/Card';



const TodoList = (props) => {

    const [todoTitle, setTodoTitle] = useState('');

    const handleTitle = (e) => {
        setTodoTitle(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();
        if (todoTitle.trim() !== '') {
            props.addTodo(todoTitle);
            setTodoTitle('');
        }
    }

    return (

        <div className="todo-in-progress"  >
            <h2> Working on tasks</h2>
            {props.todos.length && <ul className="todo-list" id="target">
                {props.todos.map(todo => <Card todo={todo} key={todo.id} onDelete={props.deleteTodo} onDone={props.markAsDone} />)}
            </ul> || <h3 className="todo-title" style={{
                color: "#fff",
                fontWeight: "bold",
                textTransform: "uppercase",
                height: "73px",
                paddingTop: "17px",
            }}>
                    Wow! You Have No Tasks....
                </h3>}

            <div className="form-group" style={{
                color: "#fff", width: "98%",
                height: "49px"
            }}>
                <form onSubmit={handleForm}>
                    <label htmlFor="title">Add New Todo</label>
                    <input type="text" name="title" id="title" value={todoTitle} onChange={handleTitle} style={
                        {
                            borderRadius: 0,
                            backgroundColor: '#ffffffa6'
                        }
                    } className="form-control" placeholder="" aria-describedby="helpId" />
                    <small id="helpId" className="text-muted">Enter Todo Title and press enter</small>
                </form>
            </div>
        </div>

    )
};

export default TodoList;