import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to="/"> Home</Link><br />
            <Link to="/about">ABOUT</Link><br />
            <Link to="/contact"> CONTACT</Link><br />
            <Link to="/memo">Memo</Link><br />
            <Link to="/context"> context</Link><br />
            <Link to="/context2"> Context2</Link>
        </ul>
      
    </div>
  )
}

export default Navbar
