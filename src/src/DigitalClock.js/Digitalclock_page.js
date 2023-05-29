import React,{useState} from 'react'

export default function Digitalclock_page() {
    let currentTime = new Date().toLocaleTimeString();
    const [showdata, setShowDate]=useState(currentTime);
    const handleDate=()=>{
        let updateTime = new Date().toLocaleTimeString();
        setShowDate(updateTime)
    }
   setInterval(handleDate);
  return (
    <div>
       <h2> Digitalclock_page </h2>
       <br/><hr/>
       <br/>
        <h3 style={{backgroundColor:'#555',color:'#fff' }}>{showdata}</h3>
     </div>
  )
}
