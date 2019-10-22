import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import SignUpPage from "./Register";


import "../index.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 0;
  padding-left: 0;
`;
const Li = styled.li`
  text-decoration: none;
  color: white;
`;

const Navo = styled.div`
  background: black;
  background: #9ffcdf;
`;

function Nav() {
  return (
    <Navo>
      <Ul>
        <Link to="/signuppage">
          <Li>Sign-Up/Login</Li>
        </Link>
        <Link to="../Components/ChefPostPage">
          <Li>Chef Post</Li>
        </Link>
        <Li>Homepage</Li>
      </Ul>
      <Route exact path="/sign-up" component={SignUpPage} />
      <Route exact path="/login" component={SigninPage} />
      <Route exact path="/chefpostpage" component={ChefPostpage} />
      <Ul>

        <Link to="/">
          <Li>Log out</Li>
        </Link>
      </Ul>
    </Navo>
  );
}

export default Nav;I