import { Link, Outlet } from "react-router-dom";
import { Fragment,useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from "../../context/user.context";


const Navigation = ()=> {
  const {currentUser} = useContext(UserContext)
  console.log(currentUser)
    return (
      <Fragment>
        <div className="navigation">
        <Link className="logo-container" to='/'>
              <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
      <Link to='shop' className="nav-link">
        Shop
      </Link>
      <Link to='/auth' className="nav-link">
        SignIn
      </Link>
        </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation
  