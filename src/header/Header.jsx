import React from "react";
import "./header.css"

export default function Header(){
    return (
        <div className={"header"}>
            <div className={"headerTitles"}>
                <span className={"headerTitleSm"}>Game Dev</span>
                <span className={"headerTitleLg"}>BLOG</span>
            </div>
            <img src="https://cdn.pixabay.com/photo/2014/04/05/11/38/bokeh-316425_960_720.jpg" alt="" className={"headerImg"}/>
            
        </div>
    )
}