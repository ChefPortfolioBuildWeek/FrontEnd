import axios from "axios";

export const axiosWithAuth = () => {
const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
@ -11,3 +11,5 @@ export const axiosWithAuth = () => {
    }
  });
};

export default axiosWithAuth;