'use client'
import { createContext,useState } from "react"
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
const ProductContext = createContext()



const ProductProvider = ({children}) => {

    const [productlist,setProducts] = useState([])
    const [searchResults, setSearchResults] = useState([]);
    const [cartCount,setCartCount] = useState(0);
    const [cartItems,setCartItems] = useState([])

    const router = useRouter();

    
const handleProductclick = (id) => {
    router.push(`/product/${id}`)
    
}

const getProductList = async () => {
    const res = await fetch('/api/products/')
    const data = (await res.json()).filteredProducts

    setProducts(data)
}


const cartAdd = (id) => {

    setCartItems([...cartItems,id])
    setCartCount(cartCount + 1)
    toast.success("Product added to cart successfully")
}

const cartRemove = (id) => {
setCartItems(cartItems.filter((value)=> value !== id))
setCartCount(cartCount - 1)
toast.success("Product removed from cart successfully")
}


const value = {
    productlist,
    setProducts,
    handleProductclick,
    searchResults,
    setSearchResults,
    setCartCount,
    cartCount,
    cartItems,
    setCartItems,
    cartAdd,
    cartRemove,
    getProductList

}


    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContext,ProductProvider}