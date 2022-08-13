import React, { useState } from 'react'

export default function UserPostmethod() {

   const[name, setName] = useState("") 
   const[address, setAddress] = useState("") 
   const[city, setCity] = useState("") 
   const[contact, setContact] = useState("") 
   const[email, setEmail] = useState("") 
   const[zipcode, setZipcode] = useState("") 
   
   function saveUser(){
    //    console.log({name,address,city,contact,email,zipcode})
       let userData={name,address,city,contact,email,zipcode}
       fetch("http://localhost:3000/posts",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(userData)
       }).then((result)=>{
        //    console.warn("User Data",result)
        result.json().then((resp)=>{
            console.warn("resp",resp);
        })
       });
   }

  return (
     <div style={{textAlign:'center'}}>
      User Post Method
      <hr/>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" placeholder='enter your name' /><br/>
      <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} name="address" placeholder='enter your address' /><br/>
      <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} name="city" placeholder='enter your city' /><br/>
      <input type="text" value={contact} onChange={(e)=>{setContact(e.target.value)}} name="contact" placeholder='enter your contact' /><br/>
      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder='enter your email' /><br/>
      <input type="text" value={zipcode} onChange={(e)=>{setZipcode(e.target.value)}} name="zipcode" placeholder='enter your zipcode' /><br/><br/>
      <button type='button' onClick={saveUser}>Save new User</button>
    </div>
  )
}
