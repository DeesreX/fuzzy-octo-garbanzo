import React from "react";
import "./sidebar.css"

export default function Sidebar(){
    return (
        <div className={"sidebar"}>
            <div className={"sidebarItem"}>

                <span className={"title"}>About Me</span><br/>
                <img className={"about-image"} src="https://media-exp1.licdn.com/dms/image/D5635AQFbqofFogxO2A/profile-framedphoto-shrink_200_200/0/1644253233904?e=1647424800&v=beta&t=kK2hC8wJpUM7MK0MxGbT_U5Ya_cC7WOJM8mwMKVVhjM" alt=""/>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, aspernatur consectetur dolor ex
                    exercitationem fuga minima minus natus nihil nisi obcaecati recusandae rem repudiandae sed sequi
                    sunt suscipit ullam, unde.</p>
            </div><br/>
            <div className="sidebarItems">
                <span className={"title"}>Categories</span>
                <ul className="sidebarList">
                    <li>Life</li>
                    <li>Games</li>
                    <li>Skills</li>
                </ul>
            </div><br/>
            <div className="sidebarItem">
                <span className={"title"}>Follow</span>
                <div className="sidebarSocial">
                    <i className="fa-brands fa-gitlab"/>
                    <i className="fa-brands fa-github"/>
                    <i className="fa-brands fa-linkedin-in"/>
                </div>
            </div>
        </div>
    )
}