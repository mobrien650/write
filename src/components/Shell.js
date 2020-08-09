import React from 'react';

import Header from 'components/Header';
import Aside from 'components/Aside';
import SideNav from 'components/SideNav';

export default (props) => {

    return (
        <React.Fragment>
            <Header />
            <Aside model={props.model}/>
            <SideNav model={props.model}>
                {props.children}
            </SideNav>
            <main>
                <section>
                    {props.children}
                </section>
                <footer>&copy; Copyright 2020 ME OBrien All Rights Reserved</footer>
            </main>
        </React.Fragment>
    )
}