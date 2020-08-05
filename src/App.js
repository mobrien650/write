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

const Content = styled.div``;

export default class App extends BasePage {

  constructor(props) {
    super(props, ParentViewModel)
  }

  render() {
    return (
      <Router>
        <Content className="content-wrapper">
          <Shell storyList={this.state.storyList}>
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/story/:name" component={StoryPage}/>
            </Switch>
          </Shell>
        </Content>
      </Router>
    );
  }
}