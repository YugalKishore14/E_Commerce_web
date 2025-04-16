import React, { useContext } from 'react'
import "./cartitems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../Assest/cart_cross_icon.png"
function CartItems() {
    const {getTotalPrice,all_product,cartItems,removeFromCart} =useContext(ShopContext)
  return (
    <div className="cart-item">
        <div className="format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
      {
        all_product.map(e=>{
            if(cartItems[e.id]>0){
                return   <div>
                <div className="format format-main">
                    <img src={e.image} alt=""  className='product-icon'/>
                    <p>{e.name}</p>
                    <p style={{marginLeft:"10px"}}>$ {e.new_price}</p>
                    <button style={{marginLeft:"10px"}} className='quantity'>{cartItems[e.id]}</button>
                    <p style={{marginLeft:"10px"}}>$ {e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} className='remove-icon'   onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
                </div>
            }
            else{
              return null;
            }
        })
      }
      <div className="cart-down">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-item">
              <p>Subtotal</p>
              <p>${getTotalPrice()}</p>
            </div>
            <hr />
            <div className="cart-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-total-item">
              <h3>Total</h3>
              <h3>${getTotalPrice()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          
        </div>
        <div className="promo">
          <p>if you have a promo code, Enter it here</p>
          <div className="promobox">
            <input type="text" placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default CartItems