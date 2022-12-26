const setCookie =   (req, res) => {
    console.log(`Set Cookie`)
    res.cookie("name" ,  "Ahmed  Raza" , {maxAge : 4000})
}
const getCookie = (req,res)=>{
    console.log(`Get Cookie`)
    res.send('Ahmed Raza')
    console.log(req.cookies.name)
}

const deleteCookie = ()=>{
    console.log(`Delete Cookie`)
    res.clearCookie("name")
}




export {  setCookie, getCookie, deleteCookie }
