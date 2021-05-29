import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'react-uuid';

const BoxList = () => {
    // set usestate for box
    const [boxes, setBoxes] = useState([]);

    // add remove function on the box
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    const addBox = box => {
        setBoxes(boxes => [...boxes, box]);
    }

    const renderBoxes = boxes.map(({backgroundColor, width, height, id}) => (
        <Box backgroundColor = {backgroundColor} 
                key = {id}
                id = {id}
                width = {width} 
                height = {height} 
                handleRemove = {removeBox}
        />)
    );

    return (
        <div>
            {renderBoxes}
            <NewBoxForm addBox = {addBox}/>
        </div>
    )
}

export default BoxList;