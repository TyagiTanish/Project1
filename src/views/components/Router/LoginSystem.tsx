import React, { useEffect } from "react";
import Routes from "./Router";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/user/userSlice";

function LoginSystem() {
  return (
    <>
      <Routes />
    </>
  );
}

export default LoginSystem;
