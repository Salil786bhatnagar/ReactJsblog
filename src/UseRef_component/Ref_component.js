import React, { useRef } from 'react'

export default function Ref_component() {
    let inputRef1 = useRef(null);
    let inputRef2 = useRef(null);

    function submitHandle(){
        console.warn(inputRef1.current)
     inputRef1.current.style.color='red'
     inputRef2.current.style.color='red'  
    }
  return (
    <div style={{textAlign:'center'}} >
      Ref_component
      <br/>
      <hr/>
  
          <input type="text" ref={inputRef1} /><br/><br/>
          <input type="text" ref={inputRef2} />
          <br/><br/><br/>
          <button onClick={submitHandle} >Submit</button>

     </div>
  )
}
