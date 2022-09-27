import React,{useState} from 'react'

export default function Inputbox_getvalue() {
        const [getData, setData]=useState(null)
        const [print, setHandleClick]=useState(false);
        const handleData=(val)=>{
            console.log(val.target.value)
            setData(val.target.value)
            setHandleClick(false); 
        }
        const handleClick=()=>{
            setHandleClick(true)
        }
  return (
    <div style={{color:'red',textAlign:'center'}}>
       {
          print?<h4>{getData}</h4>:null
       }
        <input type="text" onChange={handleData} />
        <button onClick={handleClick} >Click Me</button>
        
    </div>
  )
}
