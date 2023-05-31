import React, { useState } from "react";

import "./signup.css"

import porquinho from "../../assets/svg/porquinho.svg"

import { useNavigate } from "react-router-dom";

// modal terms
import ModalLoading from "../../components/ModalLoading";

import UserService from "../../services/UserService";

export default function Signup(props) {

    const navigate = useNavigate();

    // form variables
    const initialValueInputs = { email: "", password: "" };
    const [signupData, setSignUp] = useState(initialValueInputs);

    const handleInputsOnChange = (e) => {

        const { name, value } = e.target;
        setSignUp({ ...signupData, [name]: value });
    }

    return (

        <div className="signup">

            <div className="container">

                <div className="signup-image">
                    <img src={porquinho}></img>
                </div>

                <div className="signup-formContainer">
                    
                    <form>

                        <div className="signup-formContaine-header">

                                <h1>CADASTRA-SE</h1>

                            <div className="signup-formContaine-header-button">
                                <button><a href="#">Entrar</a></button>
                            </div>
                        </div>

                        <div className="signup-formContaine-inputs">

                            <div className="signup-formContaine-inputs-box">
                                <label for="name">Nome</label>
                                <input id="name" type="text" name="name" placeholder="Digite o seu nome" required></input>
                            </div>

                            <div className="signup-formContaine-inputs-box">
                                <label for="password">Password</label>
                                <input id="password" type="text" name="password" placeholder="Digite a sua senha" required></input>
                            </div>

                            <div className="signup-formContaine-inputs-box">
                                <label for="confirmPassword">Confirm Password</label>
                                <input id="confirmPassword" type="text" name="confirmPassword" placeholder="Digite a sua senha novamente" required></input>
                            </div>
                        </div>

                        <div className="signup-formContaine-continue">
                            <button><a href="#">Continuar</a></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
