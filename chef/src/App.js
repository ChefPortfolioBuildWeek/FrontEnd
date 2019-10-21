import React from "react";
import { Route, Link, Switch, Router } from "react-router-dom";

import "./App.css";
//import HomePage from "./compenents/Homepage.js";
import NavBar from "./compenents/NavBar.js";
import SearchForm from "./compenents/SearchForm.js";
import ChefLogin from "./compenents/ChefLogin.js";
import ChefPostPage from "./compenents/ChefPostPage.js";
import styled from "styled-components";

//import PrivateRoute from "./compenents/PrivateRoute.js";

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
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="App">
            <NavBar />
            <SearchForm />

            <NavLinks>
              <Links to="/chefpostpage">Chef Portfolio</Links>
            </NavLinks>
          </div>
          <Switch>
            <Route exact path="/" component={ChefLogin} />
            <Route exact path="/chefpostpage" component={ChefPostPage} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
