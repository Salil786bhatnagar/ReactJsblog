import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
export default function CounterReduxData() {
  const counter = useSelector(state=>state.counter);
 
  const dispatch = useDispatch();

   function handleIncrement(){
    dispatch({type:"Increment"})
   }
   
   function handleDecrement(){
    dispatch({type:"Decrement"})
   }

  return (
    <div>
        <h3>Counter Redux Data</h3>

        <br/>
        {counter}
        <br/>
        <button onClick={()=>handleIncrement()} >Click+</button> &nbsp; &nbsp;
        <button onClick={()=>handleDecrement()} >Click-</button>
    </div>
  )
}
