import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Layout, Form, Icon, Input } from "antd";

const Signup = props => {
  const { Content } = Layout;

  // STATE

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  function Register(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
      e.preventDefault(props);
      const baseURL = "https://pacific-mountain-29202.herokuapp.com/api";
      axios
        .post(`${baseURL}/auth/register`, { username: username, password })
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          props.history.push("/ChefLogin");
        })
        .catch(err => {
          console.log(err);
        });
    };

    return (
      <div className="RegisterForm">
        <form onSubmit={handleSubmit}>
          <p>Register</p>
          <div className="inputregister">
            <input
              value={username}
              name="username"
              type="text"
              onChange={e => setUsername(e.target.value)}
              placeholder="username"
            />
            <input
              value={password}
              name="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <button type="submit" className="SubmitButtonregister">
            Connect!
          </button>
        </form>
      </div>
    );
  }
};
export default Signup;
