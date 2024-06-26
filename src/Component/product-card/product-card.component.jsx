
import './product-card.styles.scss'
import Button from "../button/button.component";
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { UseSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product})=> {
    const {name,imageUrl,price} = product
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const addItem = ()=> dispatch(addItemToCart(cartItems,product))
    return (
    <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType='inverted' onClick = {addItem}>Add To Cart</Button>

        </div>
    )
}

export default ProductCard