import React,{createContext} from 'react'
import Fetch_Axios_API from '../Fetch_Axios_API/Fetch_api'
const FirstName = createContext();
 function ContextApiDemo() {

  return (
    <div>
       ContextApiDemo
       <hr/>
       <FirstName.Provider value={"salil"}>
         <Fetch_Axios_API/>
        </FirstName.Provider>
     </div>
  )
}
export default ContextApiDemo;
export { FirstName };