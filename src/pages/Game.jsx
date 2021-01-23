import React from 'react'
import { useState, useEffect } from 'react'
import * as wordsAPI from '../services/words'
import Card from '../components/Card'
import { Grid, GridItem } from "@chakra-ui/react"

const Game = () => {
    const [words, setWords] = useState([]);

    const generateWords = async () => {
        const words = await wordsAPI.generateBoard();
        setWords(words);
    }

    useEffect(() => {
        generateWords();
    },[]);

    return (  
        <>
        <h1>Game</h1>
        {words.length ? 
            <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(5, 1fr)" gap={6}>
                {words.map(el => 
                    <Card 
                        key={el.id}
                        id={el.id}
                        word={el.word}
                        color={el.color}
                        />
                )}
            </Grid>
            :
            <div>Generating words... </div>
        }       
        <button onClick={generateWords}>Reset</button>
        </>
    );
}
 
export default Game;