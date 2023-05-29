import { useRef } from 'react';
import Chield from './Chield';
export default function Parent(){
    const ref = useRef()
    return(
        <div>
            <center>parent data</center>
            <br/>
            <hr/>
            <div>
                <Chield ref={ref} />  
                <br/>
                <button onClick={()=>ref.current.Increment()} >Parent Click</button>
            </div>
        </div>
    )
}