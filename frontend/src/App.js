import React from "react"; 
import { Calculate } from "./libs/api";
import * as Styles from './libs/styles';

import { Container,
        Typography,
        TextField,
        Button } from '@mui/material'

function App() {

  const [inputValue, SetInputValue] = React.useState("");
  const [fibonacciNumber, SetFibonacciNumber] = React.useState(null);

  const handleClick = async() => {

    if(inputValue < 0){
      alert('Your input must be a number greather or equal to 0');
      return;
    }

    try{
      var result = await Calculate(inputValue);
    }catch(e){
      alert('Something went wrong. \nPlease, try again.');
      console.log(`Error while calculating fibonacci number: \n${e}`);
      return;
    }
    
    if(result.success){
      SetFibonacciNumber(result.number);
    }
  }

  return (
    <Container>

      <Container
        style={Styles.Containers.MainHeader}
      >
        <Typography
          style={Styles.Headers.Main}
        >
          Calculate Fibonacci!        
        </Typography>
      </Container>

      <Container
        style={Styles.Containers.Form}
      >
      
        <TextField 
          value={inputValue}
          onChange={e => SetInputValue(e.target.value)}
          type='number'
        />
      
        <Button
          onClick={handleClick}
        >
          Calculate
        </Button>
      
      </Container>

      <Container
        style={Styles.Containers.Results}
      >

      <Typography>
        The Fibonacci sequence is divergent and it's terms tend to infinity.
      </Typography>

      {fibonacciNumber !== null && (
        <Typography>
          Your fibonacci number: {fibonacciNumber}
        </Typography>
      )}

      </Container>

    </Container>
  );
}

export default App;
