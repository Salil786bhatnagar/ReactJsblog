import React,{useState} from 'react'

export default function Hide_show() {
  const [getData, setData]=useState(true);
  return (
    <div style={{textAlign:'center'}}>
    Hide show
     
     {
        getData ? <h4>hello this is hide and show data</h4>: null
     }
     <br/>
     <span style={{padding:'10px'}} ><button onClick={()=>setData(false)} >Hide</button></span>
     <span style={{padding:'10px'}} ><button onClick={()=>setData(true)} >Show</button></span>
    </div>
  )
}
