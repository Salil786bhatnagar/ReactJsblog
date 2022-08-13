import axios from 'axios';
import React, { useEffect, useState } from 'react'
export default function Dynamicfetchdata() {
 
  const [num, setNum]=useState();
  const [name, setName]=useState();
  const [moves, setMoves]=useState();

  useEffect(()=>{
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data)
      setName(res.data.name);
      setMoves(res.data.moves.length)
    } 
    getData();
  },[]);

  return (
    <div style={{textAlign:'center',padding:'25px'}}>
    
        <h3>You choose<span style={{color:'skyblue'}}>&nbsp;{num}</span>&nbsp;val</h3>
        <h2>My name is<spna style={{color:'red'}}>&nbsp;{name}</spna></h2>
        <h4>I have<spna style={{color:'blue'}}>{moves}</spna> moves</h4>

    <hr/>
    
       <select value={num}
        onChange={(e)=>{setNum(e.target.value)}} 
       >
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="5">5</option>
         <option value="8">8</option>
         <option valule="25">25</option>
         <option value="15">15</option>
         <option value="20">20</option>
       </select>
    </div>
  )
}
