import React,{useState,useEffect} from 'react'
import User from './Userdata';
export default function Admindata() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(2); 
   
  return (
    <div style={{textAlign:'center'}} >
        Admindata
        <br/><br/>
        <User u_count={count} u_data={data} />
        <br/>
        <button onClick={()=>setCount(count+1)} >Click Count </button>
        <br/>
      
        <br/>
        <button onClick={()=>setData(data*2)} >Click Data</button>
    </div>
  )
}
