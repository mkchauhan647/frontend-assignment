'use client'
import Link from "next/link"
import styles from './navbar.module.css'



export const Navbar = () => {


    const handleSearch = () =>{

        alert("Search button is clicked")

    }


    return (

        <>
        
        <header className={styles.header}>

        <div className={styles.header_text}>
        <h1 className="underlineeffect" style={{display:"inline-block",marginRight:'11px'}}>OnlineStore</h1>
        <i className="fa-solid fa-store fa-xl"></i>
        </div>
        <nav className={styles.nav}>
            <ul>
                <li><Link className='underlineeffect' href='/'>Home</Link></li>
                <li><Link className="underlineeffect" href='/search'>Searchpage</Link></li>
                <li><Link className="underlineeffect" href='#'>About</Link></li>
            </ul>
        </nav>

        <div className={styles.searchbar}>

        <input type="searach" placeholder="Search"/>
        <button onClick={handleSearch}>Search</button>

        </div>

        </header>
        
        </>


    )

}