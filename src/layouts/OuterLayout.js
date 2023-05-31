// Outer Layout for outer pages
import React, { Component } from "react";
import outerRoutes from "../routes/outerRoutes.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../views/outerViews/login.js";
import InnerLayout from "./InnerLayout.js";
import UserService from "../services/UserService.js";

import jwtDecode from "jwt-decode";
import ModalLoading from "../components/ModalLoading.js";

export default class OuterLayout extends Component {


    async componentDidMount() {

        await this.verifySession();
    }

    state = {
        loading: false
    }

    setLoading = (value) => {

        this.setState({ ...this.state, loading: value });
    }

    async verifySession() {

        this.setLoading(true)
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (!user) {
            this.setLoading(false)
            return;
        }

        try {

            const token = await UserService.login(user.email, user.password);
            const jwt = jwtDecode(token);

            const time = new Date();
            time.setMinutes(time.getMinutes() + 20);
            sessionStorage.setItem("user", JSON.stringify({
                ...jwt,
                token,
                expiration: time
            }));

            this.setAuth(true);
            if (window.location.pathname === "/") {
                window.location.pathname = "/dashboard"
            }

            this.setLoading(false)
        } catch {

            this.setLoading(false)
            sessionStorage.clear("user")
            return;
        }
    }

    getRoutes = () => {

        return outerRoutes.map((rout, key) => {

            return <Route key={key} path={rout.path} element={rout.element}></Route>
        });
    };

    state = {
        auth: false,
    };

    setAuth = (value) => {

        this.setState({ ...this.state, auth: value });
    }


    render = () => {

        return (
            <>
                <ModalLoading loading={this.state.loading}></ModalLoading>
                <BrowserRouter>

                    <Routes>
                        {this.getRoutes()}
                        <Route path="/" element={<Login auth={this.state.auth} setAuth={this.setAuth}></Login>} />
                    </Routes>

                    {/*authenticated case */}
                    {(this.state.auth && !outerRoutes.filter(route => route.path === window.location.pathname)[0]) && <InnerLayout></InnerLayout>}

                    {/*nauthenticated case */}
                    {
                        ((!this.state.auth && window.location.pathname !== "/" && (window.location.pathname !== "/dashboard") 
                        && !outerRoutes.filter(route => route.path === window.location.pathname)[0] ||
                            (!sessionStorage.getItem("user") && window.location.pathname === "/dashboard"))) &&
                                <Login auth={this.state.auth} setAuth={this.setAuth}></Login>
                    }
                </BrowserRouter>
            </>
        )

    }
}