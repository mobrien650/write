import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import styled from 'styled-components';

import BasePage from 'pages/ui/BasePage'
import HomePage from 'pages/ui/HomePage'
import StoryPage from 'pages/ui/StoryPage'

import ParentViewModel from 'pages/logic/ParentViewModel'

import Shell from 'components/Shell'

import { COLORS } from 'styles/color';
import { SPACING_DIMEN } from 'styles/dimen'

const Wrapper = styled.div`
  padding-left: ${SPACING_DIMEN.LARGE_PLUS};
  padding-right: ${SPACING_DIMEN.LARGE_PLUS};
`

const Content = styled.div`
  background: ${COLORS.WHITE};
  max-width: 1000px;
  min-width: 735px;
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: 2px 0px #AAAAAA;
`;

export default class App extends BasePage {

  constructor(props) {
    super(props, ParentViewModel)
  }

  render() {
    return (
      <Router>
          <Wrapper>
            <Content>
              <Shell storyList={this.state.storyList}>
                <Switch>
                  <Route path="/" component={HomePage} exact/>
                  <Route path="/story/:name" component={StoryPage}/>
                </Switch>
              </Shell>
            </Content>
          </Wrapper>
      </Router>
    );
  }
}