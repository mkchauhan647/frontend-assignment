'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from './home.module.css'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { ProductContext } from "@/contexts/ProductContext"
export const Home = () =>{

    const {productlist,setProducts} = useContext(ProductContext);
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


    const handleProductclick = (id) => {
        // alert(`product clicked ${id}`)
        console.log("Hello",id)
        router.push(`/product/${id}`)

    }


    return (
        <>
       

       <main className={styles.main}>

        <h2 className={String(styles.heading + ' ' + "underlineeffect")}>Product List !!!</h2>
        <article className={styles.products}>

          {
            productlist && productlist.map((value)=>{
                return (
                    <section onClick={()=>handleProductclick(value.id)} key={value.id} className={styles.productdesc}>
                    <Image src={value.image} width={200} height={200}  alt="noimage"/>
                    <h2>{value.title}</h2>
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




       </main>


        
        </>
    )
}