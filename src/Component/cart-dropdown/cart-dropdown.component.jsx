import Button from "../button/button.component"
import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component"

const CartDropDown = ()=> {
    return (
    <div className="cart-dropdown-container">
        <div className="card-items" />
        <Button buttonType='inverted'>GO TO CHECKOUT</Button>
    </div>
    )
}

export default CartDropDown