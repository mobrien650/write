import React from 'react'

import { Link } from "react-router-dom";
  
export default (props) => {
    return (
       <React.Fragment>
            <li><Link to={`/story/${props.post.fileName}`}> {props.post.title} </Link></li>
        </React.Fragment>
    )
}