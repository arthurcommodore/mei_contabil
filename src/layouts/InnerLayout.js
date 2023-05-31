import { Component } from "react";

import { innerRoutes } from "../routes/innerRoutes"
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default class InnerLayout extends Component {

    logout() {

        sessionStorage.removeItem("user")
        window.location.reload();     
    }

    getRoutes = () => {

        const inner = innerRoutes.map((rout, key) => {

            if (rout.childrens) {
                return rout.childrens.map((rout, key) => {
                    return <Route key={key} path={rout.path} element={rout.element}></Route>
                })
            }
            return <Route key={key} path={rout.path} element={rout.element}></Route>
        });

        return inner;
    };

    render() {

        return (
            <div className="containerInner">
                <Sidebar
                    logout={this.logout}
                    routes={innerRoutes}
                ></Sidebar>
                <div>
                    <div className="containerInner-main-content">
                        <Routes>
                            {this.getRoutes()}
                        </Routes>
                    </div>
                </div>
            </div>
        )
    }
}