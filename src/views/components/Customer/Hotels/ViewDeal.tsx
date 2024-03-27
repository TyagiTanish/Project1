import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Logo from "../../Logo/Logo";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ViewDetails from "./ViewDetails";
import UserViewRooms from "./Rooms/UserViewRooms";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { FormattedMessage } from "react-intl";
import Footer from "../Footer/Footer";
import Tabs from "./Tabs";

/**
 * To show Details of a specific hotel. Markdown is *Hotels*.
 */
import { IconMap2, IconParkingCircle } from "@tabler/icons-react";
import { IconWifi } from "@tabler/icons-react";
import { IconSwimming } from "@tabler/icons-react";
import { IconHotelService } from "@tabler/icons-react";
import { IconBarbell } from "@tabler/icons-react";
import { IconWashMachine } from "@tabler/icons-react";
import { IconGlassGin } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import SimpleMap from "../Map/Map2";
function ViewDeal() {
  const { id } = useParams();
  const [filterData, setFilteredData] = useState<any>([]);
  const [activeButton, setActiveButton] = React.useState("Overview");
  // console.log(id);
  // const hotelId = useSelector((state: any) => state.userReducer.hotelId);
  // console.log(hotelId);
  const [hotels, sethotels] = useState<any>([]);
  const { request } = useAuth();
  const amenitie = [
    {
      id: "parking",
      label: "Parking",
      icon: <IconParkingCircle stroke={2} />,
      index: 0,
    },
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
    {
      id: "meeting",
      label: "Meeting",
      icon: <IconUsersGroup stroke={2} />,
      index: "7",
    },
    {
      id: "parking",
      label: "Parking",
      icon: <IconParkingCircle stroke={2} />,
      index: 8,
    },
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
    {
      id: "meeting",
      label: "Meeting",
      icon: <IconUsersGroup stroke={2} />,
      index: 15,
    },
  ];
  const ShowAmenities = amenitie.filter((v, i) =>
    filterData?.[0]?.amenities.includes(String(i))
  );

  const getHotels = async () => {
    try {
      const result = await request.get(`/getHotel/${id}`);
      sethotels(result.data);
    } catch (error) {
      console.log(error);
    }

    // console.log(hotels);
  };

  useEffect(() => {
    getHotels();
  }, []);

  useMemo(() => {
    setFilteredData(hotels);
    // console.log(filterData);
  }, [hotels]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const scrollToElement = (id: any) => {
    const element = document.getElementById(id);
    console.log(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* <Stack overflow={"auto"} height={"90vh"}>
        <Stack spacing={8} direction={"row"} ml={10} mt={4}>
          <Box
            component="img"
            sx={{
              width: "20%",
              height: "auto",
            }}
            alt="The house from the offer."
            src={`http://localhost:8000/${filterData[0]?.photo}`}
          />
          <Stack direction={"column"} spacing={1}>
            <Typography sx={{ fontSize: 22 }}>
              {filterData[0]?.hotelName}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <LocationOnIcon fontSize="small" />
              <Typography fontSize={14}>
                {filterData[0]?.city},{filterData[0]?.state}
              </Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
              color={"#0096FF"}
              sx={{
                "&:hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              <CallIcon fontSize="small" />
              <Typography sx={{ fontSize: 14 }}>+91 22 6826 1234</Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
              color={"#0096FF"}
              sx={{
                "&:hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              <CalendarMonthIcon fontSize="small" />
              <Typography sx={{ fontSize: 14 }}>
                <FormattedMessage defaultMessage="Points Calendar" />
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {open && <ViewDetails hotels={hotels} />}
        <Stack
          direction={"row"}
          sx={{ fontSize: 10, color: "#0096FF", cursor: "pointer" }}
          spacing={0.5}
          onClick={handleOpen}
          justifyContent={"center"}
        >
          <Typography textAlign={"center"} fontSize={15}>
            <FormattedMessage defaultMessage="View Details" />
          </Typography>
          {open ? (
            <KeyboardArrowUpIcon fontSize="small" />
          ) : (
            <KeyboardArrowDownIcon fontSize="small" />
          )}
        </Stack>
        <Divider sx={{ borderBottomWidth: 20 }} /> */}

      <Stack
        direction={"row"}
        justifyContent={"center"}
        mt={8}
        // border={"1px solid"}
        spacing={0.5}
      >
        <Stack>
          <Box
            component="img"
            sx={{
              width: { xl: 550, lg: 470, sm: 350, md: 370 },
              height: 302,
            }}
            alt="The house from the offer."
            src={`http://localhost:8000/${filterData[0]?.photo}`}
          />
        </Stack>
        <Stack direction={"row"} spacing={0.5}>
          <Stack direction={"column"} spacing={0.5}>
            {" "}
            <Box
              component="img"
              sx={{
                width: { xl: 250, md: 190, sm: 180, lg: 200 },
                height: 149,
              }}
              alt="The house from the offer."
              src={`http://localhost:8000/${filterData[0]?.rooms[0]?.photos[0]?.path}`}
            />
            <Box
              component="img"
              sx={{
                width: { xl: 250, md: 190, sm: 180, lg: 200 },
                height: 149,
              }}
              alt="The house from the offer."
              src={`http://localhost:8000/${filterData[0]?.rooms[0]?.photos[1]?.path}`}
            />
          </Stack>
          <Stack direction={"column"} spacing={0.5}>
            {" "}
            <Box
              component="img"
              sx={{
                width: { xl: 250, md: 190, sm: 180, lg: 200 },
                height: 149,
              }}
              alt="The house from the offer."
              src={`http://localhost:8000/${filterData[0]?.rooms[0]?.photos[2]?.path}`}
            />
            <Box
              component="img"
              sx={{
                width: { xl: 250, md: 190, sm: 180, lg: 200 },
                height: 149,
              }}
              alt="The house from the offer."
              src={`http://localhost:8000/${filterData[0]?.rooms[0]?.photos[3]?.path}`}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems={"center"}>
        {" "}
        <Tabs
          activeButton={activeButton}
          setActiveButton={setActiveButton}
          scrollToElement={scrollToElement}
        />
      </Stack>
      <Box alignSelf={"center"} sx={{ width: { xl: "57%", lg: "62%" } }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Stack>
            {" "}
            <Typography sx={{ fontSize: 28 }}>
              {filterData[0]?.hotelName}
            </Typography>
            <Stack marginTop={2} id="Amenities">
              {" "}
              <Typography sx={{ fontSize: 16 }}>Popular Amenities</Typography>
            </Stack>
            <Stack>
              <Stack direction={"row"}>
                <Grid container spacing={2} sx={{ mt: 4, width: 500 }}>
                  {ShowAmenities.map((item) => (
                    <Grid item xs={6} sm={6} md={6} xl={6} textAlign={"left"}>
                      <Stack
                        sx={{ fontSize: "15px" }}
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                      >
                        <Box sx={{ fontSize: "small" }}>{item.icon}</Box>
                        <Box>{item.label}</Box>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Typography sx={{ fontSize: 20 }}>What's Around</Typography>
            <Box borderRadius={4}>
              <SimpleMap isViewDeal={true} />
            </Box>
            <Stack direction={"row"}>
              {" "}
              <LocationOnIcon fontSize="small" />
              <Typography fontSize={14}>
                {filterData[0]?.city},{filterData[0]?.state}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          direction={"row"}
          sx={{ mt: "5%" }}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
          // border={'1px solid'}
        >
          <Typography
            sx={{ fontSize: { xl: 20, md: 18, sm: 17, lg: 18 } }}
            id="Discription"
          >
            About this property
          </Typography>{" "}
          <Box
            dangerouslySetInnerHTML={{ __html: filterData?.[0]?.discription }}
            sx={{
              // flex: 1,
              letterSpacing: "1px",
              wordWrap: "break-word",

              width: { xl: 600, md: 500, lg: 550, sm: 500 },
            }}
          />
        </Stack>
      </Box>

      <Box padding={1}>
        <UserViewRooms hotels={hotels} />
      </Box>
      <Footer />
      {/* </Stack> */}
    </>
  );
}

export default ViewDeal;
