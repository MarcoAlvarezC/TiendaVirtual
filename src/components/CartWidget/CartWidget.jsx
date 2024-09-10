import{
    Text,
    Flex,
} from '@chakra-ui/react'
import { FaOpencart } from "react-icons/fa6";
export const CartWidget = () =>{
    return(
        <Flex 
            alignItems={"center"} 
            height={"100%"}
            justifyContent={"space-between"}
            width={"50px"}
        >
        <FaOpencart  size={"20"}/>   
        <Text>0</Text>
        </Flex>
 
    )
}

