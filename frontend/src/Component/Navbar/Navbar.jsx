import React, { useContext, useState, useRef } from 'react';
import "./navbar.css";
import logo from "../Assest/logo.png";
import cartIcon from "../Assest/cart_icon.png";
import drop_down from "../Assest/drop_down.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {
    const [menuLine, setMenuLine] = useState("shop");
    const { getTotalItem } = useContext(ShopContext);
    const menuRef = useRef();
    const dropDownRef = useRef();

    const drop = () => {
        menuRef.current.classList.toggle('nav-menu-visible');
        dropDownRef.current.classList.toggle("open");
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <a href="/" className="nav-logo">StyleSphere</a>
            </div>
            <img className='nav-drop-down' ref={dropDownRef} onClick={drop} src={drop_down} alt="dropdown" />
            <ul className="nav-menu" ref={menuRef}>
                <li onClick={() => { setMenuLine('shop'); menuRef.current.classList.remove('nav-menu-visible'); }}>
                    <Link to='/'>Shop</Link>
                    {menuLine === "shop" && <hr />}
                </li>
                <li onClick={() => { setMenuLine('men'); menuRef.current.classList.remove('nav-menu-visible'); }}>
                    <Link to='/men'>Men</Link>
                    {menuLine === "men" && <hr />}
                </li>
                <li onClick={() => { setMenuLine('women'); menuRef.current.classList.remove('nav-menu-visible'); }}>
                    <Link to='/women'>Women</Link>
                    {menuLine === "women" && <hr />}
                </li>
                <li onClick={() => { setMenuLine('kids'); menuRef.current.classList.remove('nav-menu-visible'); }}>
                    <Link to='/kids'>Kids</Link>
                    {menuLine === "kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                    ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/login') }}>Logout</button>
                    : <Link to='/login'><button>Login</button></Link>}

                <Link to='/cart'><img className='nav-cart-icon' src={cartIcon} alt="cart" /></Link>
                <div className="nav-cart-count">{getTotalItem()}</div>
            </div>
        </div>
    );
}

export default Navbar;
