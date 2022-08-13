import React from 'react'

export default function Click_event_function() {
    let data = "salil bhatnagar"
    function apple(){
        alert(data)
    }
  return (
    <div style={{color:'red',textAlign:'center'}}>
      Click_event_function
     <br/>
      <h4 style={{color:'darkgoldenrod'}} >{data}</h4>
      <br/>
      {/* <button onClick={()=>apple()} >cick me</button> */}
      {/* <button onClick={()=>apple()} >cick me</button> */}
      <button onClick={apple} >cick me</button>
    </div>
  )
}
