const express = require("express");

const Note = require("../models/assessment");
const auth = require("../middlewares/auth");

const router = new express.Router();
router.post("/assessments", auth, async (req, res) => {
    const assessment = new Assessment({
        ...req.body,
        owner: req.user._id,
    });
    try {
        await assessment.save();
        res.status(201).send({ assessment, message: "Saved" });
    } catch (e) {
        res.status(500).send(e);
    }
});