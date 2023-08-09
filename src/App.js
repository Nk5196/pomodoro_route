import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { ChakraProvider, Box } from '@chakra-ui/react'
import Body from './Component/Body';


function App() {
  return (
    <ChakraProvider>
    <Box className="App" w='100%'  h='100vh' bgGradient='linear(to-l, #000103, #07345b)'>    
       <Header/>
       <Body/> 
    </Box>
    </ChakraProvider>
  );
}

export default App;
