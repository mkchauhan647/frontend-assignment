"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { ProductContext } from "@/contexts/ProductContext";
import { useContext, useRef } from "react";
import { useRouter } from "next/navigation";
export const Navbar = () => {
  const { setSearchResults, cartCount,setCartCount } = useContext(ProductContext);
  const inputValue = useRef();
  const router = useRouter();
  const handleSearch = async (e) => {
    router.push("/search");
    e.preventDefault();
    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        search: inputValue.current.value,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setSearchResults(data.filteredProducts);
    }
  };

  const handleShowbar = () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
  };







  return (
    <>
      <header className={styles.header}>
        <i onClick={handleShowbar} className="fa fa-thin fa-bars fa-2x"></i>
        <div className={styles.header_text}>
          <h1
            className="underlineeffect"
            style={{ display: "inline-block", marginRight: "11px" }}
          >
            OnlineStore
          </h1>
          <i className="fa-solid fa-store fa-xl"></i>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link className="underlineeffect" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="underlineeffect" href="/search">
                Searchpage
              </Link>
            </li>
            <li>
              <Link className="underlineeffect" href="/about">
                About
              </Link>
            </li>

          </ul>
          <i class="fa-solid fa-xmark "></i>
        </nav>

        <div className={styles.navbar_right}>
          <form className={styles.searchbar}>
            <input ref={inputValue} type="searach" placeholder="Search" />
            <button onClick={handleSearch}>Search</button>
          </form>
          <div className={styles.cart}>
            <i className="fa-solid fa-shopping-cart fa-2x"></i>
            <span>{cartCount}</span>
          </div>
        </div>
      </header>
    </>
  );
};
