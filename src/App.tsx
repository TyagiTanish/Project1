
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
import Account from "./views/components/Account";
import { BrowserRouter } from 'react-router-dom'

function App() {
  const { request } = useAuth();
  const dispatch = useDispatch();

  const getUser = async () => {
    console.log("...............");
    
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
      <BrowserRouter>
      <Account/>
      </BrowserRouter>
      </SnackbarProvider>
      <Outlet/>
    </>
  );
}

export default App;
