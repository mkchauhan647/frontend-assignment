'use client'
import { useEffect } from "react"
import { ProductContext } from "@/contexts/ProductContext"
import { useContext } from "react"
import Image from "next/image"
import styles from './product.module.css'
import { useRouter } from "next/navigation"
export const Product = ({pid}) => {
    const router = useRouter();
    const {productlist} = useContext(ProductContext);

    // useEffect(() => {
    //     console.log("This is product component mounted")
    //     const fethcData = async () => {
    //         const res = await fetch(`/api/products/${pid}`)
    //         const data = await res.json()
    //         console.log(data)
    //     }
    //     fethcData()
    //     return () => {
    //         console.log("This is product component unmounted")
    //     }
    // }, [])

    const selectedProduct = productlist.find(product => product.id == pid)

    if(!selectedProduct){
       router.push('/')
       return 
    }


    return (

        <>
        <main className={styles.main}>

        <h2>The product details of {selectedProduct.title}:</h2>

        <div className={styles.image}>
        <Image src={selectedProduct.image} width={300} height={300} alt="No Image"/>
        <p>{selectedProduct.description}</p>        
        </div>  
        <h2>Name: {selectedProduct.title}</h2>
        
        </main>

        </>
    )
}