import http from "../services/http";

const apiEndpoint = "https://api.gettelly.com/";

http.setJwt(getToken());

function login(email, password) {
  return http.post(apiEndpoint + "login", { email, password });
}

function register(email, password, profileId, name, phone) {
  return http.post(apiEndpoint + "register", {
    email,
    password,
    profileId,
    name,
    phone,
  });
}

function logout() {
  localStorage.removeItem("token");
}

function storeToken(token) {
  localStorage.setItem("token", token);
}

function getToken() {
  return localStorage.getItem("token");
}

export default {
  login,
  register,
  logout,
  storeToken,
};
