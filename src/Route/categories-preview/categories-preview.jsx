
import { Fragment } from "react"
import CategoryPreview from "../../Component/category-preview/category-preview"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/categories/category.selector"

const CategoriesPreview = ()=> {
  const categoriesMap = useSelector(selectCategoriesMap)

    return(
     <Fragment>
       {Object.keys(categoriesMap).map((title)=> {
         const product = categoriesMap[title]
         return  <CategoryPreview key={title} title={title} products={product} />
       })}

     </Fragment>
         
    )
}

export default CategoriesPreview