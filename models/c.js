const mongoose = require('mongoose')
 

const crudSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tot_marks:{
        type:Number,
        required:true
    },
    eng_marks :{
        type:Number,
        required:true
    },
    mat_marks :{
        type:Number,
        required:true
    },
    tam_marks :{
        type:Number,
        required:true
    },
    sci_marks :{
        type:Number,
        required:true
    },
    soc_marks:{
        type:Number,
        required:true
    }
},
    {
        versionKey:false
    }

) 

module.exports = mongoose.model('crud',crudSchema)

