import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./CreateNote.css";
import bodyChart from "./bodychart.png"
const CreateNote = () => {
    const [hpc, setHpc] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [pain, setPain] = useState("");
    const [nature, setNature] = useState("");
    const [severity, setSeverity] = useState("");
    const [irritability, setIrritability] = useState("");
    const [aggravatingfactors, setAggravatingfactors] = useState("");
    const [easingfactors, setEasingfactors] = useState("");
    const [dailypattern, setDailypattern] = useState("");
    const [pmh, setPmh] = useState("");
    const [sochx, setSochx] = useState("");
    const [work, setWork] = useState("");
    const [stress, setStress] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [exercise, setExercise] = useState("");
    const [redflags, setRedflags] = useState("");
    const [yellowflags, setYellowflags] = useState("");
    const [investigations, setInvestigations] = useState("");
    const [treatment, setTreatment] = useState("");
    const [specialquestions, setSpecialquestions] = useState("");

    const [patientName, setPatientName] = useState("")
   
    const navigate = useNavigate();
    const { id } = useParams();
    const token = localStorage.getItem("token");

    const getPatientName = () => {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_PHYSIOAPP_BACKEND}/patients/${id}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        }).then((res) => {
            setPatientName(`NHI: ${res.data.patientId} Name: ${res.data.firstname} ${res.data.lastname}`)
        });
    };

    getPatientName()

    const handleSubmit = (e) => {
        e.preventDefault();
        const assessment = { hpc, symptoms, pain, nature, severity, irritability, aggravatingfactors, easingfactors, dailypattern, pmh, sochx, work, stress, hobbies, exercise, redflags, yellowflags, investigations, treatment, specialquestions };

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
        //Should make this all one component taking props
            <div className="FormContent">
                <h1>{patientName}</h1>
                        <form onSubmit={handleSubmit}>
                        <div className="BigContainer">
                            <div className="LeftColumn">
                        <div className="NoteForm">
                        
                        <h3 className="TextHead">History of Presenting Complaint</h3>
                        <textarea
                            className="NoteText"
                            value={hpc}
                            onChange={(e) => setHpc(e.target.value)}
                            
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
                        <h3 className="TextHead">Easing Factors</h3>
                        <textarea
                            className="NoteText"
                            value={easingfactors}
                            onChange={(e) => setEasingfactors(e.target.value)}
                            
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
                        <h3 className="TextHead">Past Medical History</h3>
                        <textarea
                            className="NoteText"
                            value={pmh}
                            onChange={(e) => setPmh(e.target.value)}
                            
                        />
                    </div>
                    </div>
                    <div className="RightColumn">
                    <img src={bodyChart} alt='bodychart' className="bodychart" />
                    <div className="NoteForm">
                        <h3 className="TextHead">Social History</h3>
                        <textarea
                            className="NoteText"
                            value={sochx}
                            onChange={(e) => setSochx(e.target.value)}
                            
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
                        <h3 className="TextHead">Special Questions</h3>
                        <textarea
                            className="NoteText"
                            value={specialquestions}
                            onChange={(e) => setSpecialquestions(e.target.value)}
                            
                        />
                    </div>
                    
                    <button className="CreateNoteBtn Btns CreateNewPatientBtn" onClick={handleSubmit}>
                        Create Assessment
                    </button>
                    </div>
                </div>
                </form>
                
            </div>
    );
};

export default CreateNote;
