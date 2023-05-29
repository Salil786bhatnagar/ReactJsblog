import React,{useState} from 'react'

export default function Controlled() {
    const [getName, setName] = useState( )
  return (
    <div style={{textAligh:'center'}} >
    Controlled
    <br/> <br/>
    <input type="text" value={getName} onChange={(e)=>setName(e.target.value)} />
    <br/> <br/>
    <hr/>
   {getName}
    </div>
  )
}
