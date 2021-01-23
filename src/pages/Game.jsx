import React from 'react'
import { useState } from 'react'
import * as wordsAPI from '../services/words'

const Game = () => {
    
    const words = wordsAPI.shuffleBoard();

    return (  
        <>
        <h1>Game</h1>
        {words.map(el => 
            <p>{el.word}</p>
        )}
        
        </>
    );
}
 
export default Game;