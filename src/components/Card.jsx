import React from 'react'
import { Box } from '@chakra-ui/react'

const Card = (props) => {
    return (  
        <div>
            <Box as="button" w="100%" h="10" borderWidth="2px" borderColor={props.color}>
                {props.word}
            </Box>
            {/* <p>{props.id} - {props.word} - {props.color}</p> */}
        </div>
    );
}
 
export default Card;