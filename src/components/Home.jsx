import React from 'react';
import NavBar from './NavBar';
import '../App.css';

function Home() {
  return (
    <div className='home-page'>
        <NavBar/>
        <h1>Welcome to the Marvel Comic Book Library!</h1>
    </div>
  )
}

export default Home