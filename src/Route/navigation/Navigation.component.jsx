import { Outlet,Link } from "react-router-dom";
import { Fragment } from "react";


const Navigation = ()=> {
    return (
      <Fragment>
        <div className="navigation">
        <Link className="logo-container" to='/'>
             <div>Logo</div>
        </Link>
        <div className="nav-links-container">
      <Link to='shop'>
        Shop
      </Link>
        </div>
        </div>
        <Outlet />
      </Fragment>
        
      
    )
  }

  export default Navigation
  