'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from './home.module.css'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { ProductContext } from "@/contexts/ProductContext"
import { ToastContainer } from 'react-toastify';
export const Home = () =>{

    const {productlist,setProducts,handleProductclick,setCartCount,cartCount,cartItems,setCartItems,cartAdd,cartRemove} = useContext(ProductContext);
    const router = useRouter();

    // const [products,setProducts] = useState([]);

    useEffect(() => {
        console.log("Home component mounted")
        const fethcData = async () => {
            const res = await fetch('/api/products/')
            const data = (await res.json()).resData
            console.log(data)
            setProducts(data)
        }
        fethcData()
        return () => {
            console.log("Home component unmounted")
        }
    }, [])




    return (
        <>
       

       <main className={styles.main}>

        <h2 className={String(styles.heading + ' ' + "underlineeffect")}>Welcome to the Ecommerce Store</h2>
        <article className={styles.products}>

          {
            productlist && productlist.map((value)=>{
                return (
                   <section  key={value.id} className={styles.productdesc}>
                    {/* <p className={styles.cartbutton}>{value.category}</p>  */}
                    
                    <div className={styles.rating}>
                     <div className={styles.stars}>
                     <i className='fa-solid fa-star'></i>
                     <p>{value.rating.rate} Count: {value.rating.count}</p>
                     </div>
                     <p>Category: {value.category}</p>
                    </div>

                    <Image onClick={()=>handleProductclick(value.id)} src={value.image} width={200} height={200}  alt="noimage"/>
                    <h2>{value.title}</h2>
                    <p>${value.price}</p>
                    {cartItems.includes(value.id) ? <button className={styles.cartbutton} onClick={()=>cartRemove(value.id)} >Remove from cart</button> : <button className={styles.cartbutton} onClick={()=>cartAdd(value.id)}>Add to cart</button>}
                </section>
                   
                )
            })
          }
          
          
          
          
          
          
          
          
          
          
            {/* <section className={styles.productdesc}>

            <Image src="/product.img" alt="No-Image" width={100} height={200}/>
            <h2>Product Name</h2>
            <p>Hello This is description of the products</p>
            </section>

            <section className={styles.productdesc}>

            <Image src="/product.img" alt="No-Image" width={100} height={200}/>
            <h2>Product Name</h2>
            <p>Hello This is description of the products</p>
            </section>
            
            <section className={styles.productdesc}>

            <Image src="/product.img" alt="No-Image" width={100} height={200}/>
            <h2>Product Name</h2>
            <p>Hello This is description of the products</p>
            </section>
            <section className={styles.productdesc}>

            <Image src="/product.img" alt="No-Image" width={100} height={200}/>
            <h2>Product Name</h2>
            <p>Hello This is description of the products</p>
            </section>

            <section className={styles.productdesc}>

            <Image src="/product.img" alt="No-Image" width={100} height={200}/>
            <h2>Product Name</h2>
            <p>Hello This is description of the products</p>
            </section>

            <section className={styles.productdesc}>

            <Image src="/product.img" alt="No-Image" width={100} height={200}/>
            <h2>Product Name</h2>
            <p>Hello This is description of the products</p>
            </section> */}

        </article>


        <ToastContainer/>


       </main>


        
        </>
    )
}