import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import { addItemToCart,clearItemFromCart,removeItemToCart } from '../../store/cart/cart.action'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'

const CheckOutItem = ({cartItem})=> {
    const {name,price,imageUrl,quantity} = cartItem
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const handlerClearCart = () => dispatch(clearItemFromCart(cartItems,cartItem))
    const handlerRemoveCart = () => dispatch(removeItemToCart(cartItems,cartItem))
    const handlerAddCart = () => dispatch(addItemToCart(cartItems,cartItem))
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
            <div className='arrow' onClick={handlerRemoveCart}>&#10094;</div>
           <span className='value'>{quantity}</span>
            <div className='arrow' onClick={handlerAddCart}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={handlerClearCart} >&#10005;</div>
        </div>
    )
}

export default CheckOutItem