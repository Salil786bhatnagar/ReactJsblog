import React,{useEffect} from 'react'
import { useDebugValue } from 'react'

export default function useLoggerCustomHooks(value) {
    useDebugValue(value); 
    useEffect(()=>{
       console.log(value)
    },[value])

  return (
    <div>useLoggerCustomHooks</div>
  )
}
