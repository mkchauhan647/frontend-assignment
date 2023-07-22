export async  function GET (req,res) {

    // console.log(await req.json())
    console.log("Hello from product id route",req.url)
    const pid = req.url.split("/")[5]
    
    const resData = await fetch(`https://fakestoreapi.com/products/${pid}`)

    const product = await resData.json()




    return new Response(JSON.stringify({product}),{status:200})
}