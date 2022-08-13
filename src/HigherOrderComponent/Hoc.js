import React from 'react'
 function Hoc1(props) {
  return (
    <div style={{backgroundColor:'lightgreen'}}>
      Hoc 1
      <br/>
      <hr/>
      <props.data/>
      <br/>

   </div>
  )
}

function Hoc2(props) {
    return (
      <div style={{backgroundColor:'blue'}}>
        Hoc 2
        <br/>
        <hr/>
        <props.data/>
        <br/>
  
     </div>
    )
  }

  function Hoc3(props) {
    return (
      <div style={{backgroundColor:'lightblue'}}>
        Hoc 3
        <br/>
        <hr/>
        <props.data/>
        <br/>
  
     </div>
    )
  }
export {Hoc1, Hoc2, Hoc3}