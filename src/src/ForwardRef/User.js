import React,{forwardRef} from 'react'

function User(props,ref) {
  return (
    <div style={{textAlign:'center'}} >
    <br/>
      <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(User);