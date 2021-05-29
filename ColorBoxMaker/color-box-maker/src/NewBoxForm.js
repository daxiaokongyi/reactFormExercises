import React, {useState} from 'react';
import uuid from 'react-uuid';

const NewBoxForm = ({addBox}) => {
    // used for reset the state 
    const INITIAL_STATE = {
        backgroundColor: "", 
        height: "",
        width: ""
    }

    // set handle submit used for creating a new box
    const handleSubmit = evt => {
        evt.preventDefault();
        addBox({...formData, id: uuid()});
        setFormData(INITIAL_STATE);
    };

    // set handle change to track the changes of input values
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    // set useState
    const [formData, setFormData] = useState({
        backgroundColor: "",
        height: "",
        width: ""
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="backgroundColor">Background Color: </label>
                <input 
                    id="backgroundColor" 
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    onChange={handleChange}
                    type="text"
                />
                <label htmlFor="height">Height: </label>
                <input 
                    id="height" 
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    type="text"
                />
                <label htmlFor="width">Width: </label>
                <input 
                    id="width" 
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    type="text"
                />
                <button>Add a new box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;