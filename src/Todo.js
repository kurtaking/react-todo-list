import React from "react";

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return(
        <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id={todo.name} checked={todo.complete} onChange={handleTodoClick} />
                    <label className="form-check-label" htmlFor={todo.name}>
                        {todo.name}
                    </label>
            </div>
        </div>
    )
}