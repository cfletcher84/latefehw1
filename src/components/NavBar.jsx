import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; 

function NavBar() {
    const navigate = useNavigate();
  return (
    <nav className="nav-bar">
        <h3 onClick={()=> navigate('/')}> Marvel </h3>
        <Link to='/'> Home </Link>
        <Link to='/browse-characters'> Browse Characters </Link>
        <Link to='/comics'> Comics </Link>
    </nav>
  )
}

export default NavBar