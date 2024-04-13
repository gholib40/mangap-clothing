import { createContext, useReducer} from "react";
import { createAction } from "../utils/reducer/reducers.utils";

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

const CART_ACTION_TYPES = {
    SET_CART_ITEMS : 'SET_CART_ITEMS',
    SET_IS_CART_OPEN : 'SET_IS_CART_OPEN'
}

const INITIAL_STATE = {
    cartTotal : 0,
    cartCount : 0,
    cartItem : [],
    isCartOpen : false,
}

const cartReducers = (state,action) => {
    const {type,payload} = action

    switch(type){
        case  CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case  CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen : payload
            }
        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }

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


export const CartProvider = ({children})=>{
    const [{cartItem,isCartOpen,cartCount,cartTotal},dispatch] = useReducer(cartReducers,INITIAL_STATE)

    const updateCartItemsReducers = (newCartItems) => {
    const countCart = newCartItems.reduce((total,cartitems) => {
        return total + cartitems.quantity
        },0)

    const totalCart = newCartItems.reduce((total,cartitems) => {
        return total + cartitems.quantity * cartitems.price
        },0)

        dispatch(
            createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
                cartItem: newCartItems, cartTotal : totalCart, cartCount: countCart
            }))
        }



     const addItemToCart = (productToadd) => {
       const newCartItems = addCardItems(cartItem,productToadd)
       updateCartItemsReducers(newCartItems)
    }
    const removeItemToCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItem,productToRemove)
        updateCartItemsReducers(newCartItems)
    }
    const clearItemFromCart = (productToClear) => {
       const newCartItems =  clearCartItem(cartItem,productToClear)
       updateCartItemsReducers(newCartItems)
    }

    const setIsCartOpen = (bool)=> {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
    }


   

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItem,
        cartCount,
        removeItemToCart,
        clearItemFromCart,
        cartTotal
    }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
