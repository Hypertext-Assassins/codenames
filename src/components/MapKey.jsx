import React from 'react'
import { Grid, GridItem, Box} from "@chakra-ui/react"


const MapKey = ({words}) => {
    return (
        <>
            <Grid templateColumns="repeat(5, 1fr)" templateRows="repeat(5, 1fr)" gap={1}>
                {words.map(el => 
                    <Box key={el.id} bg={el.color} textAlign="center" rounded="md" borderColor="white" border="1px">{el.word}</Box>
                )}
            </Grid>
        </>  
    );
}
 
export default MapKey;