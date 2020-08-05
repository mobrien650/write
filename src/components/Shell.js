import React from 'react';
import Navigation from 'components/Navigation';
import Aside from 'components/Aside';

export default (props) => {
    return (
        <React.Fragment>
            <Navigation />
            <main>
                <Aside storyList={props.storyList} />
                <section>
                    {props.children}
                </section>
            </main>
        </React.Fragment>
    )
}