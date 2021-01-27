import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import io from 'socket.io-client'
const socket = io('http://localhost:4000')

const LandingPage = () => {

    useEffect(() => {
        socket.on('connect', () => {
            console.log('landing pg')
        })
    }, [])

    return (  
        <>
        <h1>Codenames Landing Page</h1>
        <button><Link exact to="/game">Play Codenames</Link></button>
        </>
    );
}
 
export default LandingPage;