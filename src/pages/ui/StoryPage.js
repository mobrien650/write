import React from 'react';
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import BasePage from 'pages/ui/BasePage';

import StoryViewModel from 'pages/logic/StoryViewModel'

const Wrapper = styled.div``

export default class StoryPage extends BasePage {
    constructor(props) {
        super(props, StoryViewModel)
    }

    componentWillReceiveProps(nextProp) {
        this.viewModel.updateProps(nextProp)
    }

    render() {
        return (
            <Wrapper>
                <ReactMarkdown source={this.state.story}/>
            </Wrapper>
        )
    }
}
