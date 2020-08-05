import React from 'react';
import styled from 'styled-components'

import { SPACING_DIMEN } from 'styles/dimen'

import BasePage from 'pages/ui/BasePage';

import HomeViewModel from 'pages/logic/HomeViewModel'

export default class HomePage extends BasePage {
    constructor(props) {
        super(props, HomeViewModel)
    }

    render() {
        return (
            <React.Fragment>
                <h2>ALL ABOUT ME!!</h2>
                <p>I am an amazing writer and will quit my day job to sell books for 99 cents.</p>
            </React.Fragment>
        )
    }
}