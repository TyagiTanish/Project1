import * as React from "react";
import "../../../../../../App.css";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import Logo from "../../../../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Footer from "../../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import HomeBody from "../../../../../pages/HomePage/HomeBody";
import AccountMenu from "../../../../OtherComponents/ProfileBtn";
import AddHotelAftrLgn from "../../../../Register/MemberRegister/AddHotelAftrLgn";
import { useIntl, FormattedMessage } from "react-intl";
import Language from "../../../../Language/Language";

import BusinessIcon from "@mui/icons-material/Business";
import TabletNavbar from "../../../AccountSettings/TabletNavbar";

import { Country, State, City } from "country-state-city";
import { searchDetails } from "../../../../redux/user/userSlice";

const HR: any = City.getCitiesOfState("IN", "HR");
const PB: any = City.getCitiesOfState("IN", "PB");
const HP: any = City.getCitiesOfState("IN", "HP");
const DL: any = City.getCitiesOfState("IN", "DL");
const MH: any = City.getCitiesOfState("IN", "MH");
const MP: any = City.getCitiesOfState("IN", "MP");
const UP: any = City.getCitiesOfState("IN", "UP");
const UT: any = City.getCitiesOfState("IN", "UT");
/**
 * Landing page of the project. Markdown is *http://localhost:3000*.
 */

export default function BasicCard() {
  const dispatch = useDispatch();
  const [data, updateData] = React.useState<any>(window.innerWidth);
  React.useEffect(() => {
    const setData = () => {
      updateData(window.innerWidth);
    };
    window.addEventListener("resize", setData);
  });

  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} width={"98.8%"}>
        {/* <Logo />
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
        )}{" "}*/}
      </Stack>
      {data <= 768 ? (
        false
      ) : (
        <>
          <Box
            sx={{
              // width: { xl: "100%", md: 1026, lg: "100%" },
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
                <Box
                  sx={{
                    color: "gray",
                    marginTop: "10px",
                    fontSize: { md: 15, xl: 16 },
                  }}
                >
                  Haryana
                </Box>
                <KeyboardArrowDownIcon
                  className="xyz"
                  sx={{
                    marginTop: { xl: "9px", md: 1.1 },
                    color: "lightgray",
                    fontSize: { md: 20 },
                  }}
                />
                <Box
                  className="drop"
                  sx={{
                    fontSize: { md: 15, xl: 16 },
                    maxHeight: 200,
                    overflow: "auto",
                  }}
                >
                  <Link style={{ fontWeight: "bold" }} to="/">
                    <FormattedMessage defaultMessage="Popular Locations" />
                  </Link>
                  {/* <Link to="/hotels">Mg Road</Link>
                  <Link to="/hotels">Rajaji nagar</Link> */}
                  {HR?.map((item: any) => (
                    <Link
                      to="/"
                      onClick={(e) => {
                        dispatch(searchDetails(item?.name));
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
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
                  {/* <FormattedMessage defaultMessage="Chennai" /> */}
                  Himachal
                </Box>
                <KeyboardArrowDownIcon
                  className="xyz"
                  sx={{
                    marginTop: { xl: "9px", md: 1.1 },
                    color: "lightgray",
                    fontSize: { md: 20 },
                  }}
                />
                <Box
                  className="drop"
                  sx={{
                    fontSize: { md: 15, xl: 16 },
                    maxHeight: 200,
                    overflow: "auto",
                  }}
                >
                  <Link style={{ fontWeight: "bold" }} to="/">
                    <FormattedMessage defaultMessage="Popular Locations" />
                  </Link>
                  {HP?.map((item: any) => (
                    <Link
                      to="/"
                      onClick={() => dispatch(searchDetails(item?.name))}
                    >
                      {item.name}
                    </Link>
                  ))}
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
                  Punjab
                </Box>
                <KeyboardArrowDownIcon
                  className="xyz"
                  sx={{
                    marginTop: { xl: "9px", md: 1.1 },
                    color: "lightgray",
                    fontSize: { md: 20 },
                  }}
                />
                <Box
                  className="drop"
                  sx={{
                    fontSize: { md: 15, xl: 16 },
                    maxHeight: 200,
                    overflow: "auto",
                  }}
                >
                  <Link style={{ fontWeight: "bold" }} to="/">
                    <FormattedMessage defaultMessage="Popular Locations" />
                  </Link>
                  {PB?.map((item: any) => (
                    <Link
                      to="/"
                      onClick={() => dispatch(searchDetails(item?.name))}
                    >
                      {item.name}
                    </Link>
                  ))}
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
                  Uttar Pradesh
                </Box>
                <KeyboardArrowDownIcon
                  className="xyz"
                  sx={{
                    marginTop: { xl: "9px", md: 1.1 },
                    color: "lightgray",
                    fontSize: { md: 20 },
                  }}
                />
                <Box
                  className="drop"
                  sx={{
                    fontSize: { md: 15, xl: 16 },
                    maxHeight: 200,
                    overflow: "auto",
                  }}
                >
                  <Link style={{ fontWeight: "bold" }} to="/">
                    <FormattedMessage defaultMessage="Popular Locations" />
                  </Link>
                  {UP?.map((item: any) => (
                    <Link
                      to={"/"}
                      onClick={() => dispatch(searchDetails(item?.name))}
                    >
                      {item.name}
                    </Link>
                  ))}
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
                  {/* <FormattedMessage defaultMessage=" Kolkata" /> */}
                  Maharastra
                </Box>
                <KeyboardArrowDownIcon
                  className="xyz"
                  sx={{
                    marginTop: { xl: "9px", md: 1.1 },
                    color: "lightgray",
                    fontSize: { md: 20 },
                  }}
                />
                <Box
                  className="drop"
                  sx={{
                    fontSize: { md: 15, xl: 16 },
                    maxHeight: 200,
                    overflow: "auto",
                  }}
                >
                  <Link style={{ fontWeight: "bold" }} to="/">
                    <FormattedMessage defaultMessage="Popular Locations" />
                  </Link>
                  {MH?.map((item: any) => (
                    <Link
                      to={"/"}
                      onClick={() => dispatch(searchDetails(item?.name))}
                    >
                      {item.name}
                    </Link>
                  ))}
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
                  Delhi
                </Box>
                <KeyboardArrowDownIcon
                  className="xyz"
                  sx={{
                    marginTop: { xl: "9px", md: 1.1 },
                    color: "lightgray",
                    fontSize: { md: 20 },
                  }}
                />
                <Box
                  className="drop"
                  sx={{
                    fontSize: { md: 15, xl: 16 },
                    maxHeight: 200,
                    overflow: "auto",
                  }}
                >
                  <Link style={{ fontWeight: "bold" }} to="/">
                    <FormattedMessage defaultMessage="Popular Locations" />
                  </Link>
                  {DL?.map((item: any) => (
                    <Link
                      to={"/"}
                      onClick={() => dispatch(searchDetails(item?.name))}
                    >
                      {item.name}
                    </Link>
                  ))}
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
                  Madhya Pradesh
                </Box>
                <KeyboardArrowDownIcon
                  className="xyz"
                  sx={{
                    marginTop: { xl: "9px", md: 1.1 },
                    color: "lightgray",
                    fontSize: { md: 20 },
                  }}
                />
                <Box
                  className="drop"
                  sx={{
                    fontSize: { md: 15, xl: 16 },
                    maxHeight: 200,
                    overflow: "auto",
                    ml: { sm: "-2%", lg: 0 },
                  }}
                >
                  <Link style={{ fontWeight: "bold" }} to="/">
                    <FormattedMessage defaultMessage="Popular Locations" />
                  </Link>
                  {MP?.map((item: any) => (
                    <Link
                      to="/"
                      onClick={() => dispatch(searchDetails(item?.name))}
                    >
                      {item.name}
                    </Link>
                  ))}
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
                  Uttarakhand
                </Box>
                <KeyboardArrowDownIcon
                  className="xyz"
                  sx={{
                    marginTop: { xl: "9px", md: 1.1 },
                    color: "lightgray",
                    fontSize: { md: 20 },
                  }}
                />
                <Box
                  className="drop"
                  sx={{
                    fontSize: { md: 15, xl: 16 },
                    maxHeight: 200,
                    overflow: "auto",
                    ml: { sm: "-12%", lg: 0 },
                  }}
                >
                  <Link style={{ fontWeight: "bold" }} to="/">
                    <FormattedMessage defaultMessage="Popular Locations" />
                  </Link>
                  {UT?.map((item: any) => (
                    <Link
                      to="/"
                      onClick={() => dispatch(searchDetails(item?.name))}
                    >
                      {item.name}
                    </Link>
                  ))}
                </Box>
              </Box>
              <Box>
                {" "}
                <FormattedMessage defaultMessage="All Cities" />
              </Box>
            </Box>
          </Box>
        </>
      )}
      <SearchBar />
      <HomeBody />
      <Footer />
    </>
  );
}
