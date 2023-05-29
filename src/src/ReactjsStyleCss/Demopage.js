import React from 'react'
import style from '../custom.module.css'
export default function Demopage() {
  return (
    //   inline css in using react.js
    // style={{textAlign:'center'}}

    <div style={{textAlign:'center'}} >
        Demopage
        <br/>
        {/* inlin Css in react.js */}
        <h1 style={{color:'yellow',backgroundColor:'Black'}} >Hello inline css</h1>
        <br/>
        {/* External css in react.js */}
        <h1 className='demoh1' >hello External css</h1>
        <br/>
        {/* module css in react.js */}
        <h1 className={style.h1Tag} >Hello Module css</h1>
    </div>
  )
}
