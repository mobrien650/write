import React from 'react';
import Navigation from 'components/Navigation';
import Aside from 'components/Aside';

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