import React,{useContext} from 'react'
import {DataInformation} from './Childapp'
export default function Child() {
   const sample= useContext(DataInformation)
console.log(sample)
  return (
    <div>

       <h2>Child Component</h2>
       {sample.name}<br/>
       {sample.lname}<br/>
       {sample.contact}<br/>
       {sample.email}<br/>
       {sample.address}
    
    </div>
  )
}
