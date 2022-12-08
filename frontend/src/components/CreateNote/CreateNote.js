import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./CreateNote.css";

const CreateNote = () => {
    const [hpc, setHpc] = useState("History of Presenting Complaint");
    const [mechanism, setMechanism] = useState("");
    const [trauma, setTrauma] = useState("");
    const [onset, setOnset] = useState("");
    const [progression, setProgression] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [pain, setPain] = useState("");
    const [location, setLocation] = useState("");
    const [nature, setNature] = useState("");
    const [severity, setSeverity] = useState("");
    const [irritability, setIrritability] = useState("");
    const [aggravatingfactors, setAggravatingfactors] = useState("");
    const [onsettime, setOnsettime] = useState("");
    const [easingfactors, setEasingfactors] = useState("");
    const [timetoease, setTimetoease] = useState("");
    const [dailypattern, setDailypattern] = useState("");
    const [stiffness, setStiffness] = useState("");
    const [pmh, setPmh] = useState("");
    const [sochx, setSochx] = useState("");
    const [family, setFamily] = useState("");
    const [work, setWork] = useState("");
    const [stress, setStress] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [exercise, setExercise] = useState("");
    const [redflags, setRedflags] = useState("");
    const [yellowflags, setYellowflags] = useState("");
    const [investigations, setInvestigations] = useState("");
    const [treatment, setTreatment] = useState("");
    const [neuro, setNeuro] = useState("");
    const [specialquestions, setSpecialquestions] = useState("");
   
    const navigate = useNavigate();
    const { id } = useParams();

    const token = localStorage.getItem("token");

    const handleSubmit = (e) => {
        e.preventDefault();
        const assessment = { hpc, mechanism, trauma, onset, progression, symptoms, pain, location, nature, severity, irritability, aggravatingfactors, onsettime, easingfactors, timetoease, dailypattern, stiffness, pmh, sochx, family, work, stress, hobbies, exercise, redflags, yellowflags, investigations, treatment, neuro, specialquestions };

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_PHYSIOAPP_BACKEND}/notes`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            data: {...assessment, patient:id},
        }).then(() => {
            console.log("New Note Added");
            navigate("/dashboard");
        });
    };

    return (
        <div className="CreateForm">
            <div className="FormContent">
                <form onSubmit={handleSubmit}>
                    <div className="NoteForm">
                        <h1>Assessment {id}</h1>
                        <h3 className="TextHead">History of Presenting Complaint</h3>
                        <textarea
                            className="NoteText"
                            value={hpc}
                            onChange={(e) => setHpc(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Mechanism</h3>
                        <textarea
                            className="NoteText"
                            value={mechanism}
                            onChange={(e) => setMechanism(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Trauma</h3>
                        <textarea
                            className="NoteText"
                            value={trauma}
                            onChange={(e) => setTrauma(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Onset</h3>
                        <textarea
                            className="NoteText"
                            value={onset}
                            onChange={(e) => setOnset(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Progression</h3>
                        <textarea
                            className="NoteText"
                            value={progression}
                            onChange={(e) => setProgression(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Symptoms</h3>
                        <textarea
                            className="NoteText"
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Pain</h3>
                        <textarea
                            className="NoteText"
                            value={pain}
                            onChange={(e) => setPain(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Location</h3>
                        <textarea
                            className="NoteText"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Nature</h3>
                        <textarea
                            className="NoteText"
                            value={nature}
                            onChange={(e) => setNature(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Severity</h3>
                        <textarea
                            className="NoteText"
                            value={severity}
                            onChange={(e) => setSeverity(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Irritability</h3>
                        <textarea
                            className="NoteText"
                            value={irritability}
                            onChange={(e) => setIrritability(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Aggravating Factors</h3>
                        <textarea
                            className="NoteText"
                            value={aggravatingfactors}
                            onChange={(e) => setAggravatingfactors(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Onset Time</h3>
                        <textarea
                            className="NoteText"
                            value={onsettime}
                            onChange={(e) => setOnsettime(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Easing Factors</h3>
                        <textarea
                            className="NoteText"
                            value={easingfactors}
                            onChange={(e) => setEasingfactors(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Time to Ease</h3>
                        <textarea
                            className="NoteText"
                            value={timetoease}
                            onChange={(e) => setTimetoease(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Daily Pattern</h3>
                        <textarea
                            className="NoteText"
                            value={dailypattern}
                            onChange={(e) => setDailypattern(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Stiffness</h3>
                        <textarea
                            className="NoteText"
                            value={stiffness}
                            onChange={(e) => setStiffness(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Past Medical History</h3>
                        <textarea
                            className="NoteText"
                            value={pmh}
                            onChange={(e) => setPmh(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Social History</h3>
                        <textarea
                            className="NoteText"
                            value={sochx}
                            onChange={(e) => setSochx(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Family</h3>
                        <textarea
                            className="NoteText"
                            value={family}
                            onChange={(e) => setFamily(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Work</h3>
                        <textarea
                            className="NoteText"
                            value={work}
                            onChange={(e) => setWork(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Stress</h3>
                        <textarea
                            className="NoteText"
                            value={stress}
                            onChange={(e) => setStress(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Hobbies</h3>
                        <textarea
                            className="NoteText"
                            value={hobbies}
                            onChange={(e) => setHobbies(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Exercise</h3>
                        <textarea
                            className="NoteText"
                            value={exercise}
                            onChange={(e) => setExercise(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Red Flags</h3>
                        <textarea
                            className="NoteText"
                            value={redflags}
                            onChange={(e) => setRedflags(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Yellow Flags</h3>
                        <textarea
                            className="NoteText"
                            value={yellowflags}
                            onChange={(e) => setYellowflags(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Investigations</h3>
                        <textarea
                            className="NoteText"
                            value={investigations}
                            onChange={(e) => setInvestigations(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Treatment</h3>
                        <textarea
                            className="NoteText"
                            value={treatment}
                            onChange={(e) => setTreatment(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Neuro</h3>
                        <textarea
                            className="NoteText"
                            value={neuro}
                            onChange={(e) => setNeuro(e.target.value)}
                            
                        />
                    </div>
                    <div className="NoteForm">
                        <h3 className="TextHead">Special Questions</h3>
                        <textarea
                            className="NoteText"
                            value={specialquestions}
                            onChange={(e) => setSpecialquestions(e.target.value)}
                            
                        />
                    </div>
                    
                    <button className="CreateNoteBtn" onClick={handleSubmit}>
                        Create Assessment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateNote;
