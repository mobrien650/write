import React from 'react';
import DrawerItem from 'components/DrawerItem';

import TEXT_TYPE from 'pages/MediaTypes'

function getClasses(model) {
    return model.expanded ? 'expanded' : ''
}

function getTitle(model) {
    if(model.type === TEXT_TYPE.STORY) {
        return "Short Stories"
    } else if(model.type === TEXT_TYPE.BLOG) {
        return "Blog Posts"
    }  
}

export default (props) => {
    return (
        <aside className={getClasses(props.model)} id="stories-list">
            <div className="list-container">
                <h3 class="nav-title">{getTitle(props.model)}</h3>
                <ul>
                    {props.model.listItems.map((data, index) => {
                        return <DrawerItem key={`post-list-${index}`} post={data} path={props.model.type} toggle={() => props.model.toggleDrawer(props.model.type)} />
                    })}
                </ul>
            </div>
        </aside>
    )
}