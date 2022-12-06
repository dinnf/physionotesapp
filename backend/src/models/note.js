const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
        },

        content: {
            type: String,
            required: true,
            trim: true,
        },
        physio: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Patient"

        }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
