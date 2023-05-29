import React,{createContext} from 'react'
import B from './B';
const FirstName = createContext();
function A() {
  return (
    <div>
        <center>
          <h3>use to useContext Api Call A</h3>
        </center>
        <br/>
        <hr/>
         <FirstName.Provider value='sali bhatnagar'>
            <B />
          </FirstName.Provider>
        
    </div>
  )
}

export default A;
export {FirstName}
