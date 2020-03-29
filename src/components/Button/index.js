import React from 'react';

function Button(props){
    return (
        <button 
        id="changeShapeBtn"
        className="change-shape-btn"
        onClick={props.onClick}
        >
            Click Me
        </button>
    )
}

export default Button;