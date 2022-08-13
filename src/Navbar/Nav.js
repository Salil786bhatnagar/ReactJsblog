import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div>
        <ul>
            <Link to="/Count">
                <li>Count</li>
            </Link>
            <Link to="/Sum">
                <li>Count</li>
            </Link>
        </ul>
    </div>
  )
}
