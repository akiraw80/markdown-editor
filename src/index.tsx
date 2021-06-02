import * as React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Editor } from './pages/Editor';

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`;
console.log('Hello');

const Main = (
  <React.Fragment>
    <GlobalStyle />
    <Router>
      <Route exact path="/editor">
        <Editor />
      </Route>
      <Route exact path="/history">
        <h1>History</h1>
      </Route>
      <Redirect to="/editor" path="*" />
    </Router>
  </React.Fragment>
);

render(Main, document.getElementById('app'));
