import React from 'react'

export default function Propsfunction(props) {
    console.log(props)
  return (
    <div >
{/*       
      <h3 style={{textAlign:'center', textDecoration:'underline'}}>
          Props function
      </h3> */}
      <br/>
      <div style={{background:'lightblue'}} >
           <h4 style={{textAlign:'center'}}>User Name:-{props.name}</h4>
           <h4 style={{textAlign:'center'}}>User Email:-{props.email}</h4>
           <h5 style={{textAlign:'center'}}>Address:-{props.other.address}</h5>
      </div>
    </div>
  )
}
