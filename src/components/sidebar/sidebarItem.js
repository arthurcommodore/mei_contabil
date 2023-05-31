import { useState } from "react"
import { Link } from "react-router-dom";

export default function SidebarItem({ item, toggleSidebarReports, toggleSidebarOperationMaintenance, logout }) {
    const [open, setOpen] = useState(false)

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick={() => setOpen(!open)}>
                    <div className="sidebar-item-title">
                        {item.icon && <img src={item.icon} style={{ height: "19px", verticalAlign: "baseline" }}></img>}
                        <span style={{ marginLeft: "10px" }}>{item.name}</span>
                    </div>
                    {/*<i className={open ? "iconFile fa fa-arrow-circle-up" : "iconFile fa fa-arrow-circle-down toggle-btn"} aria-hidden="true"></i>*/}


                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child, index) => <SidebarItem toggleSidebarReports={toggleSidebarReports} toggleSidebarOperationMaintenance={toggleSidebarOperationMaintenance} logout={logout} key={index} item={child} />)}
                </div>
            </div>
        )

    } else {

        return (
            < >
                {(item.name === "Logout") &&

                    <Link className="sidebar-item plain" to={item.path} onClick={logout}>
                        {item.icon && <img src={item.icon} style={{ height: "19px", marginBottom: "5px" }}></img>}
                        <div style={{ display: "inline-block", marginLeft: "10px", cursor: 'pointer' }}>
                            {item.name}
                        </div>
                    </Link>
                }
            </>
        )
    }
}