import axios from "axios";

function useAuth() {
  const request = axios.create({
    baseURL: "http://192.168.1.114:8000",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
  return { request };
}
export default useAuth;
