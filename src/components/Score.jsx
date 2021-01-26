import {useState} from 'react'

const Score = (props) => {

    return (  
        <>
        <p>Score component</p>
        <p>red cards: {props.score["red.500"]} </p>
        <p>blue cards: {props.score["blue.400"]} </p>
        </>
    );
}
 
export default Score;