import {useState} from 'react';
import { Box, Spacer, Flex } from "@chakra-ui/react"


const Score = (props) => {

    return (  
        <>
            <Box className="score-board"  
                borderRadius="lg" 
                overflow="hidden"
            >
                <p>Score component</p>
                { props.winner ?
                    <p>Congrats {props.winner} has won!</p>    
                :
                    <></>
                }
                <Spacer />
                <Flex>
                    <Box 
                        bg="red.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="lg"
                        m="50px"
                        p="10px"
                        boxShadow="dark-lg"
                        px="4"
                        borderRadius="md" 
                    >
                        RED: {props.score["red.500"]}
                    </Box>
                    <Spacer />
                    <Box 
                        bg="blue.400"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="lg"
                        boxShadow="dark-lg"
                        p="10px"
                        m="50px"
                        px="4"
                        borderRadius="md"
                    >
                        BLUE: {props.score["blue.400"]}
                    </Box>
                </Flex>
            </Box>
        </>
    );
}
 
export default Score;