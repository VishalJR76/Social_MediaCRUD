const mongoose= require ('mongoose')

const teacherSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        max:8
    },
    Subject:{
        type:String,
        required:true
    },
    
    Exp:{
        type:Number,
        required:true,
    }
},
{
    versionKey:false
})

module.exports = mongoose.model('teacher',teacherSchema)