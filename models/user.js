const mongoose= require ('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        max:8
    },
    e_mail:{
             type:String,
             required:true
    },
    role:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true,
        max:8
    }
},
{
    versionKey:false
})

module.exports = mongoose.model('user',userSchema)