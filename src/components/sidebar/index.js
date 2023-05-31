import React from "react";

import "./sidebar.css"
import SidebarItem from "./sidebarItem";

export default function Sidebar(props) {

    return (
        <>
            <div className="sidebar">
                <img
                    src="/images/sidebar/logo.png"
                    className="mt-3"
                    width="150"
                    alt="eLogist"
                />
                <div>
                    {
                        props.routes.map((route, i) => {

                            return (
                                <SidebarItem
                                    key={i}
                                    item={route}
                                    toggleSidebarReports={props.toggleSidebarReports}
                                    toggleSidebarOperationMaintenance={props.toggleSidebarOperationMaintenance}
                                    logout={props.logout}>
                                </SidebarItem>
                            )
                        })
                    }
                    <div
                        className=" btn-primary p-2  w-40"
                        style={{ bottom: "0", position: "absolute" }}
                    >
                        <span className="sideitems">2022 ©️ LeonTech.io</span>
                    </div>
                </div>
            </div>
        </>
    );
}
