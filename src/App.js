import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import BasePage from 'pages/ui/BasePage'
import HomePage from 'pages/ui/HomePage'
import StoryPage from 'pages/ui/StoryPage'

import ParentViewModel from 'pages/logic/DrawerViewModel'

import Shell from 'components/Shell'

export default class App extends BasePage {

  constructor(props) {
    super(props, ParentViewModel)
  }

  render() {
    return (
      <Router>
        <div className="content-wrapper">
          <Shell model={this.state}>
            <Switch basename={process.env.PUBLIC_URL}>
              <Route path="/" component={HomePage} exact/>
              <Route path="/:type/:name" component={StoryPage}/>
            </Switch>
          </Shell>
        </div>
      </Router>
    );
  }
}