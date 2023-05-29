import React,{useState, useEffect} from 'react'
import { FirstName } from '../Components/ContextApiDemo';
export default function Getmethod() {
       
    const [getData, setData] = useState([]);
    // const userHandle=()=>{}
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
       result.json().then((resp)=>{
        //    console.warn("result",resp);
        setData(resp);
       }) 
    })
    },[])
   
  return (
    <>
    <div className='div-header'>
      Header
         <FirstName.Consumer>
         {
           (fname)=> {return <h1>My name is {fname} </h1>}
         }
        {/* {value => <div>The answer is {value}.</div>} */}
        </FirstName.Consumer> 
    </div>
     <table border="1">
         <tr>
             <th>User Id</th>
             <th>Name</th>
             <th>User Name </th>
             <th>Email</th>
             <th>Address</th>
             <th>Zip-code</th>
         </tr>
         {
             getData.map((item)=>
             <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
                <td>{item.address.zipcode}</td>
             </tr>
             )
         }
     </table>
     <div className='div-footer'>Footer</div>
    </>
  )
}
