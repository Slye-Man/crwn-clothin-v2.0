import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
    products: []
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    // setting the values once. Needs to be deleted once values are set
    // In my case I'm commenting the useEffect because I would like to
    // change the values later on
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, [])
    const value = {products}
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}