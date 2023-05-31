// Login file
import React, { useState } from "react";

import "./login.css"

import porquinho from "../../assets/svg/porquinho.svg"

import { Link, useNavigate } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

// modal terms
import ModalLoading from "../../components/ModalLoading";

import UserService from "../../services/UserService";

import jwtDecode from "jwt-decode";

export default function Login(props) {

    const navigate = useNavigate();

    // form variables
    const initialValueInputs = { email: "", password: "" };
    const [loginData, setLoginData] = useState(initialValueInputs);
    const [errorInputs, setErrors] = useState(initialValueInputs);
    const [errorLogin, setErrorLogin] = useState("")

    //status request
    const [loading, setLoading] = useState(false)

    // modal terms 
    const [modalTec, setModalTec] = useState(false);
    const [modalPrivacy, setModalPrivacy] = useState(false);

    // This is set when there is an error in the form
    let someFormError = false;

    const handleInputsOnChange = (e) => {

        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }

    const login = async (e) => {

        e.preventDefault();

        setLoading(true);
        setErrors(validate({ ...loginData }));
        if (someFormError) {
            setLoading(false);
            return;
        }

        try {

            const token = await UserService.login(loginData.email, loginData.password);
            const user = jwtDecode(token);

            const time = new Date();
            time.setMinutes(time.getMinutes() + 20);
            sessionStorage.setItem("user", JSON.stringify({
                ...user,
                token,
                password: loginData.password,
                expiration: time
            }));

            if (window.location.pathname === "/") {

                navigate("/dashboard")
                setLoading(false);
                props.setAuth(true);
                return;
            }

            setLoading(false);
            props.setAuth(true);

        } catch {

            setLoading(false);
            setErrorLogin("Wrong username or password")
            return;
        }
    };

    // Validate form inputs
    const validate = (values) => {

        var formerrors = { email: '', password: '' };

        if (!values.email) {
            formerrors.email = "Email is required"
            someFormError = true;
        }

        if (!values.password) {
            formerrors.password = "Password is required"
            someFormError = true;
        }

        return formerrors;
    }

    return (

        <div className="loginContainer">
            <div className="loginContainer-image">
                <img src={porquinho}></img>
            </div>
            <div className="loginContainer-formContainer">
                <form>
                    <div className="loginContainer-formContaine-header">
                        <div className="loginContainer-formContaine-header-title">
                            <h1>Login</h1>
                        </div>
                        <div className="loginContainer-formContaine-header-button">
                            <button><a href="#">Entrar</a></button>
                        </div>
                    </div>
                  
                </form>
            </div>
        </div>
    );
}
