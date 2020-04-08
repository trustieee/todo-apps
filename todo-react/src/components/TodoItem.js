import React from 'react'
import './TodoItem.css'

function TodoItem({ title, removeTodoItem, id }) {
    return (
        <div className="todoitem">
            <span className="todoitem-title">{title}</span>
            <button className="todoitem-remove" onClick={() => removeTodoItem(id)}>x</button>
        </div>
    )
}

export default TodoItem
