export async  function GET (req,res) {

    // console.log(await req.json())



    return new Response(JSON.stringify({message:"Hello World from product detail"}))
}