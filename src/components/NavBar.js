import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to='/' className='item'>
                Home
            </Link>
        </div>
    )
  }
  
  export default NavBar;