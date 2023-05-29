import React from 'react'
import useFetch from "react-fetch-hook";
export default function Ajax_FetchApi_Simple() {
    const { isLoading, data, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if(error){
        return <div>Error:{error.message}</div>
    }else if(isLoading){
        return<div>Loading...</div>
    }else{
  return (
    <div>
      <center>Ajax FetchApi Simple</center>
      <br/>
        <table>
             <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Zip Code</th>
                <th>Phone</th>
                <th>Webside</th>
                <th>Company</th>
        
             </tr>
             {
                data.map((item,i)=>{
                  return(
                        <tr>
                            <td key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.zipcode}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td>{item.company.name}</td>
                            </td>
                        </tr>
            
                  )
                })
              }
        </table>
    
      </div>
  )
 }
}
