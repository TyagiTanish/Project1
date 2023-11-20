
import "./App.css";
import { Outlet } from "react-router-dom";
import LoginSystem from "./views/components/LoginSystem";
import { SnackbarProvider } from "notistack";
import useAuth from "./Hooks/useAuth/useAuth";
import {useDispatch} from 'react-redux'
import { userLogin } from "./views/components/redux/user/userSlice";
import { useEffect } from "react";
import { Hotel } from "@mui/icons-material";
import Hotels from "./views/components/Hotels";


function App() {
  const { request } = useAuth();
  const dispatch = useDispatch();

  const getUser = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      const userData = (await request.get(`/getUserData`)).data;
      dispatch(userLogin(userData));
    } catch (error) {
      localStorage.removeItem("authToken");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      getUser();
    }
  });


  return (
    <>
    <SnackbarProvider>
      <LoginSystem />
      {/* <Hotels/> */}
      </SnackbarProvider>
      <Outlet/>
    </>
  );
}

export default App;
