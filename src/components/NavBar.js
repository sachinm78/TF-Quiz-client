import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className = "navigationWrapper">
            <div className = "linksWrapper">
                <Link to = '/' className = 'navLink' activeClassName = 'activeLink'>Home</Link>
                <Link to = '/categroies' className = 'navLink' activeClassName = 'activeLink'>Categories</Link>
            </div>
        </div>
    )
  }
  
  export default NavBar;