const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Note = require("./note.js");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 8,
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                },
            },
        ],
        firstname:{
            type:String,
            required:true,
            trim:true,
        },
        lastname:{
            type:String,
            required:true,
            trim:true,
        },
        isActive:{
            type:Boolean
        },
        email: {
            type:String,
            required:true,
            trim:true,
        },
        designation:{
            type:String,
            required:true,
            trim:true,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.virtual("assessments", {
    ref: "Assessment",
    localField: "_id",
    foreignField: "owner",
});

userSchema.virtual("patients", {
    ref: "Patient",
    localField: "_id",
    foreignField: "physio"
})
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
};

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign(
        { _id: user.id.toString() },
        process.env.PHYSIOAPP_JWT_SECRET
    );

    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token;
};

userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error("Unable to Login");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Unable to Login");
    }

    return user;
};

userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

userSchema.pre("remove", async function (next) {
    const user = this;
    await Note.deleteMany({ owner: user._id });
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
