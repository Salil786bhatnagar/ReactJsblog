import React,{useState}from 'react'

export default function ToggleData() {
    const [getState, setState]=useState(true);
  return (
    <div style={{textAlign:'center'}}>
      ToggleData
      <br/>
         {
             getState?<h5 style={{color:'green'}}>Welcome to the new "My learning" here at W3schools. This will be your hub to all the tutorials we offer and your learning progress.</h5>:<span style={{color:'red'}}>Not Found Data</span>
         }
        <br/>
      <button onClick={()=>setState(!getState)}>Toggle</button>
    </div>
  )
}
