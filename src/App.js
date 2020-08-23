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
              <Route path="/" component={() => this.makeComponent(HomePage)} exact/>
              <Route path="/:type/:name" component={(props) => this.makeComponent(StoryPage, props)} drawer={this.state}/>
            </Switch>
          </Shell>
        </div>
      </Router>
    );
  }

  makeComponent(component, props) {
    const Tag = component
    return <Tag drawer={this.state} {...props} />
  }
}