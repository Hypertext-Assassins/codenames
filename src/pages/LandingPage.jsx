import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import io from 'socket.io-client'
const socket = io('http://localhost:4000')

const LandingPage = (props) => {

    const [state, setState] = useState("")
    const [roomId, setRoomId] = useState("")

    useEffect(() => {
        // socket.on('connect', () => {
        //     console.log(`${socket.id} has connected`)
        //     setState("SOCKET IO WORKS FOR THE LANDING PG")
        // })
        socket.on("hello", (arg) => {
            console.log(arg)
        })
    }, [])

    const handleChange = (e) => {
        setRoomId(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(roomId)
        socket.emit("join room", roomId)
        props.history.push("/game")  //wrapping components from app.js with Route from react-router-dom provides a history prop
    }

    socket.on("landing join room", (roomId) => {
        console.log(`landing pg app ${socket.id} has joined ${roomId}`)
        // setPlayers([...players, socket.id])
    })  

    return (  
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange}></input>
            <button type="submit">Enter Room</button>
        </form>
        <h1>Codenames Landing Page</h1>
        <button><Link exact to="/game">Play Codenames</Link></button>
        </>
    );
}
 
export default LandingPage;