import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
    // set useState for Todos
    const [todos, setTodos] = useState([]);

    // add a new todo
    const addTodo = todo => {
        setTodos(todos => [...todos, todo]);
    }

    // remove a todo
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    // update a todo
    const updateTodo = (id, updatedTodo) => {
        setTodos(
            todos => todos.map(
                todo => todo.id === id ? {...todo, todo: updatedTodo} : todo
            )
        )
    }

    const renderTodo = todos.map(todo => 
        <Todo 
            key = {todo.id}
            todo = {todo.todo} 
            remove = {removeTodo} 
            update = {updateTodo}
            id = {todo.id}
        />
    );

    return (
        <div>
            {renderTodo}
            <NewTodoForm addTodo = {addTodo} />
        </div>
    )
}

export default TodoList;