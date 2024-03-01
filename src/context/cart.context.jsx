import { createContext, useState } from "react";

const addCardItems = (cartItems,productToadd)=> {

}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=> {},
    cartItems : [],
    addItemToCart : () => {}
})

export const CartProvider = ({children})=>{
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItem,setCartItems] = useState([])

     const addItemToCard = (productToadd) => {
        setCartItems(addCardItems(cartItem,productToadd))
    } 
    const value = {isCartOpen,setIsCartOpen}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
