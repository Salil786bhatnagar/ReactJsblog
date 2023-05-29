import React from 'react'

export default function Child_data(props) {
   const data = [
                   {name:'salil bhatnagar',email:'salil@gmail.com'},  
                   {name:'ravi sharma',email:'ravi@gmail.com'}
                ]
  return (
    <div style={{textAlign:'center'}}> 
      Child_data
      <br/> <br/>
      
      <br/> <br/>

      <button onClick={()=>props.userData(data)}>Click Me</button>
    </div>
  )
}
