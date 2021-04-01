import http from "./http";

const apiEndpoint = "https://api.gettelly.com/user/";

function getMe() {
  return http.get(apiEndpoint + "me");
}

function updateProfile(data) {
  return http.post(apiEndpoint + "settings", data);
}

export default {
  getMe,
  updateProfile,
};
