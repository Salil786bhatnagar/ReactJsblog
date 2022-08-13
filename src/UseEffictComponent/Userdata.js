import React,{useEffect} from 'react'

export default function Userdata(props) {
    useEffect(()=>{
        alert("show to count value"+props.u_count);
      },[props.u_count]);

      useEffect(()=>{
        alert("show to count value"+props.u_data);
      },[props.u_data]);
  return (
    <div>
        Userdata
        <br/>
       <span>Count: {props.u_count}</span> 
        <br/>
       <span>Data: {props.u_data}</span> 
   </div>
  )
}
