import http from "./http";

const apiEndpoint = "http://localhost:3001/profile/";

function getProfile(id) {
  return http.get(apiEndpoint + id);
}

export default {
  getProfile,
};
