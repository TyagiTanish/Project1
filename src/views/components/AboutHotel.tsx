import { Divider, Stack, Tab, Typography } from "@mui/material";
import React from "react";
import HotelInfo from "./HotelInfo";
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Outlet, useNavigate } from "react-router-dom";
import AllRooms from "./HotelOwner/Rooms/RoomDetails/Rooms";
function AboutHotel({setRender,data}:any) {
 const navigate=useNavigate()
  const [activeButton, setActiveButton] = React.useState("info");
  return (
    <>
    <TabContext value={activeButton} >
      <Stack
        direction={"column"}
        spacing={2}
        sx={{ border: "1px solid lightgray", p: 1 ,width:{xl:'70%',md:'70%',sm:'100%'},height:'90vh'}}
      >
        {/* <Stack>
          <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
          </Typography>
        </Stack> */}
        <TabList  onChange={(event: React.SyntheticEvent, newValue: string)=>setActiveButton(newValue)}>
          <Tab label={'info'}  value={'info'}   />
          <Tab label="DashBoard" value={"dashboard"} />
          <Tab label="All Rooms" value={"rooms"} />
        </TabList>
        <TabPanel value="info" sx={{overflow:'auto'}}  ><HotelInfo setRender={setRender} data={data}/></TabPanel>
        <TabPanel value="rooms" sx={{overflow:"auto"}} ><AllRooms/></TabPanel>
      </Stack>
      </TabContext>
    </>
  );
}
export default AboutHotel;