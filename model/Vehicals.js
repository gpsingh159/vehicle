import mongoose from 'mongoose'
const vehicalSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:false
    },
    mobile_number:{
        type:String,
        required:true
    },
    flat_number:{
        type:String,
        required:true
    },
    vehical_number:{
        type:String,
        required:true
    },
    by:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

mongoose.model("Vehical",vehicalSchema)