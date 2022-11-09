import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
        <nav className='a4'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar