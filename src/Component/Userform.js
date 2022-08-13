import React,{useState} from 'react'

export default function Userform() {
    const [nameData, setNameData]=useState("");
    const [selectData, setSelectData]=useState("");
    const [checkData, setCheckData]=useState(""); 
  
     const handleSubmit=(e)=>{
      console.log(nameData, selectData, checkData)
      e.preventDefault();
     }

     const handleClear=()=>{
        setNameData("");
        setSelectData("");
        setCheckData("");
     }
     
  return (
    <div style={{textAlign:'center', padding:'50px'}} >
     User form

     <form onSubmit={handleSubmit}>
     <input type="text" placeholder='enter the name' onChange={(e)=>setNameData(e.target.value)} /><br/><br/>
     <select onChange={(e)=>setSelectData(e.target.value)} >
         <option>Select Option</option>
         <option>React.js</option>
         <option>Node.js</option>
         <option>Javascript</option>
         <option>Html</option>
         <option>Css</option>
     </select>
     <br/>
     <span><input type="checkbox" onChange={(e)=>setCheckData(e.target.checked)} />Term of Condition in form.</span>
     <br/>
     
     <br/>
     <span style={{padding:'10px'}} ><button type='submit'>Submit</button></span>
     <span style={{padding:'10px'}} ><button onClick={handleClear} >Reset</button></span>
     </form>
    
    </div>
  )
}
