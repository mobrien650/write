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
        return null
    }
}