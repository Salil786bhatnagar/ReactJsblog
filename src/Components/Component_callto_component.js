import React from 'react'

 function Component_callto_component() {

    function Componentsecond(){
        return(
            <div>
               Call to  Component 2
            </div>
        )
    }
  return (
    <div>
     Call to Component 1
       <span>
       {/* {Componentsecond()} */}
       <Componentsecond/>
       </span>
    </div>
   
  )
}
export default Component_callto_component;
