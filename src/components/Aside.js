import React from 'react';
import Post from 'components/Post';

import { Link } from "react-router-dom";

export default (props) => {
    return (
        <aside id={props.id}>
            <div>
                <Link to={`/`}>My Bio</Link>
                <ul>
                    {props.storyList.map((data, index) => {
                        return <Post key={`post-list-${index}`} post={data} />
                    })}
                </ul>
            </div>
        </aside>
    )
}