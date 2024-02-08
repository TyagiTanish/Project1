import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
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
      <Box
        sx={{
          ml: { sm: 15, md: 25, xl: 72 },
          mt: { md: 10, xl: 15, sm: 9 },
          fontFamily: "Proxima Vara,Arial,Helvetica,Sans,Sans-Serif",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 1.5,
            fontSize: { md: 14, xl: 18 },
          }}
        >
          <Link style={{ textDecoration: "none", color: "#D4164B" }} to="/">
            <ArrowBackIosIcon sx={{ fontSize: { sm: 10, md: 12, xl: 14 } }} />
           <FormattedMessage defaultMessage="Back"/>
          </Link>

          <Typography
            className="account"
            sx={{
              mt: 2,
              backgroundColor: "rgba(243,244,245)",
              padding: 1,
              width: 140,
              cursor: "pointer",
              fontSize: { xl: 14, md: 14, sm: 12 },
            }}
          >
            <FormattedMessage defaultMessage="Account Settings"/>
          </Typography>
          <Box
            sx={{
              mt: 2,
              paddingTop: 2,
              fontSize: { xl: 18, md: 13, sm: 12 },
              borderTop: "1px solid black",
              width: 140,
              cursor: "pointer",
            }}
            onClick={handleLogOut}
          >
             <FormattedMessage defaultMessage="Log Out"/> 
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{ fontSize: { xl: 30, md: 23, sm: 15 }, fontWeight: "bold" }}
          >
          <FormattedMessage defaultMessage="Account Settings"/> 
          </Typography>
          <Typography
            sx={{ width: 300, mt: 2, fontSize: { xl: 18, md: 16, sm: 14 } }}
          >
             <FormattedMessage defaultMessage="Personal Information"/>
          </Typography>

          <Update />

          <Typography sx={{ fontSize: { xl: 18, md: 16, sm: 14 }, mt: 5 }}>
             <FormattedMessage defaultMessage="Change Your Password"/> 
          </Typography>
          <Password />
        </Box>
      </Box>
    </>
  );
}

export default Account;
