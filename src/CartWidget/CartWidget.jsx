import{
    Text,
    Flex,
} from '@chakra-ui/react'
import { FaOpencart } from "react-icons/fa6";
const CartWidget = () =>{
    return(
        <Flex alignItems={"center"} >
        <FaOpencart  size={"20"}/>   
        <Text>0</Text>
        </Flex>
 
    )
}

export default CartWidget;