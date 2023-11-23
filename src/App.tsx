import "./App.css";
import { Outlet, RouterProvider } from "react-router-dom";
import LoginSystem from "./views/components/LoginSystem";
import { SnackbarProvider } from "notistack";
import useAuth from "./Hooks/useAuth/useAuth";
import { useDispatch } from "react-redux";
import { userLogin } from "./views/components/redux/user/userSlice";
import { useEffect } from "react";
import { Hotel, Router } from "@mui/icons-material";
import Hotels from "./views/components/Hotels";

import Account from "./views/components/Account";
import { BrowserRouter } from "react-router-dom";

import SimpleMap from "./views/components/Map";
import HotelsPage from "./views/components/HotelsPage";
import Billing from "./views/components/Billing";
import Routes from "./views/components/Router/Router";
import Rooms from "./views/components/Rooms";

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

        
      {/* <LoginSystem /> */}
      {/* <Hotels/> */}

      {/* <LoginSystem /> */}
      {/* <BrowserRouter><Billing/></BrowserRouter>       */}

      {/* <SimpleMap/> */}
      <Rooms/>
      </SnackbarProvider>
      <Outlet />
    </>
  );
}

export default App;
