import React, { useState, useEffect } from 'react'
import "./newcollection.css"
import Item from '../Item/Item'
import new_collection from '../Assest/new_collections'

function NewCollection() {

  /////////////////////////////////////////////////////
  const [new_collections, setNew_collection] = useState([]);
  useEffect(() => {
    fetch("https://e-commerce-backend-sme3.onrender.com/newcollection")
      .then((res) => res.json())
      .then((data) => setNew_collection(data));
  }, []);
  /////////////////////////////////////////////////////

  return (
    <div className='newCollection'>
      <h2>NEW COLLECTION</h2>
      <hr />
      <div className="collection">
        {
          new_collection.map((item, i) => {
            return <Item className='item' key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price} new_price={item.new_price} />
          })
        }
        {
          new_collections.map((item, i) => {
            return <Item className='item' key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price} new_price={item.new_price} />
          })
        }
      </div>
    </div>
  )
}

export default NewCollection