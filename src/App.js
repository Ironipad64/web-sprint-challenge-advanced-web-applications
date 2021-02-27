import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubble" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

// const StyledApp = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 0 0 36px;
//   padding: 12px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

//   list-style: none;
//   margin-right: 6px;
//   color: #204963;
// `

//Task List:
//1. Render BubblePage as a PrivateRoute