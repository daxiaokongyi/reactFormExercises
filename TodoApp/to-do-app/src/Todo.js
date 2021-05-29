import React, {useState} from 'react';

const Todo = ({todo, id, remove, update}) => {
    // set useState for Editing
    const [editTodo, setEditTodo] = useState(todo);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
    }

    const handleChange = evt => {
        setEditTodo(evt.target.value);
    }

    const handleRemove = () => {
        remove(id);
    }

    const handleUpdate = evt => {
        evt.preventDefault();
        update(id, editTodo);
        // set Editing back to no
        setIsEditing(false);
    }

    // default todo view
    let jsx = (
        <div>
            <li>{todo}</li>
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleRemove}>X</button>
        </div>
    );

    // check if it's being edited
    if (isEditing) {
        jsx = (
            <div>
                <form onSubmit={handleUpdate}>
                    <input 
                        type="text" 
                        value={editTodo}
                        onChange={handleChange}    
                    />
                    <button>Update</button>
                </form>
            </div>
        )
    }

    return jsx;
}

export default Todo;