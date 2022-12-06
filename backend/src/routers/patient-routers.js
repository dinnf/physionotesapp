const express = require("express");
const Patient = require("../models/patient");
const auth = require("../middlewares/auth");

const router = new express.Router();
// Create new patient
router.post("/patients",auth, async (req, res) => {
    const patient = new Patient({
        ...req.body,
        physio: req.user._id
    });
    try {
        await patient.save();
        res.status(201).send({ patient, message: "New Patient Created" });
    } catch (e) {
        res.status(500).send(e);
    }
});
// Delete patient
router.delete("/patients/:id", auth, async (req, res) => {
    try {
        const patient = await Patient.findOneAndDelete({ _id: req.params.id });

        if (!patient) {
            return res.status(404).send();
        }
        res.send({ message: "Patient was deleted" });
    } catch (e) {
        res.status(500).send();
    }
});
// Get a patient
router.get("/patients/:id", auth, async (req, res) => {
    try {
        const patient = await Patient.findById({ _id: req.params.id });
        if (!patient) {
            return res.status(404).send();
        }
        res.send(patient);
    } catch (e) {
        res.status(500).send();
    }
});
// Get all patients
router.get("/patients", auth, async (req, res) => {
    try {

        await req.user.populate("patients");
        res.send(req.user.patients);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});
module.exports = router;