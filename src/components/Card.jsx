import React from 'react'

const Card = (props) => {
    return (  
        <div>
            <p>{props.id} - {props.word} - {props.color}</p>
        </div>
    );
}
 
export default Card;