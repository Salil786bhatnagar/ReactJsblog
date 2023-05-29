import React from 'react'
import Count from './Count';
export default function Countprops_result(props) {

    function userInformation(result){
       
        alert("User Name : "+result[0].name+" "+" " +"User emaild :"+result[0].email);

    }
  return (
    <div>
       Countprops_result
     
     <br/>
     <Count data={userInformation}/>
    </div>
  )
}
