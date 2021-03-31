import http from "./http";

const apiEndpoint = "https://api.gettelly.com/user/";

function getMe() {
  return http.get(apiEndpoint + "me");
}

function updateProfile(settings) {
  return http.post(apiEndpoint + "settings", settings);
}

export default {
  getMe,
  updateProfile,
};
