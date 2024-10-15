import React from 'react'
import logoimg from '../Images/chili.png'

const NavBar = () => {
  return (
    <>
        <div className="nav-container">
            <div className="logo">
              <h1>Hot Chillies</h1>
              <img src={logoimg} alt="Logo Image" />
            </div>
            <div className="search-container">
                <input type="text" placeholder='Search Items' />
            </div>
            <ul className='navlist'>
                <li className='nav-item'><a href="#">Home</a></li>
                <li className='nav-item'><a href="#">Accounts</a></li>
                <li className='nav-item'><a href="#">Orders</a></li>
                <li className='nav-item'><a href="#">Cart</a></li>
            </ul>
        </div>
    </>
  )
}

export default NavBar
