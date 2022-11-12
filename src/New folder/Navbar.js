import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to="/"> Home</Link><br />
            <Link to="/about">ABOUT</Link><br />
            <Link to="/contact"> CONTACT</Link>
        </ul>
      
    </div>
  )
}

export default Navbar
