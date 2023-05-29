import React,{useState,useEffect} from 'react'
export default function UseEffectData() {
    const[content, setContent] = useState('posts');
    const[count, setCount] = useState(0);
    const[getData, setData] = useState([])
    useEffect(()=>{
        console.log('componentDidMount')
    },[])
    useEffect(()=>{
      
        fetch('https://jsonplaceholder.typicode.com/'+content)
        .then(response => response.json())
        .then(json => setData(json))

        console.log('componentDidUpdate')
        return ()=>{
            console.log('Unmount')
        }
    },[content])
  return (
    <div>
        <center> UseEffect Data </center>  
        <br/>
        <hr/>
        <div>
             <button onClick={()=>setCount(count+1)}>Count {count}</button> &nbsp;
             <button onClick={()=>setContent('posts')}>Posts</button> &nbsp;
             <button onClick={()=>setContent('users')}>Users</button> &nbsp;
             <button onClick={()=>setContent('comments')}>Comments</button> &nbsp;
        </div>
        <br/>
        <div>
             <cetner>
                 <h3>{content}</h3>
                 {
                    getData.map((item, i)=>{
                        return(
                            <>
                                {/* <pre>
                                    {JSON.stringify(item)}
                                </pre> */}

                                <li key={item.id}>
                                   {item.id}
                                </li> 
                            </>
                        )
                    })
                 }
             </cetner>
        </div>
    </div>
  )
}
