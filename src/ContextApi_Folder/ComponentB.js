import React,{useContext} from 'react';
import {store} from '../ContextApi_Folder/MainContainer'

export default function ComponentB() {
    const [data, setData] = useContext(store);
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
           ComponentB{data}
        </div>
     </div>
      
      <hr/><br/>
    </div>
  )
}
