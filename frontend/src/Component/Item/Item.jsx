import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className="item">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.img} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-price">
            <div className="item-old-price">
                $ {props.old_price}
            </div>
            <div className="item-new-price">
                $ {props.new_price}
            </div>
        </div>
    </div>
  )
}

export default Item