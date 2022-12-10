import axios from "axios";
import React from "react";
import {useNavigate} from "react-router";

import "./DeleteAccount.css";

function DeleteAccount() {
    
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleYesDelete = () => {
        

        axios({
            url: `${process.env.REACT_APP_PHYSIOAPP_BACKEND}/users/delete`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(() => {
            console.log("User Account deleted");
            alert("Your account has been deleted")
            localStorage.removeItem("token");
            navigate("/");
        });
    };
    const handleNoDelete = () => {
        navigate('/dashboard')
    }
  return (
    <div className="DeleteAccount">
            <h2 className="DelAccountQuestion">
                Are you sure you want to delete this account?
            </h2>
            <div className="DeleteAccountBtns">
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
  )
}

export default DeleteAccount