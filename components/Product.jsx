'use client'
import { useEffect } from "react"
import { ProductContext } from "@/contexts/ProductContext"
import { useContext,useState } from "react"
import Image from "next/image"
import styles from './product.module.css'
import { ToastContainer } from "react-toastify"
import getdata from "./getdatas"
import Loading from "@app/loading"
export const Product = ({pid}) => {
    const {productlist,setCartCount,cartCount,cartItems,setCartItems,cartAdd,cartRemove} = useContext(ProductContext);
    const [selectedProduct,setSelectedProduct] = useState(null);
    
    useEffect(() => {
        console.log("This is product component mounted")
        setSelectedProduct(productlist.find(product => product.id == pid))
        const fethcData = async () => {
            const res = await fetch(`/api/products/${pid}`)
            const data = await res.json()
            console.log("this is data",data)
            setSelectedProduct(data.product)
        }

        if(productlist.length == 0){
            console.log("Empy so called")
            fethcData()
        }

        return () => {
            console.log("This is product component unmounted")
        }
    }, [])

    if(!selectedProduct){
     
        return <Loading/> 
    }


    return (

        <>
        <main className={styles.main}>

        {cartItems.includes(pid) ? <button className={styles.cartbutton} onClick={()=>cartRemove(pid)} >Remove from cart</button> : <button className={styles.cartbutton} onClick={()=>cartAdd(pid)}>Add to cart</button>}
        <h2>The product details of {selectedProduct.title}:</h2>

        <div className={styles.image}>
        <Image src={selectedProduct.image} width={300} height={300} alt="No Image"/>
        
        <p>{selectedProduct.description}</p> 
       
        </div>
        <h2>Name: {selectedProduct.title}</h2>
        <div className={styles.rating}>
                     <div className={styles.stars}>
                     <i className='fa-solid fa-star'></i>
                     <p>{selectedProduct.rating.rate} Count: {selectedProduct.rating.count}</p>
                     </div>   
                     <p>Category: {selectedProduct.category}</p>
 

        </div>  
        <ToastContainer/>

        </main>

        </>
    )
}