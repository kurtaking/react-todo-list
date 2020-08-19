import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import Jumbotron from "./Jumbotron";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()
    let id = 0;

    // Load the stored todos once when page loads
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

        if (storedTodos)
            setTodos(storedTodos)

    }, [])

    // Load the new array of todos any time the array changes
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    // Toggles the todo
    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    // Adds a new todo item into our todos list
    function handleAddTodo(event) {
        const name = todoNameRef.current.value

        if (name === '')
            return

        setTodos(prevTodos => {
            return [...prevTodos, { id: name, name: name, complete: false }]
        })

        todoNameRef.current.value = null
    }

    function clearTodos() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    return (
        <div className='container'>
            <Jumbotron/>
            <div className="row">
                <div className='col-md-6 pl-5'>
                    <h3>Task List</h3>
                    <TodoList todos={todos} toggleTodo={toggleTodo}/>
                </div>

                <div className="col-md-6">
                    <h3>New Task</h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="todoItem">Todo Item</label>
                            <input type="text" className="form-control"
                                   aria-describedby="todoItem" ref={todoNameRef} />
                        </div>

                        <button className="btn btn-primary" onClick={handleAddTodo}>Add Todo</button>
                    </form>

                    <button className="btn btn-danger pl-3" onClick={clearTodos}>Clear Complete</button>
                    <div>
                        <p>{todos.filter(todo => !todo.complete).length} tasks left to do</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
