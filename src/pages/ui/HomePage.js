import React from 'react';
import styled from 'styled-components'

import { SPACING_DIMEN } from 'styles/dimen'

import BasePage from './BasePage';

import HomeViewModel from '../logic/HomeViewModel'

import Post from '../../components/Post';

const Page = styled.div`
    margin-left: ${SPACING_DIMEN.LARGE_PLUS};
    margin-right: ${SPACING_DIMEN.LARGE_PLUS};
    padding-top:  ${SPACING_DIMEN.LARGE_PLUS};
`

export default class HomePage extends BasePage {
    constructor(props) {
        super(props, HomeViewModel)
    }

    render() {
        return (
            <Page>
                {this.state.storyList.map((data, index) => {
                    return <Post key={`post-list-${index}`} post={data} />
                })}
            </Page>
        )
    }
}