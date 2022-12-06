import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./CreatePatient.css";
function CreatePatient() {
        const [firstname, setFirstName] = useState("");
        const [lastname, setLastName] = useState("");
        const [dateofbirth, setDateOfBirth] = useState("");
        const [tel, setTel] = useState("");
        const [email, setEmail] = useState("");
        const [address, setAddress] = useState("");
        const navigate = useNavigate();
    
        const token = localStorage.getItem("token");
        const handleSubmit = (e) => {
            e.preventDefault();
            const patient = { newPatient };
    
            axios({
                method: "POST",
                url: `${process.env.REACT_APP_PHYSIOAPP_BACKEND}/patients`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                data: patient,
            }).then(() => {
                console.log("New Patient Created");
                navigate("/dashboard");
            });
        };

  return (
        <div className="CreateForm">
            <div className="FormContent">
                <form onSubmit={handleSubmit}>
                    <div className="NewPatientForm">
                        <h3 className="TextHead">Note</h3>
                        <textarea
                            className="NoteText"
                            required
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <button className="CreateNoteBtn" onClick={handleSubmit}>
                        Create Note
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreatePatient

