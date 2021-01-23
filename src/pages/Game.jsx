import React from 'react'
import { useState } from 'react'
import * as wordsAPI from '../services/words'
import Card from '../components/Card'

const Game = () => {
    
    const words = wordsAPI.shuffleBoard();

    return (  
        <>
        <h1>Game</h1>
        {words.map(el => 
            <Card 
                key={el.id}
                id={el.id}
                word={el.word}
                color={el.color}
            />
        )}
        
        </>
    );
}
 
export default Game;