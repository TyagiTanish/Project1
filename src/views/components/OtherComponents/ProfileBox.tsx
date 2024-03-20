import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/user/userSlice";
import { FormattedMessage } from "react-intl";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

function ProfileBox() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <>
      <Stack direction={"row"}>
        {" "}
        <Stack
          sx={{
            mt: 5,
            // fontSize: { md: 14, xl: 18 },
            ml: { lg: 20, sm: 4 },
          }}
        >
          <Box
            sx={{ textDecoration: "none", color: "#D4164B", cursor: "pointer" }}
            onClick={() => {
              window?.history.back();
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: { sm: 10, md: 12, xl: 14 } }} />
            <FormattedMessage defaultMessage="Back" />
          </Box>

          <Button
            className="account"
            sx={{
              mt: 2,
              backgroundColor:
                window.location.href ===
                "http://localhost:3000/profile/accountSetting"
                  ? "lightgray"
                  : "white",
              padding: 1,
              // width: 140,
              cursor: "pointer",
              // fontSize: { xl: 14, md: 14, sm: 12 },
              textTransform: "none",
              color: "black",
              justifyContent: "flex-start",
            }}
            onClick={() => {
              navigate("/profile/accountSetting");
            }}
          >
            <FormattedMessage defaultMessage="Account Settings" />
          </Button>

          <Button
            className="account"
            sx={{
              mt: 2,
              backgroundColor:
                window.location.href ===
                "http://localhost:3000/profile/myBookings"
                  ? "lightgray"
                  : "white",
              padding: 1,
              // width: 140,
              cursor: "pointer",
              textTransform: "none",
              color: "black",
              justifyContent: "flex-start",
            }}
            onClick={() => {
              navigate("/profile/myBookings");
            }}
          >
            <FormattedMessage defaultMessage="All Bookings " />
          </Button>
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
            <FormattedMessage defaultMessage="Log Out" />
          </Box>
        </Stack>
        <Stack ml={"10%"} mt={5}>
          <Outlet />
        </Stack>
      </Stack>
    </>
  );
}

export default ProfileBox;
