import { createContext, useState } from 'react'
import { useEffect } from 'react'
import { addCollectionAndDocument } from '../utils/firebase/firebase.utils'
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'


export const CategoriesContext = createContext({
    categoriesMap : {}
})

export const CategoriesContextProvider = ({children})=> {
    useEffect(()=> {
        const getDataFromDB = async ()=> {
            const request = await getCategoriesAndDocuments()
            setCategoriesMap(request)
        }
        getDataFromDB()
    },[])
    const [categoriesMap,setCategoriesMap] = useState({})
    const value = {categoriesMap,setCategoriesMap}
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}