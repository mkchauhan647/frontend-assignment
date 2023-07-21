const { default: Link } = require("next/link")

const Products = () => {

    


    return(
        <>
        
        <div>This is product lists choose any of the following to go to specific product details</div>
        <Link href="/product/1">Product 1</Link>
        <Link href="/product/2">Product 2</Link>
        <Link href="/product/3">Product 3</Link>        
        </>
    )
}

export default Products