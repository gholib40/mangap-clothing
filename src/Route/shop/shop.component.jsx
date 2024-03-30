import { useContext } from "react"
import { ProductContext } from "../../context/product.context"
import ProductCard from "../../Component/product-card/product-card.component"
import './shop.styles.scss'
import { Outlet } from "react-router-dom"

const Shop = ()=> {
    const {product} = useContext(ProductContext)
    return(
        <div className="products-container">
        
           {product.map((product)=> {
            return <ProductCard key={product.id} product={product} />
           })}
           <Outlet />
        </div>
    )
}

export default Shop