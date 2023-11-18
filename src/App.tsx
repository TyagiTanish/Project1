import React from "react";
import "./App.css";

import SignUpComp from "./views/components/Loginn";
import Footer from "./views/components/Footer";

// import OtpVerification from "./views/components/OtpVerification";

// import OtpVerification from "./views/components/OtpVerification";

// import OtpVerification from "./views/components/OtpVerification";
// import MainPage from "./views/pages/MainPage";

import Home from "./views/components/Home";
import MainPage from "./views/pages/MainPage";
import SearchBar from "./views/components/SearchBar";
import { Outlet } from "react-router-dom";
import LoginSystem from "./views/components/LoginSystem";
import { SnackbarProvider } from "notistack";
function App() {
  // return <OtpVerification />
  // return <MainPage />;
  return (
    <>
    <SnackbarProvider>
      <LoginSystem />
      </SnackbarProvider>
      <Outlet/>
    </>
  );
}

export default App;
