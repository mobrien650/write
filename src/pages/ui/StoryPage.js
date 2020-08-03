import React from 'react';
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import { SPACING_DIMEN } from 'styles/dimen'

import BasePage from './BasePage';

import StoryViewModel from '../logic/StoryViewModel'

const Wrapper = styled.div`
    margin-left: ${SPACING_DIMEN.LARGE_PLUS};
    margin-right: ${SPACING_DIMEN.LARGE_PLUS};
    padding-top:  ${SPACING_DIMEN.LARGE_PLUS};
`

export default class StoryPage extends BasePage {
    constructor(props) {
        super(props, StoryViewModel)
    }

    render() {
        return (
            <Wrapper>
                <ReactMarkdown source={this.state.story}/>
            </Wrapper>
        )
    }
}
