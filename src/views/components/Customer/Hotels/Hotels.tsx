import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// import "mapbox-gl/dist/mapbox-gl.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Seachbar2 from "../Header/Navbar/SearchBar/Seachbar2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HotelDetails from "./HotelDetails";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "../Footer/Footer";
import HomeBody from "../../../pages/HomePage/HomeBody";
import Logo from "../../Logo/Logo";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SimpleMap from "../Map/Map";
import OverViewHotel from "./OverViewHotel";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { triggerAsyncId } from "async_hooks";
import { useDispatch, useSelector } from "react-redux";
import { hotelId } from "../../redux/user/userSlice";
import { boolean } from "yup";
import { FormattedMessage } from "react-intl";
import TuneIcon from "@mui/icons-material/TuneRounded";
import ToggleDrawerFilter from "../../Filters/ToggleDrawerFilter";
import BoltIcon from "@mui/icons-material/Bolt";
import TvIcon from "@mui/icons-material/Tv";
import { IconParkingCircle } from '@tabler/icons-react';
import { IconWifi } from '@tabler/icons-react';
import { IconSwimming } from '@tabler/icons-react';
import { IconHotelService } from '@tabler/icons-react';
import { IconBarbell } from '@tabler/icons-react';
import { IconWashMachine } from '@tabler/icons-react';
import { IconGlassGin } from '@tabler/icons-react';
import { IconUsersGroup } from '@tabler/icons-react';
function Hotels({ filteredData, screenSize }: any) {
  const amenitie = [
    { id: "parking", label: "Parking", icon: <IconParkingCircle stroke={2} />, index: 0 },
    { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: 1 },
    { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: 2 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <IconHotelService stroke={2} />,
      index: 3,
    },
    { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: 4 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <IconWashMachine stroke={2} />,
      index: 5,
    },
    { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: 6 },
    { id: "meeting", label: "Meeting", icon: <IconUsersGroup stroke={2} />, index: "7" },
    { id: "parking", label: "Parking", icon: <IconParkingCircle stroke={2} />, index: 8 },
    { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: 9 },
    { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: 10 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <IconHotelService stroke={2} />,
      index: 11,
    },
    { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: 12 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <IconWashMachine stroke={2} />,
      index: 13,
    },
    { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: 14 },
    { id: "meeting", label: "Meeting", icon: <IconUsersGroup stroke={2} />, index: 15 },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [detailIndex, setDetailIndex] = useState<any>("");
  const [openModule, setOpenModule] = useState<any>("info");
  const [displayMap, SetDisplayMap] = useState(true);
  const [display, setDisplay] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [toggle, setToggle] = useState<any>(false);
  const handleClick = useCallback(
    (index: any) => {
      setDetailIndex(index);
      if (index === detailIndex) {
        setDetailIndex("");
      }
    },
    [detailIndex]
  );
  const lang = useSelector((state: any) => state?.userReducer?.locale);
  const setRedux = (id: any) => {
    dispatch(hotelId(id));
  };
  return (
    <>
      <Box
        sx={{
          height: "90vh",
          overflowY: "scroll",
          width: { sm: "98%", md: "100%", lg: "55%" },
        }}
      >
        {screenSize <= 1024 ? (
          <Box>
            {display ? (
              <>
                <Stack
                  direction={"row"}
                  // spacing={45}
                  justifyContent={"space-between"}
                  mt={5}
                  ml={3}
                  width={"100%"}
                >
                  <Button
                    variant="outlined"
                    onClick={() => setOpen(true)}
                    sx={{ height: "30px" }}
                  >
                    <TuneIcon sx={{ mr: 1 }} />
                    <FormattedMessage defaultMessage="Filters" />
                  </Button>
                  <Box>
                    <img
                      src={require("../../../../assets/map.jpg")}
                      width={"200px"}
                      height={"70px"}
                      style={{
                        marginTop: -20,
                        borderRadius: "10px",
                        // marginLeft: "68%",
                        border: "1px solid lightgray",
                      }}
                      alt="This is img"
                    ></img>
                    <IconButton
                      onClick={() => {
                        SetDisplayMap(false);
                        setDisplay(false);
                      }}
                      sx={{
                        position: "sticky  ",
                        m: "-60px 0 0 -50%",
                        border: "1px solid",
                        borderRadius: "10px",
                        // width: "9%",
                        width: 80,
                        fontSize: "10px",
                        bgcolor: "white",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      {" "}
                      <LocationOnIcon fontSize="small" />{" "}
                      <FormattedMessage defaultMessage="ViewMap" />
                    </IconButton>
                  </Box>
                </Stack>
              </>
            ) : (
              <></>
            )}
          </Box>
        ) : (
          <></>
        )}
        {displayMap ? (
          <>
            {filteredData?.map((item: any, i: any) => {
              const ShowAmenities = amenitie.filter((v, i) =>
                item.amenities.includes(String(i))
              );
              return (
                <>
                  <Stack
                    id={item?._id}
                    direction={"row"}
                    sx={{
                      p: 2,
                      m: 2,
                      justifyContent: "space-between",
                      direction: "row",
                      border: "1px solid lightgrey",
                      borderRadius: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      sx={{
                        width: { sm: "180px ", lg: "200px", md: "200px" },
                        height: { lg: "200px", sm: "25vh", md: "200px" },
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                      alt="The house from the offer."
                      // src={require(`./${item.photo}`)}
                      src={`http://localhost:8000/${item?.photo}`}
                    />
                    <Stack m={2} width={400} spacing={2}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          opacity: 0.8,
                          fontSize: "25px",
                        }}
                      >
                        {item.hotelName}
                      </Typography>
                      {/* <Stack direction={"row"}  color={'grey'} spacing={1}>
                    <WifiIcon fontSize="small" />
                      <Typography fontSize={"small"}> Free Wifi</Typography>
                      <BoltIcon fontSize="small"/>
                      <Typography fontSize={"small"}> Power backup</Typography>
                      <TvIcon fontSize="small"/>
                      <Typography fontSize={"small"}> TV</Typography>
                      <CheckCircleOutlineOutlinedIcon fontSize="small"/>
                      <Typography fontSize={"small"}> Geyser</Typography>
                    </Stack> */}

                      <Stack sx={{ fontSize: "10px", ml: 5 }} direction={"row"}>
                        {ShowAmenities.map((amenitie, i) => {
                          if (i < 3) {
                            return (
                              // <Stack
                              //   direction={"row"}
                              // >
                              <Stack
                                direction={"row"}
                                spacing={0.5}
                                color={"grey"}
                                alignItems={"center"}
                                ml={i === 0 ? 1 : 2}
                              >
                                <>
                                  <Typography fontSize={"small"}>
                                    {amenitie.icon}
                                  </Typography>
                                  <Typography fontSize={"small"}>
                                    {amenitie.label}
                                  </Typography>
                                </>
                              </Stack>
                              // </Stack>
                            );
                          } else {
                            return;
                          }
                        })}
                      </Stack>

                      <Typography fontSize={"medium"} color={"grey"}>
                        {item?.city}-{item?.pinCode}, {item?.state}
                      </Typography>
                      <Stack
                        direction={"row"}
                        sx={{ alignItems: "center" }}
                        gap={2}
                      >
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: { sm: "12px", lg: "18px", md: "14px" },
                            opacity: 0.5,
                          }}
                        >
                          <FormattedMessage defaultMessage="Hotel" />
                        </Typography>
                        <Button
                          sx={{
                            color: "grey",
                            fontSize: { sm: 8, lg: 10, md: 10 },
                          }}
                          onClick={() => {
                            handleClick(i);
                          }}
                        >
                          <FormattedMessage defaultMessage=" View More" />
                          <ExpandMoreIcon sx={{ fontSize: { sm: "20px" } }} />
                        </Button>
                      </Stack>
                    </Stack>
                    <Stack
                      direction={"row"}
                      spacing={2}
                      sx={{
                        border: "1px solid lightgray",
                        height: "85px",
                        borderRadius: "20px",
                        padding: { sm: 1, lg: 2, md: 1 },
                        marginTop: { sm: "8px" },
                      }}
                    >
                      <Stack spacing={2}>
                        <Stack
                          direction={"row"}
                          sx={{
                            color: "#D4164B",
                            fontWeight: "bold",
                          }}
                        >
                          <DoneIcon
                            sx={{
                              fontSize: { sm: "12px", lg: "15px", md: "14px" },
                              fontWeight: "bold",
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: { sm: "10px", lg: "12px", md: "10px" },
                              fontWeight: "bold",
                            }}
                          >
                            <FormattedMessage defaultMessage=" View More" />
                          </Typography>
                        </Stack>
                        {lang === "en" ? (
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: { sm: "15px", lg: "18px", md: "15px" },
                              opacity: 0.7,
                            }}
                          >
                            ₹
                            {item?.rooms[0]?.price
                              ? item?.rooms[0]?.price
                              : Math.floor(Math.random() * 10000)}
                          </Typography>
                        ) : (
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              fontSize: { sm: "15px", lg: "18px", md: "15px" },
                              opacity: 0.7,
                            }}
                          >
                            €
                            {item?.rooms[0]?.price
                              ? (item?.rooms[0]?.price / 90).toFixed(1)
                              : Math.floor(Math.random() * 10000)}
                          </Typography>
                        )}
                      </Stack>
                      <Stack spacing={1}>
                        <Chip
                          label={
                            <FormattedMessage defaultMessage="Our Lowest Price" />
                          }
                          variant="outlined"
                          color="error"
                          sx={{
                            width: { sm: 150, lg: 150, md: 120 },
                            float: "right",
                          }}
                        />
                        <Button
                          variant="contained"
                          onClick={() => {
                            setRedux(item._id);
                            navigate(`/viewDeal/${item._id}`);
                          }}
                          endIcon={<KeyboardArrowRightIcon />}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#D4164B",
                            },
                            backgroundColor: "#D4164B",
                            width: { sm: 150, lg: 150, md: 120 },
                            fontSize: { md: 12, lg: 14 },
                            height: { md: 30 },
                            textTransform: "none",
                          }}
                        >
                          <FormattedMessage defaultMessage=" View Deal" />
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                  {detailIndex === i ? (
                    <HotelDetails
                      i={i}
                      item={item}
                      handleClick={handleClick}
                      openModule={openModule}
                      setOpenModule={setOpenModule}
                    />
                  ) : null}
                </>
              );
            })}
          </>
        ) : (
          <>
            <IconButton
              sx={{ marginLeft: "95%", marginTop: "0%" }}
              onClick={() => {
                setDisplay(true);
                SetDisplayMap(true);
              }}
            >
              <HighlightOffIcon />
            </IconButton>
            <SimpleMap setToggle={setToggle} filteredData={filteredData} />
          </>
        )}
      </Box>
      <ToggleDrawerFilter open={open} setOpen={setOpen} />
    </>
  );
}
export default Hotels;
