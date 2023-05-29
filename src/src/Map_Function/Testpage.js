import React from 'react'
import Table from 'react-bootstrap/Table'
export default function Testpage() {

    // user using in Array function:---- 

    // const student=['ram','ravi','anil','gopal','pawan'];
    
    // student.map((item)=>{
    //     console.log("my name is:",item);
    // })

    //  for(let i=0; i<student.length; i++);
    //  {
    //     console.log("my name is for loop :",studentk[i]);
    //  }


    // user full detail in using Array Object:-----
const student=[
            {name:'ram',lname:'sharma',address:'Delhi',email:'ram@gmail.com',contact:9887654309},
            {name:'gopal',lname:'tomar',address:'Gwalior',email:'gopal123@gmail.com',contact:9887634521},
            {name:'ravi',lname:'kumrawat',address:'Indore',email:'ravi@gmail.com',contact:8877665489},
            {name:'manoj',lname:'pndit',address:'Bhopal',email:'manoj02@gmail.com',contact:9844556543},
            {name:'gopal',lname:'jain',address:'Indore',email:'poojajain@gmail.com',contact:9345786509}
            ]


  return (
    <div style={{textAlign:'center',padding:'20px'}} >
       Testpage<br/>
       
      <Table striped bordered hover variant='dark' >
      <thead>
      <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Action</th>
      </tr>
      </thead>
      <tbody>
       {
          student.map((data,i)=>
          data.name === "gopal"?
          <tr key={i}>
            <td>{i+1}</td>
            <td>{data.name}</td>
            <td>{data.lname}</td>
            <td>{data.address}</td>
            <td>{data.email}</td>
            <td>{data.contact}</td>
            <td>
              <a href='#'>Delete</a>&nbsp;<span>|</span>&nbsp;
              <a href='#'>Update</a>&nbsp;<span>|</span>&nbsp;
              <a href='#'>View</a>
            </td>
          </tr>:null  
          ) 
       }
       </tbody> 
      </Table>
     

    </div>
  )
}
