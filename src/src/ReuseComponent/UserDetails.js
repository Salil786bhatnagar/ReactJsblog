import React from 'react'

export default function UserDetails(props) {
  return (
    <>
       <br/>
       <span className='span_data1' >{props.data.name}</span>    
       <span className='span_data2' >{props.data.lname}</span>      
       <span className='span_data3' >{props.data.address}</span>
       <span className='span_data4' >{props.data.email}</span>
       <span className='span_data5' >{props.data.contact}</span>    
       
    </>
  )
}


          
          
           