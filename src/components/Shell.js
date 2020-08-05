import React from 'react';
import Navigation from 'components/Navigation';
import Aside from 'components/Aside';

function storiesListToggle() {
    const element = document.getElementById("stories-list");
    element.classList.toggle("expanded");
  } 

export default (props) => {
    return (
        <React.Fragment>
            <Navigation />
            <button class="toggle" id="stories-list-toggle" onClick={storiesListToggle}>Stories</button>
            <Aside storyList={props.storyList} id="stories-list"/>
            <main>
                <section>
                    {props.children}
                </section>
                <footer>&copy; Copyright 2020 ME OBrien All Rights Reserved</footer>
            </main>
        </React.Fragment>
    )
}