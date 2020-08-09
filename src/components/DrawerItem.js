import React from 'react'

import { NavLink } from "react-router-dom";

export default (props) => {
    return (
        <React.Fragment>
                <li><NavLink exact={true} activeClassName='active' to={`/${props.path}/${props.post.fileName}`} onClick={props.toggle}> {props.post.title} </NavLink></li>
        </React.Fragment>
    )                   
}