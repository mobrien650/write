import React from 'react';
import DrawerItem from 'components/DrawerItem';

function getClasses(model) {
    return model.expanded ? 'expanded' : ''
}

export default (props) => {
    return (
        <aside className={getClasses(props.model)} id="stories-list">
            <div>
                <ul>
                    {props.model.listItems.map((data, index) => {
                        return <DrawerItem key={`post-list-${index}`} post={data} path={props.model.type} toggle={() => props.model.toggleDrawer(props.model.type)} />
                    })}
                </ul>
            </div>
        </aside>
    )
}