import React from 'react'
import {useParams, useLocation } from 'react-router-dom' 
export default function UseLocation() {
    // const result = useParams();
    // const location = useLocation();
    // console.log(location);
    return (
        <div>
            <p>
                My Current Location is
                {/* user {fname} {lname} */}
                {/* <span className='location'>{Location.pathname}</span>*/}
           </p>
        </div>
    )
}