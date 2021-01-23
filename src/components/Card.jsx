import React from 'react'
import {useState} from 'react'
import { Box } from '@chakra-ui/react'

const Card = (props) => {
    return (  
        <div>
            <Box as="button" w="100%" h="10" borderWidth="2px" borderColor={props.color} >
                {props.word}
            </Box>
        </div>
    );
}
 
export default Card;