import React from 'react';
import './Box.css';

const Box = ({id, backgroundColor, height, width, handleRemove}) => {
    const remove = () => {
        handleRemove(id);
    }

    return (
        <div className="box-component">
            <div className="box" style={{   
                backgroundColor:backgroundColor, 
                height:`${height}px`, 
                width:`${width}px`}}>
            </div>
            <button className="box-btn" onClick={remove}>X</button>
        </div>
    )
}

export default Box;