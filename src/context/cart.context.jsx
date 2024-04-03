import { createContext, useEffect, useState } from "react";

const addCardItems = (cartItems,productToAdd)=> {
    const exitingCartItems = cartItems.find(
        (cartitem)=> cartitem.id === productToAdd.id
        )

        if(exitingCartItems){
            return cartItems.map((cartItem)=>{
                 return cartItem.id === productToAdd.id ? {...cartItem, 'quantity' : cartItem.quantity + 1}
                : cartItem
            }
            )
        }
        return [...cartItems, {...productToAdd, 'quantity' : 1}]
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=> {},
    cartItem : [],
    addItemToCart : () => {},
    cartCount : 0,
    removeItemToCart : ()=> {},
    clearItemFromCart : ()=> {},
    cartTotal : 0
})


const removeCartItem = (cartItem,addToRemove)=> {
    const exitingCartItems = cartItem.find((cartitems)=> {
        return cartitems.id === addToRemove.id
    })

    if(exitingCartItems.quantity === 1){
            return cartItem.filter((cartItems)=> {
                return cartItems.id !== addToRemove.id
        })
    }
    return cartItem.map((cartItem)=>{
        return cartItem.id === addToRemove.id ? {...cartItem, 'quantity' : cartItem.quantity - 1}
       : cartItem
        }
        )
}

const clearCartItem = (cartItem,clearItem) => {
    return cartItem.filter((cartItems)=> {
        return cartItems.id !== clearItem.id
    })
}


export const CartProvider = ({children})=>{
    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItem,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

     const addItemToCart = (productToadd) => {
        setCartItems(addCardItems(cartItem,productToadd))
    }
    const removeItemToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItem,productToRemove))
    }
    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItem,productToClear))
    }

    useEffect(()=> {
    const countCart = cartItem.reduce((total,cartitems) => {
         return total + cartitems.quantity
        },0)
     setCartCount(countCart)
    },
    [cartItem])

     useEffect(()=> {
    const totalCart = cartItem.reduce((total,cartitems) => {
         return total + cartitems.quantity * cartitems.price
        },0)
     setCartTotal(totalCart)
    },
    [cartItem])

    const value = {isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItem,
        cartCount,
        removeItemToCart,
        clearItemFromCart,
        cartTotal}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
