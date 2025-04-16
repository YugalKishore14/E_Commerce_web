import React from 'react'
import './Navbar.css'
import Navlogo from '../../assets/nav-logo.svg'
import Navprofile from '../../assets/nav-profile.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Navlogo} alt="" className='nav-logo' />
            <img src={Navprofile} alt="" className='nav-profile' />
        </div>
    )
}

export default Navbar
