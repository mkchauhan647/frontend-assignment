const { Product } = require("@/components/Product")

const ProductRoute = ({params}) => {
    return (

            <>
            
            <Product pid={params.pid}/>
            
            </>


    )
}

export default ProductRoute