import { CART_ACTION_TYPES } from "./cart.type";
import { createAction } from "../../utils/reducer/reducers.utils";

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

export const setIsCartOpen = (boolean) => 
 createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
 
  export const addItemToCart = (cartItems,productToadd) => {
       const newCartItems = addCardItems(cartItems,productToadd)
       return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
    }
   export const removeItemToCart = (cartItems,cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems,cartItemToRemove)
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)
    }
   export const clearItemFromCart = (cartItems,cartItemToClear) => {
       const newCartItems =  clearCartItem(cartItems,cartItemToClear)
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
    }
