import * as React from "react";
import "../../App.css";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import HomeBody from "./HomeBody";
import AccountMenu from "./ProfileBtn";
import AddHotelAftrLgn from "./AddHotelAftrLgn";
import { useIntl, FormattedMessage } from "react-intl";
import Language from "./Language";

import BusinessIcon from "@mui/icons-material/Business";
import TabletNavbar from "./TabletNavbar";
export default function BasicCard() {
  const user = useSelector((state: any) => state.userReducer.user);

  const [data,updateData]=React.useState<any>(window.innerWidth);
  React.useEffect(()=>{
    const setData=()=>{
      updateData(window.innerWidth);
      console.log(data);
    }
      window.addEventListener('resize',setData);
  })
  return (
    <>

      <Stack direction={"row"} justifyContent={"space-between"} width={"98.8%"}>
        <Logo />
        {data<=768 ?  <TabletNavbar/>: 
        (user ? (
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
              {" "}
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
       ) )}{" "}
      </Stack>
      {data<=768 ? false : 
      <>
      <Box
        sx={{
          width: { xl: "100%", md: 1026 },
          height: "42px",
          alignItems: "center",
          backgroundColor: "#f3f5f7",
          boxSizing: "border-box",
          marginTop: 0,
          padding: "2px 60px 0",
        }}
      >
        <Box className="headerMDD__mddListWrapper">
          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
          >
            {" "}
            <Box
              sx={{
                color: "gray",
                marginTop: "10px",
                fontSize: { md: 15, xl: 16 },
              }}
            >
              Banglore
            </Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{
                marginTop: { xl: "9px", md: 1.1 },
                color: "lightgray",
                fontSize: { md: 20 },
              }}
            />
            <Box className="drop" sx={{ fontSize: { md: 15, xl: 16 } }}>
              <Link style={{ fontWeight: "bold" }} to="/">
                <FormattedMessage defaultMessage="Popular Locations" />
              </Link>
              <Link to="/hotels">Mg Road</Link>
              <Link to="/hotels">Rajaji nagar</Link>
            </Box>
          </Box>

          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
          >
            <Box
              sx={{
                color: "gray",
                marginTop: "10px",
                fontSize: { md: 15, xl: 16 },
              }}
            >
             <FormattedMessage defaultMessage="Chennai" /> 
            </Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{
                marginTop: { xl: "9px", md: 1.1 },
                color: "lightgray",
                fontSize: { md: 20 },
              }}
            />
            <Box className="drop" sx={{ fontSize: { md: 15, xl: 16 } }}>
              <Link style={{ fontWeight: "bold" }} to="/">
                <FormattedMessage defaultMessage="Popular Locations" />
              </Link>
              <Link to="/hotels">Mg Road</Link>
              <Link to="/hotels">Rajaji nagar</Link>
            </Box>
          </Box>

          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
          >
            <Box
              sx={{
                color: "gray",
                marginTop: "10px",
                fontSize: { md: 15, xl: 16 },
              }}
            >
              Gurgaon
            </Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{
                marginTop: { xl: "9px", md: 1.1 },
                color: "lightgray",
                fontSize: { md: 20 },
              }}
            />
            <Box className="drop" sx={{ fontSize: { md: 15, xl: 16 } }}>
              <Link style={{ fontWeight: "bold" }} to="/">
                <FormattedMessage defaultMessage="Popular Locations" />
              </Link>
              <Link to="/hotels">Mg Road</Link>
              <Link to="/hotels">Rajaji nagar</Link>
            </Box>
          </Box>

          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
          >
            <Box
              sx={{
                color: "gray",
                marginTop: "10px",
                fontSize: { md: 15, xl: 16 },
              }}
            >
              Hyderabad
            </Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{
                marginTop: { xl: "9px", md: 1.1 },
                color: "lightgray",
                fontSize: { md: 20 },
              }}
            />
            <Box className="drop" sx={{ fontSize: { md: 15, xl: 16 } }}>
              <Link style={{ fontWeight: "bold" }} to="/hotels">
                <FormattedMessage defaultMessage="Popular Locations" />
              </Link>
              <Link to="/hotels">Mg Road</Link>
              <Link to="/hotels">Rajaji nagar</Link>
            </Box>
          </Box>

          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
          >
            <Box
              sx={{
                color: "gray",
                marginTop: "10px",
                fontSize: { md: 15, xl: 16 },
              }}
            >
               <FormattedMessage defaultMessage=" Kolkata" />
            </Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{
                marginTop: { xl: "9px", md: 1.1 },
                color: "lightgray",
                fontSize: { md: 20 },
              }}
            />
            <Box className="drop" sx={{ fontSize: { md: 15, xl: 16 } }}>
              <Link style={{ fontWeight: "bold" }} to="/hotels">
                <FormattedMessage defaultMessage="Popular Locations" />
              </Link>
              <Link to="/hotels">Mg Road</Link>
              <Link to="/hotels">Rajaji nagar</Link>
            </Box>
          </Box>
          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
          >
            <Box
              sx={{
                color: "gray",
                marginTop: "10px",
                fontSize: { md: 15, xl: 16 },
              }}
            >
              Mumbai
            </Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{
                marginTop: { xl: "9px", md: 1.1 },
                color: "lightgray",
                fontSize: { md: 20 },
              }}
            />
            <Box className="drop" sx={{ fontSize: { md: 15, xl: 16 } }}>
              <Link style={{ fontWeight: "bold" }} to="/hotels">
                <FormattedMessage defaultMessage="Popular Locations" />
              </Link>
              <Link to="/hotels">Mg Road</Link>
              <Link to="/hotels">Rajaji nagar</Link>
            </Box>
          </Box>

          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
          >
            <Box
              sx={{
                color: "gray",
                marginTop: "10px",
                fontSize: { md: 15, xl: 16 },
              }}
            >
              Noida
            </Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{
                marginTop: { xl: "9px", md: 1.1 },
                color: "lightgray",
                fontSize: { md: 20 },
              }}
            />
            <Box className="drop" sx={{ fontSize: { md: 15, xl: 16 },ml:{sm:'-2%',lg:0} }}>
              <Link style={{ fontWeight: "bold" }} to="/hotels">
                Popular Locations
              </Link>
              <Link to="/hotels">Mg Road</Link>
              <Link to="/hotels">Rajaji nagar</Link>
            </Box>
          </Box>

          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
          >
            <Box
              sx={{
                color: "gray",
                marginTop: "10px",
                fontSize: { md: 15, xl: 16 },
                
              }}
            >
              Pune
            </Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{
                marginTop: { xl: "9px", md: 1.1 },
                color: "lightgray",
                fontSize: { md: 20 },
              }}
            />
            <Box className="drop" sx={{ fontSize: { md: 15, xl: 16 },ml:{sm:'-12%',lg:0} }}>
              <Link style={{ fontWeight: "bold" }} to="/hotels">
                Popular Locations
              </Link>
              <Link to="/">Mg Road</Link>
              <Link to="/">Rajaji nagar</Link>
            </Box>
          </Box>
          <Box>All Cities</Box>
        </Box>
      </Box>
    </>}
      <SearchBar />
      <HomeBody />
      <Footer />
    </>
  );
}
