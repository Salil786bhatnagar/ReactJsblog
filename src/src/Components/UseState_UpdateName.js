import React,{useState} from 'react'

export default function Statefunction() {
    const userName = <h3 style={{color:'red'}}>ram</h3>;
    const [data, setdata] = useState(userName)
    const [Update, setUpdatedata] = useState('')
    const [btnUpdate, setbtnUpdate] = useState("click me")

    const updateData=(e)=>{
        setdata(<h3 style={{color:'green'}} >{Update}</h3>)
        console.log('setdata')
        setbtnUpdate("Update")
        e.preventDefault();
    }
    const resetHandle=()=>{
      setdata("")
    }
    
  return (
    <div style={{textAlign:'center'}} >
      <h4>State Update Function</h4>
       <div>
         <input type='text' onChange={(e)=>setUpdatedata(e.target.value)} placeholder='Update data' />
       </div>
       <br/>
      <div>
        <span className='btn-Left'> <button onClick={updateData}>{btnUpdate}</button></span>
      </div>
      <br/>
      <div>
        <span className='btn-right'><button onClick={()=>resetHandle()}>Reset</button></span>
      </div>
      <div>
      <hr/>
        <h3 style={{textAlign:'center',color:'greenyellow'}}>{data}</h3>
        <hr/>
      </div>
    </div>
  )
}
