const {tokenvalidate}=require("./toke")

module.exports =async function(req,res,next){
    try {
        console.log("Bienvenido")
        const {jwt}=req.cookies
        const valid =await tokenvalidate(jwt);
        if(valid){
            next();
        }else{
            res.send("Access denied")
        }
        
    } catch (err) {
        res.send(err)
    }
   }