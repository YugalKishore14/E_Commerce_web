import React from 'react'
import "./newsletter.css"

function Newsletter() {
  return (
   <div className="newsletter">
    <h1>Get Exclusive Offers On Your Email</h1>
    <p>Subscribe To Our Newsletter And Stay Update</p>
    <div>
        <input type="text" placeholder='Your Email Id' />
        <button>Subscribe</button>
    </div>
   </div>
  )
}

export default Newsletter