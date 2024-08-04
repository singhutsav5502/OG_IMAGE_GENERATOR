import React from "react";
import "./Card.css";

export const Card = (props) => {
    return (
        <>
            <div 
                className="card-outer-container" 
                style={{
                    width: props.width ? props.width : 'auto',
                    height: props.height ? props.height : 'auto'
                }}
            >  
                {props.children}
            </div>
        </>
    );
};
