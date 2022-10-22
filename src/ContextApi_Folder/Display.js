import React,{useContext, useState} from 'react'
import '../ContextApi_Folder/style.css'
import { store } from '../ContextApi_Folder/MainContainer';

const Display = () => {
    const [data, setData] = useContext(store);
    const [brand_name, setBrand_Name] = useState('');

    const handleClick=()=>{
       setData([...data,{brandname:brand_name}])
    }
  return (
    <div>
        <h4>Component Display</h4>
        <div className='div-display'>
            <span>{data.map((item)=>{
                return(
                    <div>
                        {item.brandname}
                    </div>
                )
            })}
            </span><br/><hr/>
            
               <input type="text" name="brandname" placeholder='enter your brand...'
                onChange={(e)=>setBrand_Name(e.target.value)} />
               <input onClick={()=>handleClick()} type="submit" />
           
        </div>
    </div>
  )
}

export default Display