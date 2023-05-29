import React,{useState} from 'react'
import useLoggerCustomHooks from './useLoggerCustomHooks';
export default function UseCustumHooks_Data() {
    const[name, setName]=useState();
    // console.log("use name",name)
    useLoggerCustomHooks(name) 
  return (
    <div>
        <h4>UseCustumHooks Data</h4>
        <br/>
        <input type='text' placeholder='enter value' onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}
