export async function  GET () {

   
    const resData = await (await fetch("https://fakestoreapi.com/products")).json()

    // console.log(resData)

    
    return new Response(JSON.stringify({resData}))

}

