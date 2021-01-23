import React from 'react'
import {useState} from 'react'
import { Box, Button } from '@chakra-ui/react'

const Card = (props) => {

    const [color, setColor] = useState("gray.400")

    return (  
        <div>
            <Button variant="outline" w="100%" h="10" borderColor={color} bg={color} onClick={()=>setColor(props.color)}>
                {props.word}
            </Button>

            {/* <Box as="button" w="100%" h="10" borderWidth="2px" borderColor="gray.400" >
                {props.word}
            </Box> */}
        </div>
    );
}
 
export default Card;