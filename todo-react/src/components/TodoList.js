import React, { useState, useRef } from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList() {
    const [title, setTitle] = useState('');
    const [todoItems, setTodoItems] = useState([]);
    const newTitleInput = useRef(null);

    const removeTodoItem = (id) => {
        setTodoItems([...todoItems.filter((_, i) => i !== id)]);
    }

    const addTodoItem = () => {
        if (title?.length > 0) {
            setTodoItems([...todoItems, title]);
            setTitle('');
        }
        newTitleInput.current.focus();
    }

    return (
        <div className="list">
            <h3 className="list-header">Todo List</h3>
            <div className="list-inputs">
                <input className="list-inputs-input" ref={newTitleInput} onChange={e => setTitle(e.target.value)} value={title}></input>
                <button className="list-inputs-button" onClick={addTodoItem}>+</button>
            </div>
            <>
                {todoItems && todoItems.length > 0
                    ?
                    <div className="list-todoitems">
                        {todoItems.map((t, i) => <TodoItem key={i} id={i} title={t} removeTodoItem={removeTodoItem}></TodoItem>)}
                    </div>
                    :
                    <div className="list-todoitems-placeholder-container">
                        <div>Add items to see them here!</div>
                    </div>}
            </>
        </div>
    )
}

export default TodoList
