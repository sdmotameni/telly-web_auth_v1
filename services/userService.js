import http from "./http";

const apiEndpoint = "https://api.gettelly.com/user/";

function getMe() {
  return http.get(apiEndpoint + "me");
}

function updateProfile(data) {
  return http.post(apiEndpoint + "settings", data);
}

function uploadProfilePicture(formData) {
  return http.post(apiEndpoint + "upload", formData, {
    onUploadProgress: (progressEvent) => {
      console.log(
        "Upload progress: ",
        (progressEvent.loaded / progressEvent.total) * 100
      );
    },
  });
}

export default {
  getMe,
  updateProfile,
  uploadProfilePicture,
};
