import React from 'react';
import ReactMarkdown from 'react-markdown'

import BasePage from 'pages/ui/BasePage';

import StoryViewModel from 'pages/logic/StoryViewModel'

export default class StoryPage extends BasePage {
    constructor(props) {
        super(props, StoryViewModel)
    }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.viewModel.updateProps(this.props)
        }
    }

    render() {
        return (
            <article>
                <ReactMarkdown escapeHtml={false} source={this.state.story}/>
            </article>
        )
    }
}
