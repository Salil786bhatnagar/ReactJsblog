import React,{useReducer} from 'react';
let initialState = 0;
let reduce = (state, action)=>{

    switch (action) {
        case 'Add':
            return state+1;
            
        case 'Minus':
            return state-1;
        
        case 'start':
          return initialState;    
    
        default:
            break;
    }

};

export default function useReducerPage() {
    const [count, dispatch] = useReducer(reduce, initialState)
  return (
    <div>
    <h2>useReducerPage</h2>  
    <hr/>
    <h4>{count}</h4>
    <br/>
    <button onClick={()=>dispatch('Add')}>Add</button><br/><br/>
    <button onClick={()=>dispatch('Minus')}>Minus</button><br/><br/>
    <button onClick={()=>dispatch('start')}>Reset</button>
    </div>
  )
}
