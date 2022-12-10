import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Signin.css";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();
        const user = { username, password};

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_PHYSIOAPP_BACKEND}/users/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        })
            .then((res) => {
                console.log("User logged in");
                const token = res.data.token;
                localStorage.setItem("token", token);
                navigate("/dashboard");
            })
            .catch((err) => {
                alert("Authentication failed");
                setUsername("");
                setPassword("");
            });
    }
    const handleSignupButton = () => {
        navigate("/signup")
    }
    return (
        <div className="Signin">
            <h1 className="SigninHead">PhysioNB</h1>
            <div className="SigninForm">
                <form>
                    <div className="FormUsername">
                        <span className="FormLabel">Username</span>
                        <input
                            type="text"
                            className="FormInput"
                            required
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div className="FormPassword">
                        <span className="FormLabel">Password</span>
                        <input
                            type="password"
                            className="FormInput"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="FormBtns">
                        <button className="Btns signinBtn" onClick={handleSignin}>
                            Sign In
                        </button>
                        <p>No account? Sign up here...</p>
                        <button
                            className="Btns registerBtn"
                            onClick={handleSignupButton}
                        >
                            {" "}
                            Sign up{" "}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;
