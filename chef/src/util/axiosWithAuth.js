import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    "Content-Type": "application/json",

    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;
