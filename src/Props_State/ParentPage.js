import React,{useState} from 'react'

export default function PropsStatepage(props) {
  var currentTime = new Date().toLocaleTimeString()
  const [getTime, setTime] = useState(currentTime);
  const clickHandle=()=>{
  const UpdateTime = new Date().toLocaleTimeString();   
    setTime(UpdateTime)
  }
  
  setInterval(clickHandle);

  return (
    <div>
      <h1>Props State Page</h1>
       <hr/>
       <br/>
       <hr/>
       
       <span>{props.cTime}</span>  {getTime}
     
    </div>
  )
}
