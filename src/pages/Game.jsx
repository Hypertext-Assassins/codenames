import React from 'react'
import { useState, useEffect } from 'react'
import * as wordsAPI from '../services/words'
import Card from '../components/Card'
import MapKey from '../components/MapKey'
import { Grid, GridItem, Button } from "@chakra-ui/react"

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
        {words.length ? 
            <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(5, 1fr)" gap={6}>
                {words.map(el => 
                    <Card 
                        key={el.id}
                        id={el.id}
                        word={el.word}
                        color={el.color}
                        isTapped={el.isTapped}
                        generateWords={generateWords}
                        />
                )}
            </Grid>
            :
            <div>Generating words... </div>
        } 
        <br></br>      
        <Button onClick={generateWords} colorScheme="teal" variant="outline">Reset</Button>
        <br></br>
        <br></br>
        <h1>Codemaster Key - should only be visible to codemasters</h1>
        <MapKey 
            words={words}
        />
        </>
    );
}
 
export default Game;