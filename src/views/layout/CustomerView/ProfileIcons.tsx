import React from "react";
import TabletNavbar from "../../components/TabletNavbar";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AccountMenu from "../../components/ProfileBtn";
import Language from "../../components/Language";
import { FormattedMessage } from "react-intl";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BusinessIcon from "@mui/icons-material/Business";
import { useSelector } from "react-redux";
/**
 *  to show a small icon at the top right corner of Home Page. Markdown is *ProfileIcons*.
 */
const ProfileIcons = () => {
  const user = useSelector((state: any) => state.userReducer.user);
  const [data, updateData] = React.useState<any>(window.innerWidth);
  React.useEffect(() => {
    const setData = () => {
      updateData(window.innerWidth);
      console.log(data);
    };
    window.addEventListener("resize", setData);
  });

  return (
    <>
      {data <= 768 ? (
        <TabletNavbar />
      ) : user ? (
        <>
          <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <Language />
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <BusinessIcon sx={{ fontSize: "30px" }} />
              <Link
                to="/AddHotel"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Add Hotel
              </Link>
            </Stack>
            <Stack>
              <Typography color={"black"} fontWeight={"bolder"}>
                Hello,{user?.name}
              </Typography>
              <Typography color={"gray"} fontSize={"0.9rem"}>
                {user?.role?.toUpperCase()}
              </Typography>
            </Stack>
            <AccountMenu />
          </Stack>
        </>
      ) : (
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Language />
          <IconButton
            href="/memberRegister"
            sx={{
              fontSize: 15,
              color: "black",
              fontWeight: "bold",
              borderRadius: 1,
            }}
          >
            <Tooltip title="List Your Property">
              <BusinessIcon sx={{ mr: 1 }} />
            </Tooltip>

            <FormattedMessage defaultMessage="List Your Property" />
          </IconButton>

          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Tooltip title="Login / SignUp">
              <PersonIcon />
            </Tooltip>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bolder",
              }}
            >
              <FormattedMessage defaultMessage="Login / SignUp" />
            </Link>
          </Stack>
        </Stack>
      )}
    </>
  );
};
export default ProfileIcons;
