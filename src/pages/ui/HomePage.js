import React from 'react';
import styled from 'styled-components'

import { SPACING_DIMEN } from 'styles/dimen'

import BasePage from './BasePage';

import HomeViewModel from '../logic/HomeViewModel'

import Shell from '../../components/Shell';

export default class HomePage extends BasePage {
    constructor(props) {
        super(props, HomeViewModel)
    }

    render() {
        return null
    }
}