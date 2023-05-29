import React from 'react'
import Child_data from './Child_data'
export default function Parent_data(props) {
   
      function userInformation(data){
       
          console.log(data);
         alert("User Name : "+data[0].name+" "
            +"User emaild : "+data[0].email);

      }
  return (
    <div style={{textAlign:'center'}} >
     Parent_data<br/>
    
    <br/>
    <hr/>
    <Child_data userData={userInformation} />
    </div>
  )
}
