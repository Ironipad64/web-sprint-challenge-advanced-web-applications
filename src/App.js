import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components'

import Login from "./components/Login";
import "./styles.scss";

import PrivateRoute from './components/PrivateRoute'
import BubblePage from './components/BubblePage'

function App() {
  return (
    <StyledApp>
      <Router>
        <div className="App">
          <PrivateRoute exact path='/protected' component={BubblePage} />
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 36px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  list-style: none;
  margin-right: 6px;
  color: #204963;
`

//Task List:
//1. Render BubblePage as a PrivateRoute