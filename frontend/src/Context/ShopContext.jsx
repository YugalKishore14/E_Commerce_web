import React, { createContext, useState } from "react";
import all_product from "../Component/Assest/all_product";

export const ShopContext = createContext(null);

const getDefaultcart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultcart());

    const addTocart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            // console.log( updatedCart); // Updated cart yahan dikhega
            return updatedCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
      // Updated cart yahan dikhega
            return updatedCart;
        });
    };

    const getTotalPrice = ()=>{
     let  totalPrice = 0;
     for(let item in cartItems)
     {
        if(cartItems[item]>0)
        {
            let itemInfo = all_product.find(product=>product.id===Number(item))
             totalPrice += itemInfo.new_price * cartItems[item]
          
        }
     }
     return totalPrice;
     
    }
    const getTotalItem=()=>{
        let totalItem = 0;
        for (const item in cartItems)
        {
          if(cartItems[item]>0)
          {
            totalItem += cartItems[item]
          }
        }
        return totalItem

    }

    const contextValue = {getTotalItem,getTotalPrice,all_product,cartItems, addTocart, removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
