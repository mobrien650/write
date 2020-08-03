import React from 'react';
import Navigation from './Navigation';
import Aside from './Aside';

export default (props) => {
    return (
        <div>
            <Navigation />
            <Aside storyList={props.storyList} />
            <main>
                {props.children}
            </main>
        </div>
    )
}