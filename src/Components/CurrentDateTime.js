import React,{useState} from 'react'

export default function CurrentDateTime() {
    const currentTime = new Date().toLocaleTimeString();
    const [getCTime, setCurrentTime] = useState(currentTime)
    const curretnData = new Date().toLocaleDateString();

    const CurrentTime=()=>{
        let Updatecurrenttime = new Date().toLocaleTimeString();
        setCurrentTime(Updatecurrenttime)
    }

    setInterval(CurrentTime,1000)
  
  return (
    <div>
     Current Date is: {curretnData}
     <br/>
     Current Time is: {getCTime}
     <hr/>
     <br/>
     <h2 style={{color:'red',textAlign:'center',padding:'25px'}}> Current Time is: {getCTime}</h2>
    </div>
  )
}
