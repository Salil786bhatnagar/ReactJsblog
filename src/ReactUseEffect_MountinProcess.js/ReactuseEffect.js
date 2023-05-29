import React,{useState, useEffect} from 'react';

export default function ReactuseEffect(){
    const[content, setContent]=useState("posts")
    const[dataList, setDataList] = useState([])
    const[count , setCount] = useState(0)
    useEffect(()=>{
        console.log("componentDidMount...") 
    },[])

    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/'+content)
        .then(response => response.json())
        .then(json => setDataList(json))

        console.log("componentDidUpdate...") 
        return()=>{
            console.log("Unmount...")
        }
    },[content])
    return(
        <div>
         <h3>Reactjs use useEffect Mounting Process</h3>
            <button onClick={()=>setCount(count+1)}>Count &nbsp;{count}</button>&nbsp;
            <button onClick={()=>setContent("posts")}>Posts</button>&nbsp;
            <button onClick={()=>setContent("users")}>Users</button>&nbsp;
            <button onClick={()=>setContent("comments")}>Comments</button>&nbsp; 
            <br/>
            <hr/>
            <h3>{content}</h3>
            <hr/>
            <br/>
            
            <cetner>
                 <h3>{content}</h3>
                 {
                    dataList.map((item, i)=>{
                        return(
                            <>
                                <pre>
                                    {JSON.stringify(item)}
                                </pre>
                             


                                {/* <tr key={item.id}>
                                  <th>Id</th>
                                  <th>Title</th>
                                  <th>body</th>
                                </tr>  */}
                            </>
                        )
                    })
                 }
             </cetner>

        </div>
    )
}