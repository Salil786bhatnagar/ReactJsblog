import React,{useEffect, useState} from 'react';
export default function AwaitData(){
    const [getData, setData]=useState([])
    const pro1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const Student = [{
          name:'Ram',
          lname:'Sharma',
          contact:'9876545670',
          city:'Gwalior',
          state:'Madhya Pradesh',
          zipcode:'474005',
      },
      {
        name:'rahul',
        lname:'gupta',
        contact:'9876556778',
        city:'Pune',
        state:'Maharastya',
        zipcode:'49002',
      }
    ]
      
    
      resolve(Student);
     // reject("error while commnucation...")
    },2000)
    
    })
  
    useEffect(()=>{
        const showData=async()=>{
          let rollnoData = await pro1;
          setData(rollnoData);
          console.log("showData",rollnoData)
        }
        showData()
      },[])
    

      const DataList=()=>{
        return(
          getData.map((item,i)=>{
            return(
              <>
              <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.lname}</td>
              <td>{item.contact}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.zipcode}</td>
            </tr>
              </>
            )
          })
        )
      }

  
      return (
        <div style={{textAlign:'content'}}>
         <h1>Promiss</h1><br/>
         <table>
           <tr>
             <th>Id</th>
             <th>Name</th>
             <th>Lname</th>
             <th>Contact</th>
             <th>City</th>
             <th>State</th>
             <th>Zip code</th>
           </tr>
           {DataList()}
         </table>
        </div>
      )
}