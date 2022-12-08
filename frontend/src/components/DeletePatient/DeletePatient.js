import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

import "./DeletePatient.css";
const DeletePatient = () => {
    const [patientData, setPatientData] = useState("");

    const { id } = useParams();

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    axios({
        url: `${process.env.REACT_APP_PHYSIOAPP_BACKEND}/patients/${id}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => {
            setPatientData(res.data.content);
        })
        .catch((e) => {
            console.log(e.message);
        });

    const handleYesDelete = () => {
        axios({
            url: `${process.env.REACT_APP_PHYSIOAPP_BACKEND}/patients/${id}`,

            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(navigate("/dashboard"));
    };

    const handleNoDelete = () => {
        navigate("/dashboard");
    };

    return (
        <div className="DeletePatient">
            <h2 className="DelQuestion">
                Are you sure you want to delete this patient?
            </h2>
            <div className="DelPatientContent">{patientData}55</div>
            <div className="DeleteBtns">
                <button
                    onClick={handleNoDelete}
                    className="NoDeleteButton DeleteButton"
                >
                    No
                </button>
                <button
                    onClick={handleYesDelete}
                    className="YesDeleteButton DeleteButton"
                >
                    Yes
                </button>
            </div>
        </div>
    );
}

export default DeletePatient