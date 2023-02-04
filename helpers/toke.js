const jwt =require('jsonwebtoken')

const tokengenerate =(name)=>{
    const token = jwt.sign(
        {name}
        ,process.env.JWT_KEY,
        {expiresIn:"3hours"})

        return token
}

const tokenvalidate = (token)=>{
    try{
          const data = jwt.verify(token,process.env.JWT_KEY)
          return data
    }catch(err){
        return false
        }
}
module.exports.tokengenerate=tokengenerate
module.exports.tokenvalidate=tokenvalidate