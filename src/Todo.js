import React from "react";

export default function Todo({ todo }) {
    return(
        <div>
            <label>
                {todo.name}
                <input type="checkbox" check={todo.complete} />
            </label>
        </div>
    )
}