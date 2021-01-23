import { ChakraProvider } from "@chakra-ui/react"
import './App.css';
import { Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Game from './pages/Game'


function App() {
  return (
    <ChakraProvider>
        <Route exact path="/" render={({history}) =>
          <LandingPage/>
        }/>
        <Route exact path="/game" render={({history}) =>
          <Game />
        }/>
    </ChakraProvider>
  );
}

export default App;
