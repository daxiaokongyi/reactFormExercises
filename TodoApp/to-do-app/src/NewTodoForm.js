import React, {useState} from 'react';
import uuid from 'react-uuid';

const NewTodoForm = ({addTodo}) => {
    // used to reset the state
    const INITIAL_STATE = {
        todo : ""
    }

    // setup useState
    const [formData, setFormData] = useState({
        todo : ""
    });    

    // set handle submit
    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    }

    // set handle change
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({...formData, [name]: value}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">New Todo: </label>
                <input
                    id="todo"
                    name="todo"
                    value={formData.todo}
                    onChange={handleChange}
                    type="text"
                />
                <button>Add a Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;