import { createContext, useState } from 'react'
import { useEffect } from 'react'
import { addCollectionAndDocument } from '../utils/firebase/firebase.utils'


export const ProductContext = createContext({
    product : []
})

export const ProductProvider = ({children})=> {
    const [product,setProduct] = useState([])
    const value = {product,setProduct}
    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}