import React from 'react'
import { useLocation } from 'react-router-dom';

const UseLocationPage=()=> {
    const location = useLocation();
    console.log(location);
  return (
    <div>
       <h1> UseLocationPage </h1>
       <hr/>
         <h1>hello {location.pathname} </h1>
    </div>
  )
}
export default  UseLocationPage;