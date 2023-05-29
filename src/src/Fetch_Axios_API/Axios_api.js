import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner';
export default function App() {
  const [getData, setData] = useState([]);
  const [loading, setLoading]=useState(false);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
    //   result.json().then((resp) => {
    //     //    console.warn("result",resp);
    //     setData(resp);
    //   });
    // });

    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            setData(response.data)
          })

              const timer = setTimeout(() => {
                setLoading(true)
            }, 2000);
            return () => clearTimeout(timer);
    }
  
    fetchData();

  }, []);

  return (
    <div className="App">
     {/* {<ReactBootstrap.Spinner animation="border" />} */}
    {loading ? 
      <table border="1">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {getData.map((item,i) => {
          return (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          );
        })}
      </table>
      :
      <span class="loader"></span>
    }
     
    </div>
  );
}
