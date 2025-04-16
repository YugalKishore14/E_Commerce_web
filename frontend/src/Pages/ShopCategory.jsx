import React, { useContext } from 'react'
import  "./Css/shopcategory.css"
import { ShopContext } from '../Context/ShopContext'
import drop_down from "../Component/Assest/dropdown_icon.png"
import Item from '../Component/Item/Item'

function ShopCategory(props) {

  const {all_product} = useContext(ShopContext)
  return (
   <div className="shopcategory" >
      <img className="cate-banner" src={props.banner} alt="" />
      <div className="shopcategary-indexsort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>
        <div className="shopcategosy-sort">
          Sort by <img src={drop_down} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {
          all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} img={item.image} old_price={item.old_price}  new_price={item.new_price}/>
            }
            else{
              console.log("null")
            }
          })
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
   </div>
  )
}

export default ShopCategory