import React,{useState, useCallback} from "react";
import Button from '@material-ui/core/Button';

const UseCallbackPage = () => {
    const [counter, setCounter] = useState(0);
    
    const increment = useCallback(() => setCounter(counter => counter + 1), []);
    
    return (
      <div>
      <hr/>
      <div>{counter}</div>
      <hr/>
        <Button onClick={increment}>Click Me</Button>
        
        
      </div>
    );
  }
  export default UseCallbackPage;