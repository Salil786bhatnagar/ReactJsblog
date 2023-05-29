import React,{useRef} from 'react'

export default function Uncontrolled() {
    let inputRef1= useRef(null);
    let inputRef2= useRef(null);
    
    const submitHandle=(e)=>{
     e.preventDefault()
     console.warn(inputRef1.current.value)
     console.log(inputRef2.current.value);  
     let inputRef3 = document.getElementById('ref3').value;
     console.log(inputRef3);
    }
  return (
      <div style={{textAlign:'center'}} >
         Uncontrolled<br/><br/>
         <hr/>
         <form onSubmit={submitHandle} >
              <input type="text" ref={inputRef1} /><br/><br/>
              <input type="text" ref={inputRef2} /><br/><br/>
              <input id="ref3" type="text" /><br/><br/>
              <br/>
              <button>Submit</button>
         </form>
      </div>
  )
}
