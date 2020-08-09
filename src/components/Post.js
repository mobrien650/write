import React from 'react'

import { NavLink } from "react-router-dom";

function storiesListToggle() {
    const element = document.getElementById("stories-list");
    const sideNav = document.getElementById("side-nav");
    element.classList.toggle("expanded");
    sideNav.classList.toggle("expanded");
}
  
export default (props) => {
    return (
    <React.Fragment>
            <li><NavLink exact={true} activeClassName='active' to={`/story/${props.post.fileName}`} onClick={storiesListToggle}> {props.post.title} </NavLink></li>
        </React.Fragment>
    )    
}