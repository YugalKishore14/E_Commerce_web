import React from 'react'
import "./popular.css"
import data_product from "../Assest/data"
import Item from '../Item/Item'

function Popular() {
  return (
    <div className='popular'>
        <h2>POPULAR IN WOMEN</h2>
        <hr />
        <div className="popular-item">
            {
                data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price}  new_price={item.new_price} />
                })
            }
        </div>
    </div>
  )
}

export default Popular