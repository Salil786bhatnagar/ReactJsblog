import React,{useState, useMemo} from 'react'

export default function Use_memo() {
    const [Count, setCount]= useState(0);
    const [Item, setItem]=useState(10);

    const MultipleCountvalue=useMemo(function countHandle()
    {
      console.warn("countHandle")
      return Count*5;
  }, [Count])

  return (
    <div style={{textAlign:'center'}} >
      Use_memo
      <br/>
     Count:<h3>{Count}</h3>
     <br/>
        Item:<h3>{Item}</h3>
     <br/>
       CountValue: <h2>{MultipleCountvalue}</h2>

      <button onClick={()=>setCount(Count+1)} >Click Count</button>
      <br/><br/>
      <button onClick={()=>setItem(Item * 10)} >Click Item</button>
    </div>
  )
}
