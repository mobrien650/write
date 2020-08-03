import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import styled from 'styled-components';

import Navigation from 'components/Navigation'

import HomePage from 'pages/ui/HomePage'
import StoryPage from 'pages/ui/StoryPage'

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

function App() {
  return (
    <Router>
        <Wrapper>
         <Content>
            <Navigation />
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/story/:name" component={StoryPage}/>
            </Switch>
          </Content>
        </Wrapper>
    </Router>
  );
}

export default App;
