import React from 'react';
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import BasePage from 'pages/ui/BasePage';

import StoryViewModel from 'pages/logic/StoryViewModel'

import { SPACING_DIMEN } from 'styles/dimen'

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
