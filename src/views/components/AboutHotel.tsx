import { Divider, Stack, Tab, Typography } from "@mui/material";
import React from "react";
import HotelInfo from "./HotelInfo";
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Outlet, useNavigate } from "react-router-dom";

import Rooms from "./Rooms";

import AllRooms from "./HotelOwner/Rooms/RoomDetails/Rooms";
function AboutHotel() {
 const navigate=useNavigate()
  const [activeButton, setActiveButton] = React.useState("info");
  return (
    <>
    <TabContext value={activeButton} >
      <Stack
              direction={"column"}
        spacing={8}
        sx={{ border: "1px solid lightgray", p: 2 ,width:{xl:'70%'}}}
      >
        <Stack>
          <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
          </Typography>
        </Stack>
        <TabList  onChange={(event: React.SyntheticEvent, newValue: string)=>setActiveButton(newValue)} >
         
          <Tab label={'info'}  value={'info'}   />
          <Tab label="DashBoard" value={"dashboard"} />
          <Tab label="All Rooms" value={"rooms"} />
          <Tab label="Amenities"  value={"amenities"}  />
      
        </TabList>
        <TabPanel value="info" ><HotelInfo/></TabPanel>

        <TabPanel value="rooms" ><AllRooms/></TabPanel>

      </Stack>
      </TabContext>
    </>
  );
}

export default AboutHotel;
