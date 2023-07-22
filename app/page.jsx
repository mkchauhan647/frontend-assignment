const { Home } = require("@/components/Home")
import getdata from "@/components/getdatas"
const HomeRoute = async () =>{

  const data = await getdata()

return (
  <>
  
  <Home/>
  
  </>
)


}

export default HomeRoute