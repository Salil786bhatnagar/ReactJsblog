import React,{useState,useImperativeHandle, forwardRef} from 'react';

const Chield = forwardRef((props, ref)=>{
    const[count, setCount]=useState(0);
    useImperativeHandle(ref,()=>({
        Increment
    }));
    function Increment(){
        setCount(count+1);
    }
    return(
        <div>
            <center>chield data</center>
            <br/>
            <div>
                <br/>
                  <p>
                     {count}
                  </p>
                <br/>
                <button onClick={()=>Increment()} >Increment+</button>
            </div>
        </div>
    )
})
export default Chield;