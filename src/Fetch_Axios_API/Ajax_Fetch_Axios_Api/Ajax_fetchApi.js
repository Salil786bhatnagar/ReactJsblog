import React,{useState, useEffect} from 'react';

function Ajax_Fetch_Axios(){
    const[error, setError]=useState(null);
    const[loading, setLoading]=useState(false);
    const[getData, setData]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((result)=>{
           setTimeout(()=>{
            setLoading(true);
           },4000);
           setData(result)
        },
         (error)=>{
            setLoading(true);
            setError(error)
         }

        )
    },[])

    if(error){
        return <div style={{color:'red',padding:'1%'}}>Error:{error.message}</div>
    } else if(!loading){
        return <div><img src='../loading.gif' /> </div>
    }else{
    return(
        <div>
           <tr>
             <th>Id</th>
             <th>Name</th>
             <th>Email</th>
             <th>City</th>
           </tr>
             {
                getData.map((item,i)=>{
                    return(
                        <>
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.zipcode}</td>
                         </tr>

                        </>
                    )
                })
             }
        </div>
    )
  }
}

export default Ajax_Fetch_Axios;