import { Fragment, useContext } from "react"
import { CategoriesContext } from "../../context/categories.context"
import CategoryPreview from "../../Component/category-preview/category-preview"
import './shop.styles.scss'
import { Outlet } from "react-router-dom"

const Shop = ()=> {
    const {categoriesMap} = useContext(CategoriesContext)
    return(
     <div className="shop-container">
       {Object.keys(categoriesMap).map((title)=> {
         const product = categoriesMap[title]
         return  <CategoryPreview key={title} title={title} products={product} />
       })}

     </div>
         
    )
}

export default Shop