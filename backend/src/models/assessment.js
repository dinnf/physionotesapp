const mongoose = require('mongoose')
const Schema = mongoose.Schema
const assessmentSchema = new Schema({
    
    hpc:{type: String},
    mechanism:{type:String},
    trauma:{type:String},
    onset:{type:String},
    progression:{type:String},
    symptoms:{type:String},
    pain:{type: String},
    location:{type:String},
    nature:{type:String},
    severity:{type:Number},
    irritability:{type:String},
    aggravatingfactors:{type: String},
    onsettime:{type:String},
    easingfactors:{type: String},
    timetoease:{type:String},
    dailypattern: {type:String},
    stiffness:{type:String},
    pmh:{type:String},
    sochx:{type:String},
    family:{type:String},
    work:{type:String},
    job:{type:String},
    hours:{type:String},
    physicality:{type:String},
    stress:{type:String},
    hobbies:{type:String},
    exercise:{type:String},
    redflags:{type: String},
    yellowflags:{type: String},
    investigations:{type:String},
    treatment:{type:String},
    neuro:{type:String},
    specialquestions:{type:String},
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Patient",
    },
    
},
{
    timestamps:true,
    toJSON: {virtuals:true}
})
module.exports = mongoose.model('Assessment',assessmentSchema)