import React from 'react';
import {Link } from 'react-router-dom';
// import Userdatapage from './Userdatapage';

export default function Routingpage() {
    const userData = [
    {id:1,name:'ram', lname:'sharma',contact:89765432178,email:'ram@gmail.com'},
    {id:2,name:'ranu', lname:'bhatnagar',contact:8908765478,email:'ranu@gmail.com'},
    {id:3,name:'pawan', lname:'gupta',contact:8789543456,email:'pawan@gmail.com'},
    {id:4,name:'gopal', lname:'tomar',contact:8945678902,email:'gopal@gmail.com'},
    {id:5,name:'raj', lname:'mohan',contact:89765432178,email:'raj@gmail.com'}
]
  return (
    <div>
      Routingpage
      <br/>
      <hr/>
        {
            userData.map((item)=>{
                return(
                    <div>
                        <Link to={"/Userdatapage/"+item.id+"/"+
                                                  item.name+"/"+
                                                  item.lname+"/"+
                                                  item.contact+"/"+
                                                  item.email
                                                  }
                          >
                          {item.name}
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}
