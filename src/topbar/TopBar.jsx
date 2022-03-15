import React from "react";
import "./topbar.css"

export default function TopBar() {
    return (
        <div className={"top"}>
            <div className={"topLeft"}>
                <i className="fa-brands fa-gitlab"/>
                <i className="fa-brands fa-github"/>
                <i className="fa-brands fa-linkedin-in"/>
            </div>
            <div className={"topCentre"}>
                <ul className={"topList"}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Write</li>
                    <li>Logout</li>
                </ul>
            </div>
            <div className={"topRight"}>
                <img className={"topImage"} src="https://avatars.githubusercontent.com/u/59907744?v=4" alt=""/>
                <i className="fa-solid fa-magnifying-glass"/>
            </div>
        </div>
    )
}