import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import { Outlet } from "react-router-dom"
import './checkout.styles.scss'
import CheckOutItem from "../../Component/checkout-item/checkout-item.component"

const CheckOut = ()=> {
    const {cartItem,addItemToCart, removeItemToCart} = useContext(CartContext)
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItem.map((cartitems)=> {
             return <CheckOutItem key={cartitems.id} cartItem={cartitems} />
            })}
            <span className="total">Total</span>
        </div>
    )
}

export default CheckOut