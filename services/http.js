import axios from "axios";
import logger from "./logger";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log("Unexpected error logged.");
    return Promise.reject(error.response.data);
  }

  return Promise.reject(error.response.data);
});

function setJwt(token) {
  axios.defaults.headers.common["x-auth-token"] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
