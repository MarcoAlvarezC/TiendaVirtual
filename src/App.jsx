import {useEffect} from "react"
import { ChakraProvider } from "@chakra-ui/react";
import { MainRouter } from "./routes";
import { ItemListContainer } from "./components";

function App() {

  return (
    <ChakraProvider>
      <MainRouter/>
    </ChakraProvider>
  );
}

export default App;