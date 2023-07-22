"use client";
import { useRef, useState } from "react";
import styles from "./search.module.css";
import Image from "next/image";
import { ProductContext } from "@/contexts/ProductContext";
import { useContext } from "react";
export const Search = () => {

  const {handleProductclick,setSearchResults,searchResults,productlist} = useContext(ProductContext);
  const inputValue = useRef();
  const handleSearchInput = async (e,index) => {
    e.preventDefault();
    console.log("Hello slect is fire",inputValue.current.value)
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

  const handleSearchCatogory = async (e,index) => {
    e.preventDefault();
    console.log("Hello slect is fire",e.target.value)
    const res = await fetch("/api/search", {
      method: "POST",
      body: JSON.stringify({
        search: e.target.value,
      }),
    });

    if(res.ok){
      const data = await res.json();
      console.log(data);
      setSearchResults(data.filteredProducts);
    }
  
  }




  return (
    <main className={styles.main}>
      <form className={styles.searchbar}>
        <input type="search" placeholder="Search" ref={inputValue} />
        <button type="submit" onClick={handleSearchInput}>Search</button>
      </form>

        <div className={styles.filteredheadtext}>
        <h2>Filtered Products:</h2>
        <i className="fa-solid fa-filter"></i> 
        <select onChange={handleSearchCatogory} className={styles.dropdown}>
          {
            productlist.map((value,index)=>{
              return(
                <option value={value.category} key={value.id}>{value.category}</option>
              )
            })
          }

          </select>       
        </div>
      <article className={styles.products}>
        {searchResults && searchResults.map((value) => {

            return (
              <section
                onClick={() => handleProductclick(value.id)}
                key={value.id}
                className={styles.productdesc}
              >
                <Image
                  src={value.image}
                  width={200}
                  height={200}
                  alt="noimage"
                />
                <h2>{value.title}</h2>
              </section>
            );
          })}
      </article>
    </main>
  );
};
