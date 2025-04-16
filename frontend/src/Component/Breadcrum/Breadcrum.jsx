import React from 'react'
import arrow_icon from "../Assest/breadcrum_arrow.png"
import "./breadcrum.css"

function Breadcrum(props) {

  const { product } = props
  return (
    <div className='bread'> HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category}  <img src={arrow_icon} alt="" />{product.name} </div>
  )
}

export default Breadcrum