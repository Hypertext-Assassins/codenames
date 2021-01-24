import React from 'react'
import {useState, useEffect} from 'react'
import { Box, Button } from '@chakra-ui/react'

const Card = (props) => {

    const [color, setColor] = useState("gray.400")
    const [isTapped, setIsTapped] = useState(props.isTapped)

    useEffect(()=>{
        setColor("gray.400")
    }, [props.generateWords])

    const tapCard = () => {
        if (!isTapped){
            setColor(props.color)
            setIsTapped(true)
        } else {
            setColor("gray.400")
            setIsTapped(false)
        }
    }

    return (  
        <div>
            <Button variant="outline" w="100%" h="10" borderColor={color} bg={color} onClick={tapCard}>
                {props.word}
            </Button>

            {/* <Box as="button" w="100%" h="10" borderWidth="2px" borderColor="gray.400" >
                {props.word}
            </Box> */}
        </div>
    );
}
 
export default Card;