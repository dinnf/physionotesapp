const mongoose = require('mongoose')
const Schema = mongoose.Schema
const patientSchema = new Schema({
    patientId: {
        type: String,
        required: true
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    dateofbirth:{
        type:String,
        required:true,
    },
    tel:{
        type:String,
        required:true
    },
    physio: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    email:String,
    address:String,
    createdAt:{
        type:Date,
        immutable:true,
        default:()=>Date.now()
    }
},
{
    toJSON: { virtuals: true }
})
const Patient = mongoose.model('Patient', patientSchema)
module.exports = Patient