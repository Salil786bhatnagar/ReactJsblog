const initialValue={counter:0,cart:{}}
export default function RootReducer(state=initialValue, action){
  switch (action.type) {
    case "Increment":
      return {counter:state.counter+1}  
        break;

        case "Decrement":
            return {counter:state.counter-1}  
              break;   

              case "Add_Cart": 
               state.cart[action.payload[0]]=action.payload[1]
               console.log("cart data",state.cart)
                return {cart:state.cart}  
                break;     
      
  
            default:
              return state;
          }

}