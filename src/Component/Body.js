import { Box, Button, ButtonSpinner, Heading } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiOutlinePause } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { RxReset } from 'react-icons/rx';

const Body = () => {

    const [ispaused, setisPaused] = useState(true)
    const [secondsLeft, setSecondsLeft] = useState(25* 60);
    const [mode, setMode] = useState("Work")
  
    useEffect(() => {
        let interval;
    
        if (!ispaused && secondsLeft > 0) {
          interval = setInterval(() => {
            setSecondsLeft(secondsLeft - 1);
          }, 1000);
        } else if (secondsLeft === 0) {
          clearInterval(interval);
        }
    
        return () => clearInterval(interval);
      }, [ispaused, secondsLeft]);

      const toggleTimer = () => {
        setisPaused(!ispaused);
      };
      const toggleMode = () => {
        setMode(mode==="Work"?"Break":"Work");
        if(mode==="Work")setSecondsLeft(5*60);
        else if(mode==="Break") setSecondsLeft(25*60)
      };

      const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return { minutes, seconds: remainingSeconds };
      };
      const { minutes, seconds } = formatTime(secondsLeft);
      
      const percentage = mode=="Work"?((secondsLeft / 1500) * 100):((secondsLeft / 300) * 100);
      console.log(percentage); // This will output 100
      

      const Reset = () => {
       
        if(mode==="Work")setSecondsLeft(25*60);
        else if(mode==="Break") setSecondsLeft(5*60)
        setisPaused(true)
      };

  return (
    <Box mt={100} >
      <CircularProgress value={percentage}  p={0} m={0}  color={mode==="Work"&&percentage>99.9?"purple.600":percentage>50?"purple.400":"orange.400"} borderRadius="full" size="210px" thickness="3px" >
        <CircularProgressLabel color="white">
        {minutes}:{seconds < 10 ? '0' : ''}{seconds}<Heading size="sm" fontWeight="normal" mt={1}>Minutes</Heading>
        </CircularProgressLabel>
      </CircularProgress>
      <br/>
      <Button  backgroundColor={'blackAlpha.300'}  _hover='none'  size="md" fontWeight="semibold" color='white' onClick={toggleMode} m={3}>{mode}</Button>  <br/>
      <Button backgroundColor={'blackAlpha.300'} _hover='none'  onClick={toggleTimer}>  {ispaused ?  <BsFillPlayFill color='white'/> : <AiOutlinePause color='white'/>}</Button>
      <Button  backgroundColor={'blackAlpha.300'}  _hover='none'    color='white'  onClick={Reset} m={3}><RxReset color='white'/></Button>  
    </Box>
  );
};

export default Body;
