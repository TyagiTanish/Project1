import React from 'react'
import TabletNavbar from '../../components/TabletNavbar'
import { Box, IconButton, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import AccountMenu from '../Menu'
import Language from '../../components/Language'
import { FormattedMessage } from 'react-intl'
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BusinessIcon from "@mui/icons-material/Business";
import { useSelector } from 'react-redux'


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
          <Stack direction={"row"} spacing={2}>
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
            <Stack
              spacing={3}
              sx={{
                alignItems: "center",
                cursor: "pointer",
              }}
              direction={"row"}
            >
              <CallIcon sx={{ mt: -0.5 }} /> 0124-6201611
            </Stack>

            <AccountMenu />
          </Stack>
        </>
      ) : (
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Language />
          <IconButton
            href="/memberRegister"
            sx={{ fontSize: 15, color: "black", fontWeight: "bold" }}
          >
            <BusinessIcon sx={{ mr: 1 }} />
            <FormattedMessage defaultMessage="List Your Property" />
          </IconButton>
          <Stack direction={"row"}>
            <CallIcon sx={{ mt: -0.5 }} /> 0124-6201611
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <PersonIcon />
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bolder",
              }}
            >
              {" "}
              <FormattedMessage defaultMessage="Login / SignUp" />
            </Link>
          </Stack>
        </Stack>
      )
    }
    </>
)}
export default ProfileIcons
