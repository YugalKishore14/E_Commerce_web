import React, { useContext } from 'react'
import "./productdisplay.css"
import star_icon from "../Assest/star_icon.png"
import star_dull_icon from "../Assest/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

function ProductDisplay(props) {

  const {product} = props
  const {addTocart}= useContext(ShopContext)
  return (
    <div className="productdisplay">
        <div className="display-left">
            <div className="img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="dis-img">
                <img className='main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="prices">
            <div className="old-price">
                $ {product.old_price}
            </div>
            <div className="new-price">
                $ {product.new_price}
            </div>
            </div>
            <div className="description">
            Classic and comfortable, this premium shirt combines timeless style with a modern fit. Crafted from breathable, high-quality fabric, it’s perfect for casual outings or smart occasions.
            </div>
            <div className="size">
                <h1>Select Size</h1>
                <div className="sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                
            </div>
            <button onClick={()=>{addTocart(product.id)}}>Add to cart</button>
            <p className='right-category'><span>Category:</span> Women, T-Shirts, Crop Top</p>
            <p className='right-category'><span>Tags:</span> Morden, Latest, Trending</p>
        </div>
    </div>
  )
}

export default ProductDisplay