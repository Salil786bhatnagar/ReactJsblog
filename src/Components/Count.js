import React,{useState} from 'react'

export default function Countdata() {
    const [count, setCount]= useState(0);
    const ClickhandleInc=()=>{
        setCount(count+1);
    }
    const ClickhandleDec=()=>{
       if(count>0){
        setCount(count-1);
       }
       else{
        setCount(0);
        alert("0 limit is Reached...")
       }
      
    }
  return (
    <div className='mainDiv'>
       <button onClick={ClickhandleInc} >Increment Value</button>
      <br/>
        {count}
      <br/>
       <button onClick={ClickhandleDec} >Decriment Value</button>
      
    </div>

  )
}
