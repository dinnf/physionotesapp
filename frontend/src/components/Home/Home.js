import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./Home.css";
import axios from "axios";

import DeleteIcon from "@material-ui/icons/Delete";

const Home = () => {
    const [noteList, setNotes] = useState([]);
    const [patientList, setPatientList] = useState([])

    const callFn = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`${process.env.REACT_APP_PHYSIOAPP_BACKEND}/notes`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
                setNotes(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        callFn();
    }, []);

    useEffect(() => {
        callFn();
    }, [setNotes]);

    const getPatients = () => {
        const token = localStorage.getItem("token");

        axios
            .get(`${process.env.REACT_APP_PHYSIOAPP_BACKEND}/patients`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
                setPatientList(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    useEffect(() => {
        getPatients();
    }, []);

    useEffect(() => {
        getPatients();
    }, [setPatientList]);


    return (
        <div className="Home">
            <div className="patientColumn">
             <h1 className="HomePatients">Patients List</h1>
            {!patientList ||
                (patientList.length === 0 && (
                    <h2 className="NoPatientsFound">No Patients Found</h2>
                ))}
            <div className="PatientList">
                {patientList && (
                    <div>
                        {" "}
                        {patientList.map((patient) => (
                            <div className="Patient">
                                <div className="PatientId">
                                    {`NHI: ${patient.patientId} Name: ${patient.firstname} ${patient.lastname}`}
                                </div>
                                <Link to={`/deletepatient/${patient._id}`}>
                                    <span className="DelIcon">
                                        <DeleteIcon />
                                    </span>
                                </Link>
                                <Link to={`/createassessment/${patient._id}`}>
                                        <div>
                                        <button className="CreateAssessmentButton">Create Note</button>
                                        <button className="AddBtn">+</button>
                                        </div>
                                </Link>
                                <Link to={`/getnote/${patient._id}`}>
                                    <div>
                                        <button className="GetNoteButton">View Notes</button>
                                    </div>
                                </Link>
                                
                            </div>
                        ))}{" "}
                    </div>
                )}
            </div>
            </div>
            <div className="NotesColumn">
            <h1 className="HomeNotes">Notes</h1>

            <Link to="/create">
                <button className="AddBtn">+</button>
            </Link>

            {!noteList ||
                (noteList.length === 0 && (
                    <h2 className="NoNotesFound">No Notes Found</h2>
                ))}
            <div className="NoteList">
                {noteList && (
                    <div>
                        {" "}
                        {noteList.map((note) => (
                            <div className="Note">
                                <div className="NoteContent">
                                    {note.content}
                                </div>
                                <Link to={`/deletetask/${note._id}`}>
                                    <span className="DelIcon">
                                        <DeleteIcon />
                                    </span>
                                </Link>
                            </div>
                        ))}{" "}
                    </div>
                )}
            </div>
            </div>
            
        </div>
    );
};

export default Home;
