import Button from "../button/button.component"
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"

const CartDropDown = ()=> {
    const cartItem = useSelector(selectCartItems)
    const navigate = useNavigate()
    const navigateHandle = ()=> {
        return navigate('checkout')
    }
    return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
        {cartItem.map((cartItems)=> {
            return <CartItem key={cartItems.id} cartItem={cartItems} />
            })}
        </div>
        
        <Button onClick = {navigateHandle} buttonType='inverted'>GO TO CHECKOUT</Button>
    </div>
    )
}

export default CartDropDown