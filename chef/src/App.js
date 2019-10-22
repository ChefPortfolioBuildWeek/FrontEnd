import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "./App.css";
//import HomePage from "./compenents/Homepage.js";
import NavBar from "./components/NavBar.js";

import ChefLogin from "./components/ChefLogin.js";
//import ChefPostPage from "./components/ChefPostPage.js";
import styled from "styled-components";

import PrivateRoute from "./components/PrivateRoute.js";

const Header = styled.div`
  display: flex;
  justify-content: center;
`;
const NavLinks = styled.p`
  margin: 2%;
  width: 15%;
`;
const Links = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #52ad9c;
  font-weight: bold;
  padding: 4%;
  border: 4px solid #52ad9c;
  &:hover {
    background-color: #47624f;
    color: #edf9f3;
  }
`;

function App() {
  return (
    <header className="App-header">
      <Route>
        <div className="App">
          <Route exact path="/" component={ChefLogin} />
          {<PrivateRoute exact path="/cheflogin" component={ChefLogin} />}
        </div>
      </Route>
    </header>
  );
}

export default App;
