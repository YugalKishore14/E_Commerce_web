import React from 'react'
import footer_logo from "../Assest/logo_big.png"
import insta from "../Assest/instagram_icon.png"
import pintrest from "../Assest/pintester_icon.png"
import whatsapp from "../Assest/whatsapp_icon.png"
import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <h2>StyleSphere</h2>
            </div>
            <ul className='footer-link'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="social-icon">
                <div className="footer-icon-container">
                    <img src={insta} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintrest} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Rights Are Reserved</p>
            </div>
        </div>
    )
}

export default Footer