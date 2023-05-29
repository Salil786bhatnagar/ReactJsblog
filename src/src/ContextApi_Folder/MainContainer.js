import React,{createContext,useState} from 'react'
// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';
import Count from './Count';
import Display from './Display';
export const store = createContext();

export default function MainContainer() {
    
    const [data, setData]=useState([
        {
            brandname:"Samsun"
        },
        {
            brandname:"Nokia"
        },
        {
            brandname:"1+"
        },
        {
            brandname:"Radmy"
        }    
    ])
    const showDara = createContext();
  return (
    <div> 
      <h1>MainContainer</h1><br/>
        <store.Provider value={[data, setData]}>
            {/* <ComponentA/><br/>
            <ComponentB/> */}
            <Count/>
            <Display/>
        </store.Provider>  
          {/* <p >
          <button onClick={(e)=>setData(data+1)}>Incriment</button><br/><br/>
           <button onClick={(e)=>setData(data-1)}>kDicriment</button>
          </p> */}
     </div>
  )
}
