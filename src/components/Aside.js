import React from 'react';
import Post from 'components/Post'

export default (props) => {
    return (
        <aside>
            {props.storyList.map((data, index) => {
                return <Post key={`post-list-${index}`} post={data} />
            })}
        </aside>
    )
}