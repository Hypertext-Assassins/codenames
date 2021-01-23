import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import { ChakraProvider, Button } from "@chakra-ui/react";
import './App.css';
import { Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Game from './pages/Game'


function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }


  

  return (
    <ChakraProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </>
        <Route exact path="/" render={({history}) =>
          <LandingPage/>
        }/>
        <Route exact path="/game" render={({history}) =>
          <Game />
        }/>
        <br></br>
        
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
