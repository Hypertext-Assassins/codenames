import React from 'react'
import {useState, useEffect} from 'react'
import { Box, Button } from '@chakra-ui/react'

const Card = (props) => {

    // const [color, setColor] = useState("gray.400")
    // const [isTapped, setIsTapped] = useState(props.isTapped)
    // // const [colorCount, setColorCount] = useState({"red.500": 0, "blue.400": 0, "white": 0, "black": 0})
    // // const [redCount, setRedCount] = useState(0)

    // // useEffect(()=>{
    // //     setColor("gray.400")
    // //     setIsTapped(false)
    // // }, [props.generateWords])

    // const tapCard = () => {
    //     if (!isTapped){
    //         setColor(props.color)
    //         setIsTapped(true)
    //         // setColorState(prevColorState => ({
    //         //     ...prevColorState,
    //         //     [props.color]: 1
    //         // }))
    //         // setRedCount(redCount => redCount +1)
    //         // console.log(redCount)
    //         props.setColorCount(props.color);
    //     } 
    // }

    const handleClick = () => {
        props.tapCard(props.id, props.color, props.word);
    }

    return (  
        <div>
            {props.isTapped ? 
                <Button variant="outline" w="100%" h="10" borderColor={props.color} bg={props.color} onClick={handleClick}>
                    {props.word}
                </Button>
            :
                <Button variant="outline" w="100%" h="10" borderColor={"gray.400"} bg={"gray.400"} onClick={handleClick}>
                    {props.word}
                </Button>
            }

            {/* <Button variant="outline" w="100%" h="10" borderColor={color} bg={color} onClick={tapCard}>
                {props.word}
            </Button> */}

            {/* <Box as="button" w="100%" h="10" borderWidth="2px" borderColor="gray.400" >
                {props.word}
            </Box> */}
        </div>
    );
}
 
export default Card;