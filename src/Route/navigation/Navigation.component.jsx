import { Link, Outlet } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../context/cart.context";
import CartIcon from "../../Component/cart-icon/cart-icon.component";
import CartDropDown from "../../Component/cart-dropdown/cart-dropdown.component";
import { UseSelector, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartOpen } from "../../store/cart/cart.selector";


const Navigation = ()=> {
  // const {currentUser} = useContext(UserContext)
  // const {isCartOpen} = useContext(CartContext)
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectCartOpen)
    return (
      <Fragment>
        <div className="navigation">
        <Link className="logo-container" to='/'>
             <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
      <Link to='shop' className="nav-link">
        SHOP
      </Link>

      {currentUser ? (
        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
      ) : (
        <Link to='/auth' className="nav-link">
        SIGN IN
        </Link>
      )}
      <CartIcon />
        </div>
    { isCartOpen && <CartDropDown />}
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation
  