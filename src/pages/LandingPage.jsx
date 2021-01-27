import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import io from 'socket.io-client'
const socket = io('http://localhost:4000')

const LandingPage = () => {

    const [state, setState] = useState("")

    useEffect(() => {
        // socket.on('connect', () => {
        //     console.log(`${socket.id} has connected`)
        //     setState("SOCKET IO WORKS FOR THE LANDING PG")
        // })
        socket.on("hello", (arg) => {
            console.log(arg)
        })
    }, [])

    return (  
        <>
        <p>If socket.io works, this state should say something: {state}</p>
        <h1>Codenames Landing Page</h1>
        <button><Link exact to="/game">Play Codenames</Link></button>
        </>
    );
}
 
export default LandingPage;