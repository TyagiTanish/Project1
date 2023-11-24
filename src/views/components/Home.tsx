import * as React from "react";
import "../../App.css";
import Typography from "@mui/material/Typography";
import { Box, Button, Menu, MenuItem } from "@mui/material";
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

export default function BasicCard() {
  const user = useSelector((state: any) => state.userReducer.user);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid lightgray",
          marginTop: 0,
          flexDirection: "row",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          width: "100%",
          height: "70px",
        }}
      >
        <Typography
          sx={{
            alignSelf: "center",
            mt: 1,
            ml: 10,
            fontWeight: "bolder",
            mr: 160,
          }}
        >
          <Logo />
        </Typography>
        {user ? (
          <Box
            sx={{
              borderRight: "1px solid lightgray",
              height: "100%",
              borderLeft: "1px solid lightgray",
              paddingLeft: 2,
              paddingRight: 2,
              ml: -3,
            }}
          >
            <Box
              sx={{
                // position: "relative",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // cursor: "pointer",
                mt: 3,
              }}
            >
              {/* <Button sx={{ border: "1px solid lightgray", borderRadius: 5 }}>
              Add Hotel
            </Button> */}
              <Link
                to="/AddHotel"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                Add Hotel
              </Link>
            </Box>
          </Box>
        ) : null}
        <Box
          sx={{
            borderRight: "1px solid lightgray",
            height: "100%",
            borderLeft: "1px solid lightgray",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          {" "}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              mt: 3,
            }}
          >
            <CallIcon /> 0124-6201611
          </Box>
        </Box>
        {user ? (
          <Box
            sx={{
              height: "100%",
              mr: 5,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              width: "1%",
            }}
          >
            <AccountMenu />
          </Box>
        ) : (
          <Box
            sx={{
              height: "100%",
              mr: 3,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              minWidth: "100px",
            }}
          >
            {" "}
            <PersonIcon sx={{ margin: 1 }} />
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bolder",
              }}
            >
              {" "}
              Login / SignUp
            </Link>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: "100%",
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
            <Box sx={{ color: "gray", marginTop: "10px" }}>Banglore</Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
            <Box className="drop">
              <Link style={{ fontWeight: "bold" }} to="/">
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
            <Box sx={{ color: "gray", marginTop: "10px" }}>Chennai</Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
            <Box className="drop">
              <Link style={{ fontWeight: "bold" }} to="/">
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
            <Box sx={{ color: "gray", marginTop: "10px" }}>Gurgaon</Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
            <Box className="drop">
              <Link style={{ fontWeight: "bold" }} to="/">
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
            <Box sx={{ color: "gray", marginTop: "10px" }}>Hyderabad</Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
            <Box className="drop">
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
            <Box sx={{ color: "gray", marginTop: "10px" }}>Kolkata</Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
            <Box className="drop">
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
            <Box sx={{ color: "gray", marginTop: "10px" }}>Mumbai</Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
            <Box className="drop">
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
            <Box sx={{ color: "gray", marginTop: "10px" }}>Noida</Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
            <Box className="drop">
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
            <Box sx={{ color: "gray", marginTop: "10px" }}>Pune</Box>
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
            <Box className="drop">
              <Link style={{ fontWeight: "bold" }} to="/hotels">
                Popular Locations
              </Link>
              <Link to="/">Mg Road</Link>
              <Link to="/">Rajaji nagar</Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <SearchBar />
      <HomeBody />
      <Footer />
    </>
  );
}
