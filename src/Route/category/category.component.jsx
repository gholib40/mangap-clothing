import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { useEffect } from "react";
import ProductCard from "../../Component/product-card/product-card.component";
import './category.styles.scss'
import { Fragment } from "react";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";


const Category = ()=> {
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const [product,setProduct] = useState(categoriesMap[category])

    useEffect(()=> {
        setProduct(categoriesMap[category])

    }, [category,categoriesMap])
    
    return(
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            <div className="category-container">
            {product&&
            product.map((product) => <ProductCard key={product.id} product={product} />)
            }
            </div>
        </Fragment>
       
    )
}

export default Category