import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'

const CheckOutItem = ({cartItem})=> {
    const {name,price,imageUrl,quantity} = cartItem
    const {clearItemFromCart,addItemToCart, removeItemToCart} = useContext(CartContext)
    const handlerClearCart = () => clearItemFromCart(cartItem)
    const handlerRemoveCart = () => removeItemToCart(cartItem)
    const handlerAddCart = () => addItemToCart(cartItem)
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