'use client'
// import { Spinner } from '@/components/loading/Spinner'
import { BeatLoader } from "react-spinners";

const Loading = () => {
    return (

        <>
        
       
       {/* <div className={styles.container}>
         <Spinner/>
       </div> */}

         <div className="loading-spinner loading">
         <BeatLoader color="#00BFFF" size={80} />
        <p>
         
         Loading...

        </p>
         </div>

        </>

    )
}


export default Loading