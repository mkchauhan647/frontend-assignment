const getdata = async () => {

 const data = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("This is data from getdata component")
        },1000)
 })

    return data
}

export default getdata