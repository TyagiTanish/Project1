import axios from "axios";

function guestAuth() {
  const request = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      Authorization: localStorage.getItem("authToken")
        ? `Bearer ${localStorage.getItem("authToken")}`
        : null,
    },
  });

  request.interceptors.request.use((config) => {
    const controller = new AbortController();
    if (!localStorage.getItem("authToken")) {
      // console.log("token..........");
      controller.abort();
    }
    return {
      ...config,
      signal: controller.signal,
    };
  });

  return { request };
}
export default guestAuth;
