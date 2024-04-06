import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { useEffect } from "react";
import ProductCard from "../../Component/product-card/product-card.component";
import './category.styles.scss'

const Category = ()=> {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext)
    const [product,setProduct] = useState(categoriesMap[category])

    useEffect(()=> {
        setProduct(categoriesMap[category])

    }, [category,categoriesMap])
    
    return(
        <div className="directory-item-container">
            {product&&
                product.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </div>
    )
}

export default Category