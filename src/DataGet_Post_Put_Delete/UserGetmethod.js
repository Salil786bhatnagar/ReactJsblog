import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function UserGetmethod() {

  const[name, setName] = useState("") 
   const[address, setAddress] = useState("") 
   const[city, setCity] = useState("") 
   const[contact, setContact] = useState("") 
   const[email, setEmail] = useState("") 
   const[zipcode, setZipcode] = useState("") 

   const[getData, setData] = useState([]);
   const[userId, setUserId] = useState(null);
  
   
   
   const updateUser=(id)=>{
    //  fetch("http://localhost:3000/posts",{
    //    method:'PUT',
    //  })
    console.log(getData[id-1]);
    let item = getData[id-1]
    setName(item.name)
    setAddress(item.address)
    setCity(item.city)
    setContact(item.contact)
    setEmail(item.email)
    setZipcode(item.zipcode)
    setUserId(item.userId)
   }


   function updateuserData(){ 
     let dataUpdate = {name,address,city,contact,email,zipcode,userId}
     fetch(`http://localhost:3000/posts/${userId}`, {
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
      body:JSON.stringify(dataUpdate)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getList();
      })
    })
   }
   
  

   const getList=()=>{
    fetch("http://localhost:3000/posts").then((result)=>{
      result.json().then((resp)=>{
       //    console.warn("result",resp);
       setData(resp);
  
       })
     })
   }

   const deleteUser=(id)=>{
    //  alert(id)
    fetch(`http://localhost:3000/posts/${id}`, {
      method:'DELETE',
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp);
        getList();
      })
    })
   }

 

   useEffect(()=>{
    getList(); 
   },[])

  return (
    <div style={{textAlign:'center'}}>
     User Get method
    <hr/>
        <table border="1">
                     <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>address</th>
                        <th>city</th>
                        <th>contact</th>
                        <th>email</th>
                        <th>zipcode</th>  
                        <th>Action</th>
                     </tr>

                  {
                      getData.map((item, i)=>
                      <tr key={i}>
                          <td>{i+1}</td>
                          <td>{item.name}</td>
                          <td>{item.address}</td>
                          <td>{item.city}</td>
                          <td>{item.contact}</td>
                          <td>{item.email}</td>
                          <td>{item.zipcode}</td>
                          <td>
                            <span><button onClick={()=>deleteUser(item.id)}>Delelte</button></span>
                            <span><button onClick={()=>updateUser(item.id)}>Update</button></span>
                          </td>
                      </tr>
                      )
                  }   
        </table>
      
      <p className='Updatedata'>
      <h3> User Update Method</h3><br/>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" placeholder='enter your name' /><br/>
      <input type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}} name="address" placeholder='enter your address' /><br/>
      <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} name="city" placeholder='enter your city' /><br/>
      <input type="text" value={contact} onChange={(e)=>{setContact(e.target.value)}} name="contact" placeholder='enter your contact' /><br/>
      <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder='enter your email' /><br/>
      <input type="text" value={zipcode} onChange={(e)=>{setZipcode(e.target.value)}} name="zipcode" placeholder='enter your zipcode' /><br/><br/>
      <button onClick={updateuserData}>Update Data</button>
      </p>
    </div>
  )
}
