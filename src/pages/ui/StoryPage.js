import React from 'react';
import ReactMarkdown from 'react-markdown'

import BasePage from 'pages/ui/BasePage';

import StoryViewModel from 'pages/logic/StoryViewModel'

export default class StoryPage extends BasePage {
    constructor(props) {
        super(props, StoryViewModel)
    }

    componentWillReceiveProps(nextProp) {
        this.viewModel.updateProps(nextProp)
    }

    render() {
        return (
            <div>
                <ReactMarkdown source={this.state.story}/>
            </div>
        )
    }
}
