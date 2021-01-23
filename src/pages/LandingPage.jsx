import React from 'react'
import {Link} from 'react-router-dom'

const LandingPage = () => {
    return (  
        <>
        <h1>Codenames Landing Page</h1>
        <button><Link exact to="/game">Play Codenames</Link></button>
        </>
    );
}
 
export default LandingPage;