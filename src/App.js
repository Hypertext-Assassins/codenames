import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Game from './pages/Game'


function App() {
  return (
    <div>
        <Route exact path="/" render={({history}) =>
          <LandingPage/>
        }/>
        <Route exact path="/game" render={({history}) =>
          <Game />
        }/>
    </div>
  );
}

export default App;
