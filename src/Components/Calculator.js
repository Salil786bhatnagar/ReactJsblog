import React,{useState} from 'react'

export default function Calculator(a,b) {
    // const addition = a+b;
    const [add , setadd]=useState();
   
     const adddata=()=>{
         setadd(add+1)
     }
  return (
    <div>
    Calculator
    <input onClick={adddata}>add</input>
    {add}
    </div>

  )
}
