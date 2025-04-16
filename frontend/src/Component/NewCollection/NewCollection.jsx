import React from 'react'
import "./newcollection.css"
import Item from '../Item/Item'
import new_collections from '../Assest/new_collections'

function NewCollection() {
  return (
    <div className='newCollection'>
    <h2>NEW COLLECTION</h2>
    <hr />
    <div className="collection">
        {
            new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price}  new_price={item.new_price} />
            })
        }
    </div>
</div>
  )
}

export default NewCollection