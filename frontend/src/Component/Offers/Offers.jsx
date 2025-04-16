import React from 'react'
import "./offer.css"
import exlusive_image from "../Assest/exclusive_image.png"

function Offers() {
  return (
  <div className="offers">
    <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLER PRODUCT</p>
        <button>Check Now</button>
    </div>
    <div className="offer-right">
        <img src={exlusive_image} alt="" />
    </div>
  </div>
  )
}

export default Offers