import React,{useRef} from 'react'
import User from '../ForwardRef/User';
 function Admin(props) {
  let inputRef=useRef(null); 

 const updataInput=()=>{
  inputRef.current.value='1000';
  inputRef.current.style.color='lightblue';
 }

  return (
    <div>
       Admin
       <br/>
       <br/>
       <User ref={inputRef}/>
       <hr/>
       <button onClick={updataInput} >Click</button>
    </div>
  )
}

export { Admin };