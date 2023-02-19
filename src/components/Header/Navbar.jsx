import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <img src='https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png' alt='loading' width="100px" height="60px"></img>
        </div>
        <div className='middle '>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Project</h2>
            <h2>Services</h2>
            <h2>Blog</h2>
            <h2>Contact</h2>
        </div>
        <div className='right'>
            <button className='enquire-btn'>Enquire now</button>
        </div>
    </div>
  )
}

export default Navbar