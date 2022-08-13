import React from 'react'
import Table from 'react-bootstrap/Table';
import User from './UserDetails';
export default function Testpage() {

const student=[
            {name:'ram',lname:'sharma',address:'Delhi',email:'ram@gmail.com',contact:9887654309},
            {name:'gopal',lname:'tomar',address:'Gwalior',email:'gopal123@gmail.com',contact:9887634521},
            ]


  return (
    <div style={{textAlign:'center',padding:'20px'}} >
       Testpage<br/>
       
    
       {
          student.map((item)=>
          <User data={item} />
          ) 
       }
      
    </div>
  )
}
