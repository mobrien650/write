import React from 'react'
import styled from 'styled-components'

import { Link } from "react-router-dom";
  
const Wrapper = styled.div`
    padding-bottom: 32px;
    a {
        background: pink;
        &:hover {
            background: red;
        }
    }
`

export default (props) => {
    return (
        <Wrapper>
            <Link to={`/story/${props.post.fileName}`}> {props.post.title} </Link>
        </Wrapper>
    )
}