import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useForm } from "react-hook-form";
import Password from "./Password";
import Update from "./Update";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "./redux/user/userSlice";
import { FormattedMessage } from "react-intl";
import Logo from "./Logo";
function Account() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    dispatch(userLogout());
    navigate("/");
  };
  return (
    <>
      <Stack
        sx={{
          // ml: { sm: 15, md: 25, xl: 72 },
          ml: { lg: 10 },
          // mt: { md: 10, xl: 15, sm: 9 },
          fontFamily: "Proxima Vara,Arial,Helvetica,Sans,Sans-Serif",
          // display: "flex",
          // flexDirection: "row",
        }}
      >
        <Stack>
          <Typography
            sx={{ fontSize: { xl: 30, md: 23, sm: 15 }, fontWeight: "bold" }}
          >
            <FormattedMessage defaultMessage="Account Settings" />
          </Typography>
          <Typography
            sx={{ width: 300, mt: 2, fontSize: { xl: 18, md: 16, sm: 14 } }}
          >
            <FormattedMessage defaultMessage="Personal Information" />
          </Typography>

          <Update />

          <Typography sx={{ fontSize: { xl: 18, md: 16, sm: 14 }, mt: 5 }}>
            <FormattedMessage defaultMessage="Change Your Password" />
          </Typography>
          <Password />
        </Stack>
      </Stack>
    </>
  );
}

export default Account;
