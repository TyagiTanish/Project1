import React from "react";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";

import { Divider, Stack, Tab } from "@mui/material";
function Tabs({ activeButton, setActiveButton,scrollToElement }: any) {

 
  return (
    <TabContext value={activeButton}>
      <Stack
        // direction={"column"}
        spacing={2}
        sx={{
        //   border: "1px solid lightgray",
        //   p: 1,
          width: { xl: "58%", md: "74%", sm: "100%" , lg:'61%'},  
        //   height: "90vh",
        // ml:'21vw'
        }}
      >
        {/* <Stack>
      <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
      </Typography>
    </Stack> */}

        <TabList
          onChange={(event: React.SyntheticEvent, newValue: string) =>
            setActiveButton(newValue)
          } 
          sx={{
            borderBottom: "1px solid lightgray",
          
          }}
        
        >
          <Tab label="Overview" value={"Overview"}  sx={{textTransform:'capitalize'}} />
          <Tab label="Amenities" value={"amenities"} sx={{textTransform:'capitalize'}} onClick={()=>{scrollToElement("Amenities")}}/>
          <Tab label="All Rooms" value={"rooms"} sx={{textTransform:'capitalize'}} onClick={()=>{scrollToElement("Rooms")}}/>
          <Tab label="Discription" value={"discription"} sx={{textTransform:'capitalize'}} onClick={()=>{scrollToElement("Discription")}}/>
          {/* <Tab label="All Rooms" value={"rooms"} sx={{textTransform:'capitalize'}}/> */}
        </TabList>

        <TabPanel value="Overview" sx={{ overflow: "auto"}}>
          {/* <HotelInfo setRender={setRender} data={data} /> */}
        </TabPanel>
        <TabPanel value="amenities" sx={{ overflow: "auto"}}>
          {/* <HotelInfo setRender={setRender} data={data} /> */}
        </TabPanel>
        <TabPanel value="rooms" sx={{ overflow: "auto" }}>
          {/* <AllRooms /> */}
        </TabPanel>
      </Stack>
    </TabContext>
  );
}

export default Tabs;
