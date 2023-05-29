import React,{useState} from 'react'
export default function UseStateData() {
    const[showData, setShowData]=useState(true);
  return (
    <div>
        <h4>UseState Data</h4>
        <hr/>
          <p>
            { showData ? <h2>Hide, Show and Togle show the value</h2>:null}
          </p>
        <br/>
        <div>
             <button onClick={()=>setShowData(false)}>Hide</button> &nbsp;
             <button onClick={()=>setShowData(true)}>Show</button> &nbsp;
             <button onClick={()=>setShowData(!showData)}>Togle</button> &nbsp;
        </div>
    </div>
  )
}
