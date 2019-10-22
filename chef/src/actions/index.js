import axios from "axios";
import axiosWithAuth from "../util/axiosWithAuth";

// EXPORTS

export const LOGIN_START = "LOGIN_START";
export const SIGNUP_START = "SIGNUP_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// LOGIN ACTION '.POST'

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axiosWithAuth()
    .post("https://lambda-chef-portfolio.herokuapp.com/api/auth/login", creds) //  <- ADD PATH
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    });
};

// SIGNUP ACTION '.POST'

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axiosWithAuth()
    .post(
      "https://lambda-chef-portfolio.herokuapp.com/api/auth/register",
      creds
    ) //  <- ADD PATH
    .then(res => {
      return axiosWithAuth()
        .post(
          "https://lambda-chef-portfolio.herokuapp.com/api/auth/login",
          creds
        ) //  <- ADD PATH
        .then(res => {
          localStorage.setItem("token", res.data.token);
          dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        });
    });
};

// Create Post

export const ADD_ARTICLE_START = "ADD_ARTICLE_START";
export const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS";
export const ADD_ARTICLE_FAILURE = "ADD_ARTICLE_FAILURE";

export const createPost = post => dispatch => {
  dispatch({ type: ADD_POST_START });
  axiosWithAuth()
    .post(
      "https://lambda-chef-portfolio.herokuapp.com/api/posts/create",
      post,
      {
        // <- ADD PATH
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      dispatch({ type: ADD_ARTICLE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

// DELETE Post

export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const deletePost = post => dispatch => {
  dispatch({ type: DELETE_START });
  axiosWithAuth()
    .delete(
      `https://lambda-chef-portfolio.herokuapp.com/api/posts/delete/:id${post.postId}`,
      {
        // <- ADD PATH
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      window.location.reload();
    })

    .catch(err => {
      dispatch({ type: DELETE_FAILURE, payload: err.response });
    });
};

export const UPDATE_START = "UPDATE_START";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const updatePost = post => dispatch => {
  dispatch({ type: UPDATE_START });
  axiosWithAuth()
    .put(
      `https://lambda-chef-portfolio.herokuapp.com/api/posts/update/id${post.postId}`,
      {
        // <- ADD PATH
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      window.location.reload();
    })

    .catch(err => {
      dispatch({ type: UPDATE_FAILURE, payload: err.response });
    });
};
// GET ALL

export const GET_ALLDATA_START = "GET_ALLDATA_START";
export const GET_ALLDATA_SUCCESS = "GET_ALLDATA_SUCCESS";
export const GET_ALLDATA_FAILURE = "GET_ALLDATA_FAILURE";

export const getAllData = id => dispatch => {
  dispatch({ type: GET_ALLDATA_START });
  axiosWithAuth()
    .get("https://lambda-chef-portfolio.herokuapp.com/api/posts", {
      posts: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_ALLDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_ALLDATA_FAILURE, payload: err.response });
    });
};

// GET BY ID

export const GET_IDDATA_START = "GET_IDDATA_START";
export const GET_IDDATA_SUCCESS = "GET_IDDATA_SUCCESS";
export const GET_IDDATA_FAILURE = "GET_IDDATA_FAILURE";

export const getIdData = id => dispatch => {
  dispatch({ type: GET_IDDATA_START });
  axiosWithAuth()
    .post("https://lambda-chef-portfolio.herokuapp.com/api/posts/create", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: GET_IDDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_IDDATA_FAILURE, payload: err.response });
    });
};

// GET BY USERNAME

export const GET_USERDATA_START = "GET_USERDATA_START";
export const GET_USERDATA_SUCCESS = "GET_USERDATA_SUCCESS";
export const GET_USERDATA_FAILURE = "GET_USERDATA_FAILURE";

export const getUserData = id => dispatch => {
  dispatch({ type: GET_USERDATA_START });
  axiosWithAuth()
    .get(
      "https://lambda-chef-portfolio.herokuapp.com/api/posts/:username{username}",
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      dispatch({ type: GET_USERDATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_USERDATA_FAILURE, payload: err.response });
    });
};

// Logout

export const logout = () => dispatch => {
  dispatch();
  localStorage.clear();
  dispatch();
};
