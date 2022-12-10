import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./CreatePatient.css";
function CreatePatient() {
        const [patientId, setPatientId] = useState("")
        const [firstname, setFirstName] = useState("");
        const [lastname, setLastName] = useState("");
        const [dateofbirth, setDateOfBirth] = useState("");
        const [tel, setTel] = useState("");
        const [email, setEmail] = useState("");
        const [address, setAddress] = useState("");
        const navigate = useNavigate();
    
        const token = localStorage.getItem("token");
        const handleCreateNewPatient = (e) => {
            e.preventDefault();
            const patient = {patientId, firstname, lastname, dateofbirth, tel, email, address};
    
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
    <div className="NewPatient">
    <div className="NewPatientForm">
        <form>
        <h1 className="NewPatientHead">Create New Patient</h1>
            <div className="CreateNewPatient">
                <span className="FormLabel">Patient ID Number</span>
                <input
                    type="text"
                    className="FormInput"
                    required
                    value={patientId}
                    onChange={(e) => {
                        setPatientId(e.target.value);
                    }}
                />
            </div>
            <div className="FirstName">
                <span className="FormLabel">First Name</span>
                <input
                    type="text"
                    className="FormInput"
                    required
                    value={firstname}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                />
            </div>
            <div className="LastName">
                <span className="FormLabel">Last Name</span>
                <input
                    type="text"
                    className="FormInput"
                    required
                    value={lastname}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                />
            </div>
            <div className="dateofbirth">
                <span className="FormLabel">Date of Birth</span>
                <input
                    type="text"
                    className="FormInput"
                    required
                    value={dateofbirth}
                    onChange={(e) => {
                        setDateOfBirth(e.target.value);
                    }}
                />
            </div>
            <div className="Email">
                <span className="FormLabel">Email</span>
                <input
                    type="text"
                    className="FormInput"
                    required
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
            <div className="Telephone">
                <span className="FormLabel">Telephone No.:</span>
                <input
                    type="text"
                    className="FormInput"
                    required
                    value={tel}
                    onChange={(e) => {
                        setTel(e.target.value);
                    }}
                />
            </div>
            <div className="Address">
                <span className="FormLabel">Address:</span>
                <input
                    type="text"
                    className="FormInput"
                    required
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                />
            </div>
            <div className="FormBtns">
                <button
                    className="Btns CreateNewPatientBtn"
                    type="button"
                    onClick={handleCreateNewPatient}
                >
                    
                    Create Patient
                </button>
            </div>
        </form>
    </div>
</div>
    )
}

export default CreatePatient

