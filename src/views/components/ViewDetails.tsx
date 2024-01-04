import { Stack, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WineBarIcon from "@mui/icons-material/WineBar";
import GroupsIcon from "@mui/icons-material/Groups";
function ViewDetails() {
  return (
    <>
      <Stack
        sx={{ width: "65%" }}
        direction={"column"}
        spacing={2}
        margin={4}
        marginLeft={`5%`}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: {xl:18, md:16,sm:16}}}>
          Description
        </Typography>
        <Typography sx={{ fontSize: {xl:14, md:12,sm:11}, letterSpacing: 1 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          aliquid similique error aut eveniet, ad ipsam minus a quo rerum?
          Numquam sed a ea minus rem voluptatem. Ad, aperiam illum voluptatibus
          similique magni ratione, consequuntur sint impedit, tempore ab nostrum
          maiores. Saepe velit dolorem at repellendus nam necessitatibus,
          repudiandae est aspernatur autem quos, consequatur praesentium eveniet
          laborum dolor consectetur. Cupiditate beatae deserunt sit rerum id
          nesciunt aliquam fuga, fugiat in eos, placeat architecto
          reprehenderit, voluptate quaerat
        </Typography>
        <Stack direction={"row"} spacing={12} sx={{ fontWeight: "bold" ,fontSize:{xl:18,md:18,sm:15}}}>
          <Typography sx={{fontSize:{xl:20,md:16,sm:15}}}>Check-In</Typography>
          <Typography sx={{fontSize:{xl:20,md:16,sm:15}}}>Check-Out</Typography>
        </Stack>
        <Stack direction={"row"} spacing={9} alignItems={'center'}>
          <Stack direction={"row"} spacing={1}>
            <AccessTimeIcon fontSize="small"/>
            <Typography  sx={{fontSize:{xl:17,md:15,sm:15}}}>03:00 PM</Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} >
            <AccessTimeIcon fontSize="small"/>
            <Typography sx={{fontSize:{xl:17,md:15,sm:15}}}>12:00 PM</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography sx={{ fontWeight: "bold", m: "2% 2%  2% 5% ", fontSize: {xl:18, md:16,sm:16}}}>
        Amenities
      </Typography>
      
      <Stack direction={"row"} justifyContent={'space-evenly'} sx={{mb:'2%'}}>
        <Stack direction={"column"} spacing={1} alignItems={"center"}>
          {" "}
          <WifiIcon />
          <Typography sx={{ fontSize: {xl:15,md:13,sm:12} }}>Fast Internet Access</Typography>
        </Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}>
          {" "}
          <LocalParkingIcon />
          <Typography  sx={{ fontSize: {xl:15,md:13,sm:12} }}>Free Parking</Typography>
        </Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}>
          {" "}
          <RestaurantIcon />
          <Typography  sx={{ fontSize: {xl:15,md:13,sm:12} }}>On-site Restaurant</Typography>
        </Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}>
          {" "}
          <RoomServiceIcon />
          <Typography  sx={{ fontSize: {xl:15,md:13,sm:12} }}>Room Service</Typography>
        </Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}>
          {" "}
          <FitnessCenterIcon />
          <Typography  sx={{ fontSize: {xl:15,md:13,sm:12} }}>Fitness Center</Typography>
        </Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}>
          {" "}
          <PoolIcon />
          <Typography  sx={{ fontSize: {xl:15,md:13,sm:12} }}>Pool</Typography>
        </Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}>
          {" "}
          <CheckroomIcon />
          <Typography  sx={{ fontSize: {xl:15,md:13,sm:12} }}>Laundry</Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} sx={{ml:{xl:'8.6%', md:'7%',sm:'5%'}}}>
        <Stack direction={"column"} spacing={1} alignItems={"center"}>
          {" "}
          <GroupsIcon />
          <Typography  sx={{ fontSize: {xl:15,md:13,sm:12} }}>Meeting Facilities</Typography>
        </Stack>

        <Stack direction={"column"} spacing={1} alignItems={"center"} sx={{ml:
        {xl:'10%',md:'7%',sm:'7%'}}}>
          {" "}
          <WineBarIcon />
          <Typography  sx={{ fontSize: {xl:15,md:13,sm:12} }}>Concierge</Typography>
        </Stack>
      </Stack>
    </>
  );
}

export default ViewDetails;
