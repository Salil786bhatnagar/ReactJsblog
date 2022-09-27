import React,{useState} from 'react'

export default function Reactcondition() {
    const [status, setStatus]=useState(1);
  return (
    <div style={{textAlign:'center'}} > 
        React condition
        <br/>
         {
           status==1?
           <h3 style={{color:'darkorange'}}>Call User 1</h3>
           :status==2?
           <h3 style={{color:'darkblue'}}>Call User 2</h3>
           :status==3?
            <h3 style={{color:'lightblue'}}>Call User 3</h3>
           :<h3 style={{color:'red'}}>Do not match Number please try again...</h3>
         }
        <br/>
    </div>
  )
}
