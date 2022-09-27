import React from 'react'

 function Add (a, b) {
  let add = a + b;
  return(
      <>
          {add}
      </>
  )
}

function Sub (a, b) {
    let sub = a - b;
    return(
        <>
            {sub}
        </>
    )
  }

  function Mul (a, b) {
    let mul = a * b;
    return(
        <>
            {mul}
        </>
    )
  }

  function Div (a, b) {
    let div = a / b;
    return(
        <>
            {div}
        </>
    )
  }

  export {Add, Sub, Mul, Div};