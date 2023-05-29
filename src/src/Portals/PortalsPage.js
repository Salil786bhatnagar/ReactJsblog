import React from 'react'
import ReactDOM from 'react-dom'
export default function PortalsPage() {
  return (ReactDOM.createPortal(
            <h3>This is Portals Page</h3>,
            document.getElementById('other-root')
        )   
  )
}
