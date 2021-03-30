import http from "./http";

const apiEndpoint = "https://api.gettelly.com/profile/";

function getProfile(id) {
  return http.get(apiEndpoint + id);
}

function updateProfile(id, updatedObj) {
  return null;
}

export default {
  getProfile,
  updateProfile,
};
