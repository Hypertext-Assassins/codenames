import { useState } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {

    const [user, setUser] = useState('');
    const [room, setRoom] = useState('');

    return (  
        <>
        <h1>Codenames Landing Page</h1>
        <input placeholder="username" type="text" onChange={(e) => setUser(e.target.value)}/>
        <input placeholder="room" type="text" onChange={(e) => setRoom(e.target.value)}/>
        <button><Link exact to={`/game?room=${room}`}>Play Codenames</Link></button>
        </>
    );
}
 
export default LandingPage;