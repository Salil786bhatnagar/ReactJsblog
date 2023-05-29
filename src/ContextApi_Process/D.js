import React,{useContext} from 'react'
import { FirstName } from './A';
export default function D() {
    const useInfo = useContext(FirstName);
  return (
    <div>
       <br/>
       {useInfo}
    </div>
  )
}
