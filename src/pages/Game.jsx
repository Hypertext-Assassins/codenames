import React from 'react'
import { useState, useEffect, useRef } from 'react'
import * as wordsAPI from '../services/words'
import Score from '../components/Score'
import Card from '../components/Card'
import MapKey from '../components/MapKey'
import { Grid, GridItem, Button } from "@chakra-ui/react"
// import {subscribeToTimer} from '../services/socketapi'

import {fromSocketAPI} from '../services/socketapi'
import io from 'socket.io-client'
const socket = io('http://localhost:4000')


const Game = () => {
    const [words, setWords] = useState([]);
    const [score, setScore] = useState({"red.500": 0, "blue.400": 0, "white": 0, "black": 0})
    const [winner, setWinner] = useState("")
    // const [timestamp, setTimestamp] = useState("no timestamp yet")
    const [state, setState] = useState("")
    const [test, setTest] = useState("")
    const [players, setPlayers] = useState([])

    const generateWords = async () => {
        const words = await wordsAPI.generateBoard();
        // socket.emit("generate words", words)
        setWords(words);
        setScore({"red.500": 0, "blue.400": 0, "white": 0, "black": 0})
        setWinner("")
    }

    useEffect(() => {
        generateWords();
    },[]);

    const tapCard = async (id, color, word) => {
        setWords(words.map(el => el.id === id ? {...el, isTapped:true} : el))
        setScore({...score, [color]: score[color]+1})
        checkWin();
        // subscribeToTimer(1000, (err, timestamp) => setTimestamp(timestamp))
        // socket.emit("tappedCard", word)
        // fromSocketAPI(word);
        // socket.on("card tapped", data => {
        //     console.log("card tapped")
        //     setState(data)
        // })
        socket.emit("tappedCard", word)
    }

    socket.on("tappedCard", word => {
        console.log(`${word} has been tapped`)
        setState(word)
    })

    const testButton = () => {
        socket.emit("helloworld", "testing")
    }

    socket.on("helloworld", data => {
        console.log("helloworld testing app")
        setTest(data)
    })

    // socket.on("generate words", words => {
    //     setWords(words)
    // })

    socket.on("game join room", (roomId) => {
        console.log(`game app ${socket.id} has joined ${roomId}`)
        setPlayers([...players, socket.id])
    })    


    const checkWin = () => {
        if (score["red.500"] === 8){
            setWinner("Red Team")
        } else if (score["blue.400"] === 9){
            setWinner("Blue Team")
        } else if (score.black === 1){
            setWinner("set winner based on which team clicked, after websockets")
        }
    }

    return (  
        <>
        {/* <p>this is a timer: {timestamp}</p> */}
        <p>here is some state: {state}</p>
        <Score 
            score={score}
            winner={winner}
        />
        <p>testing some stuff: {test}</p>
        <Button onClick={testButton}>test</Button>

        {players.length ? 
            players.map(player =>
            <p>player</p>
            )
            :
            <></>
        }
    
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
                        tapCard={tapCard}
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