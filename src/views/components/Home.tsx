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
import {useIntl, FormattedMessage} from 'react-intl'
import Language from "./Language";

import BusinessIcon from '@mui/icons-material/Business';
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
          <>
          <Stack
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
                
              display:"flex"
              }}
            >
              {/* <Button sx={{ border: "1px solid lightgray", borderRadius: 5 }}>
              Add Hotel
            </Button> */}
             <BusinessIcon sx={{fontSize:"30px",mt:2}}/>
              <Link
                to="/AddHotel"
                style={{
                  textDecoration: "none",
                  color: "black",
      
                
                }}
              >
                {" "}
               
                <Box sx={{mt:3.25,ml:1}}> 
                Add Hotel
                </Box>
              </Link>
            </Box>
            </Stack>
             <Box
             sx={{
             
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               cursor: "pointer",
               // mt:0.8,
               // ml:-10,
               // mr:-19,
              
               
             }}
           >
             <CallIcon sx={{mt:-0.5}}/> 0124-6201611
           </Box>
   
            <Box
             sx={{
               height: "100%",
             paddingLeft:2,
             paddingRight:2,
               position: "relative",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               cursor: "pointer",
               // width: "1%",
               borderLeft:"1px solid lightgray "
             }}
           >
             <AccountMenu />
           </Box></>
          
        ) : (
            <>
            <Language/>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            mt: 0.3,
            borderRight:'1px solid lightgrey',
            borderLeft:'1px solid lightgrey',
            ml:-25,
            mr:2,
         
          }}
        >
          <IconButton href="/memberRegister" sx={{fontSize:15,   color:"black", fontWeight:"bold"}} ><BusinessIcon sx={{mr:1}}/><FormattedMessage defaultMessage="List Your Property"   /></IconButton>
        </Box>
                 <Box
                 sx={{
                   position: "relative",
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   cursor: "pointer",
                   mt:1,
                   ml:-10,
                   borderRight: "1px solid lightgrey",
                   padding:2 ,
                 }}
               >
                 <CallIcon sx={{mt:-0.5}}/> 0124-6201611
               </Box>
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
                   ml:-7
                 }}
               >
                 {" "}
                 <PersonIcon sx={{ margin: 1 ,marginTop:1.5}} />
                 <Link
                   to="/login"
                   style={{
                     textDecoration: "none",
                     color: "black",
                     fontWeight: "bolder",
                     marginTop:8
                   }}
                 >
                   {" "}
                  <FormattedMessage defaultMessage="Login / SignUp" />
                 </Link>
               </Box>
               </>
        )}
          {" "}

  
       
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
              <FormattedMessage defaultMessage="Popular Locations"/>
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
