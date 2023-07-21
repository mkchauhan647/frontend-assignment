'use client'
import { createContext,useState } from "react"

const ProductContext = createContext()


const ProductProvider = ({children}) => {

    const [productlist,setProducts] = useState([])

    return (
        <ProductContext.Provider value={{productlist,setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext,ProductProvider}