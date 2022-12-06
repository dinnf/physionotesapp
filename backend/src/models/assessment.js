const mongoose = require('mongoose')
const Schema = mongoose.Schema
const assessmentSchema = new Schema({
    hpc:{
        mechanism:{type:String},
        trauma:{type:String},
        gradual:{type:String},
        progression:{type:String},

        
    },
    symptoms:{
        pain:{
            location:{type:String},
            nature:{type:String},
            severity:{type:Number},
            irritability:{type:String},
            aggravating:{
                factors:{type:String},
                timetoonset:{type:String}
            },
            easing:{
                easingfactor:{type:String},
                timetoease:{type:String}

            },
            dailypattern:{type:String},
            stiffness:{type:String},

        },
    pmh:{type:String},
    sochx:{
        family:{type:String},
        work:{
            job:{type:String},
            hours:{type:String},
            physicality:{type:String},
            stress:{type:String}
        },
        hobbies:{type:String},
        exercise:{type:String}
    },
    redflags:{
        
    },
    yellowflags:{

    },
    investigations:{type:String},
    treatment:{type:String},
    neuro:{type:String},
    specialquestions:{type:String}

    
    
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }
    
},
{
    timestamps:true,
    toJSON: {virtuals:true}
})
module.exports = mongoose.model('Assessment',assessmentSchema)