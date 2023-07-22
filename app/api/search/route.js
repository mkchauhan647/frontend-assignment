export async  function POST (req,res) {

    console.log("Hello World from search")

    const searchKey = await req.json()

    const products = await fetch("https://fakestoreapi.com/products")

    const productsJson = await products.json()

    console.log(searchKey.search)
    
    const filteredProducts = productsJson.filter(product => {
        return(
        product.category.toLowerCase().includes(searchKey.search.toLowerCase()) ||
        product.title.toLowerCase().includes(searchKey.search.toLowerCase())
    )})

    if(!filteredProducts){
        return new Response(JSON.stringify({message:"No products found"}),{status:404})
    }
   



    return new Response(JSON.stringify({filteredProducts}),{status:200})
}