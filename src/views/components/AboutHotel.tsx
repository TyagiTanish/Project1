import { Divider, Stack, Tab, Typography } from "@mui/material";
import React from "react";
import HotelInfo from "./HotelInfo";
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import { Outlet, useNavigate } from "react-router-dom";
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
<<<<<<< HEAD
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
        {activeButton==='info' &&  <HotelInfo />}
        {/* {activeButton === 'rooms' && <Box height={'65vh'} overflow={'auto'} ><AllRooms/></Box>} */}
=======
        <TabList  onChange={(event: React.SyntheticEvent, newValue: string)=>setActiveButton(newValue)} >
         
          <Tab label={'info'}  value={'info'}   />
          <Tab label="DashBoard" value={"dashboard"} />
          <Tab label="All Rooms" value={"rooms"} />
          <Tab label="Amenities"  value={"amenities"}  />
      
        </TabList>
        <TabPanel value="info" ><HotelInfo/></TabPanel>

>>>>>>> main
      </Stack>
      </TabContext>
    </>
  );
}

export default AboutHotel;
