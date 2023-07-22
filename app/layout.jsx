import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { ProductProvider } from '@/contexts/ProductContext'

// import { Toast } from 'react-toastify/dist/components'
import 'react-toastify/dist/ReactToastify.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OnlineStore',
  description: 'This is an online store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>

       <ProductProvider>

       <Navbar/>
        
        {children}

        <Footer/>
       </ProductProvider>
        
      </body>
    </html>
  )
}
