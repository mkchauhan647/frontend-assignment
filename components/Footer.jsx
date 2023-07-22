import styles from './footer.module.css'
export const Footer = () => {
    return (


        <>
        
        <footer className={styles.footer}>
            
       <div className={styles.footer_up}>

       <address className={styles.footer_up_left}>
            OnlineStore 
            <br/>
            1234 Main St.
            <br/>
            Anytown, USA 12345
            <br/>
            <i className="fas fa-phone"></i> 1-800-555-5555
            <br/>
            <i className="fas fa-envelope"></i> <a href="mailto:mkchauhan647@gmail.com">Email</a>
        </address>

        <div className={styles.footer_up_right}>
            
        <input type="text" placeholder="Enter your email address" className={styles.footer_input}/>
        <button className={styles.footer_button}>Get news later</button>

            </div>
       </div>



         <div className={styles.footer_down}>
            <p>Copyright 2023 &copy; | All rights reserved</p>
            <div className={styles.footer_down_icons}>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            </div>
        </div>

        </footer>

        </>


    )
}