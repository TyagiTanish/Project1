import axios from "axios";

function useAuth() {
  const request = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
  return { request };
}
export default useAuth;
