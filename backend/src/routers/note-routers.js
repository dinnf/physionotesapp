const express = require("express");

const Assessment = require("../models/assessment.js");
const auth = require("../middlewares/auth");

const router = new express.Router();

router.post("/notes", auth, async (req, res) => {
    const assessment = new Assessment({
        ...req.body,
        owner: req.user._id,
    });
    try {
        await assessment.save();
        res.status(201).send({ assessment, message: "Note Saved" });
    } catch (e) {
        res.status(500).send(e);
    }
});
router.get("/notes", auth, async (req, res) => {
    try {
        await req.user.populate("assessments");
        res.send(req.user.assessments);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});
/*
router.get("/notes", auth, async (req, res) => {
    try {
        await req.user.populate("notes");
        res.send(req.user.assessments);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});
*/
router.get("/notes/:id", auth, async (req, res) => {
    try {
        const assessment = await Assessment.findById({ _id: req.params.id });
        if (!assessment) {
            return res.status(404).send();
        }
        res.send(assessment);
    } catch (e) {
        res.status(500).send();
    }
});

// Get a patient with a specific user's ID
router.get("/notes/:patientId", auth, async (req, res) => {
    try {
        console.log(patientId[0])
        const patientObjectId = `ObjectId(${req.params.patientId})`
        console.log(patientObjectId)
        const patientNote = await Assessment.find({ patient: patientObjectId });
        console.log(patientNote)
        if (!patientNote) {
            return res.status(404).send();
        }
        res.send(patientNote);
    } catch (e) {
        res.status(500).send();
    }
});
router.delete("/notes/:id", auth, async (req, res) => {
    try {
        const assessment = await Assessment.findOneAndDelete({ _id: req.params.id });

        if (!assessment) {
            return res.status(404).send();
        }
        res.send({ message: "Note was deleted" });
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
