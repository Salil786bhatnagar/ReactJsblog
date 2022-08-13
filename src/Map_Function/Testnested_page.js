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
            {name:'ram',lname:'sharma',email:'ram@gmail.com',contact:9887654309,address:[
                {hno1:'utam nanagr',city:'delhi'},
                {hno2:'balram nagar',city:'Gwalior'},
                {hno3:'saket nagar',city:'Jhansi'},
        
            ]},
            {name:'gopal',lname:'tomar',email:'gopal123@gmail.com',contact:9887634521,address:[
                {hno:'utam nanagr',city:'delhi'},
                {hno:'balram nagar',city:'Gwalior'},
                {hno:'saket nagar',city:'Jhansi'},
        
            ]},
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
          <th>Email</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Action</th>
      </tr>
      </thead>
       {
          student.map((data,i)=>{
            return(
                <>
                <tbody>
                  <tr key={i}>
                      <td>{i+1}</td>
                      <td>{data.name}</td>
                      <td>{data.lname}</td>
                      <td>{data.email}</td>
                      <td>{data.contact}</td>
                      <td>
                      <Table striped bordered hover variant='dark' >
                          {
                              data.address.map((item)=>
                              <tbody>
                                  <tr>
                                      <td>{item.hno}</td>
                                      <td>{item.city}</td>

                                  </tr>
                                </tbody>   
                              )
                          }
                          </Table>
                      </td>
                      <td>
                        <a href='#'>Delelte</a><span>&nbsp;|&nbsp;</span>
                        <a href='#'>Update</a><span>&nbsp;|&nbsp;</span>
                        <a href='#'>View</a><span>&nbsp;|&nbsp;</span>
                      </td>
                  </tr>
                </tbody> 
                </>
            )
          })
       }

      </Table>
     

    </div>
  )
}
