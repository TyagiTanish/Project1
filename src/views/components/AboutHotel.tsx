import { Divider, Stack, Typography } from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BedIcon from "@mui/icons-material/Bed";
import HdrAutoIcon from "@mui/icons-material/HdrAuto";
import HotelInfo from "./HotelInfo";
import AllRooms from "./HotelOwner/Rooms/RoomDetails/Rooms";
import { Box } from "@mui/system";
function AboutHotel(props: any) {
  console.log("item", props.toGet);
  const [activeButton, setActiveButton] = React.useState("info");
  return (
    <>
      {" "}
      <Stack
              direction={"column"}
        spacing={8}
        sx={{ border: "1px solid lightgray", p: 2 ,width:{xl:'70%'}}}
      >
        {" "}
        <Stack>
          <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
            {props?.toGet?.name}
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          sx={{ cursor: "pointer" }}
        >
          <Stack
            spacing={1}
            width={"10"}
            onClick={() => {
              setActiveButton("info");
            }}
          >
            {" "}
            {activeButton === "info" ? (
              <>
                <Stack direction={"column"} spacing={5}>
                  <Stack spacing={1} direction={"row"} color={"#D2042D"}>
                    <InfoIcon />
                    <Typography>Info</Typography>
                  </Stack>
                 
                </Stack>
             
              </>
            ) : (
              <Stack spacing={1} direction={"row"} color={"gray"}>
                <InfoIcon />
                <Typography>Info</Typography>
              </Stack>
            )}
          </Stack>
          <Stack
            spacing={1}
            width={"10"}
            onClick={() => {
              setActiveButton("dashboard");
            }}
          >
            {" "}
            {/* <Stack spacing={1} direction={"row"}>
            <DashboardIcon />
            <Typography>DashBoard</Typography>
          </Stack>
          */}
            {activeButton === "dashboard" ? (
              <Stack spacing={1} direction={"row"} color={"#D2042D"}>
                <DashboardIcon />
                <Typography>DashBoard</Typography>
              </Stack>
            ) : (
              <Stack spacing={1} direction={"row"} color={"gray"}>
                <DashboardIcon />
                <Typography>DashBoard</Typography>
              </Stack>
            )}
          </Stack>
          <Stack
            spacing={1}
            width={"10"}
            onClick={() => {
              setActiveButton("rooms");
            }}
          >
            {" "}
            {activeButton === "rooms" ? (
              <Stack spacing={1} direction={"row"} color={"#D2042D"}>
                <BedIcon /> 
                <Typography>All Rooms</Typography>
              </Stack>
            ) : (
              <Stack spacing={1} direction={"row"} color={"gray"}>
                <BedIcon />
                <Typography>All Rooms</Typography>
              </Stack>
            )}
          </Stack>
          <Stack
            spacing={1}
            width={"10"}
            onClick={() => {
              setActiveButton("amenities");
            }}
          >
            {" "}
            {activeButton === "amenities" ? (
              <Stack spacing={1} direction={"row"} color={"#D2042D"}>
                <HdrAutoIcon />
                <Typography>Amenities</Typography>
              </Stack>
            ) : (
              <Stack spacing={1} direction={"row"} color={"gray"}>
                <HdrAutoIcon />
                <Typography>Amenities</Typography>
              </Stack>
            )}
          </Stack>
        </Stack>
        {activeButton==='info' &&  <HotelInfo toGet={props.toGet}/>}
        {activeButton === 'rooms' && <Box height={'65vh'} overflow={'auto'} ><AllRooms/></Box>}
      </Stack>
    </>
  );
}

export default AboutHotel;
