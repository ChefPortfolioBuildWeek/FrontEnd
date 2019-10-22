import React from "react";
import { NavLink, Route, Link } from "react-router-dom";
import { PageHeader } from "antd";

const NavBar = () => {
  return (
    <div
      style={{ width: "30%", display: "flex", justifyContent: "space-between" }}
    >
      <Route>
        <NavLink to="/register" className="NavBtn">
          {" "}
          Signup{" "}
        </NavLink>
        <NavLink to="/login" className="NavBtn">
          {" "}
          Login{" "}
        </NavLink>
        <NavLink to="/homepage" className="NavBtn">
          {" "}
          chefposts{" "}
        </NavLink>
        <NavLink to="/chefpostpage" className="NavBtn">
          {" "}
          ChefProfile{" "}
          <NavLink>
            <Link to="/chefposts">Chef Portfolio</Link>
          </NavLink>
        </NavLink>
      </Route>
    </div>
  );
};

export default NavBar;
