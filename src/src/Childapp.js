import React,{useState, createContext} from 'react'
import Child from './Child'
export const DataInformation = createContext();
export default function Childapp() {
    const[getData, setData]=useState()
 
    const userInfo={
        name:'ram',
        lname:'sharma',
        contact:'9087896543',
        email:'ram123@gmail.com',
        address:'indore'
    }
  return (
    <DataInformation.Provider value={{...userInfo}}>
        <div>
           <h2>ChildApp Component </h2>
           <br/><hr/>
           <Child/>
        </div>
    </DataInformation.Provider>
  )
}
