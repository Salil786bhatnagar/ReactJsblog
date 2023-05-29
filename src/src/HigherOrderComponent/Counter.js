import React,{useState} from 'react'

export default function Counter() {
    const [Count , setCount]=useState(0);
  return (
    <div>
          Counter
          <br/>
          <h3>{Count}</h3>
          <hr/>
          <br/>
        
          <button onClick={()=>setCount(Count+1)} >Click</button>
          <br/> <br/>
          <hr/>
        
    </div>
  )
}
