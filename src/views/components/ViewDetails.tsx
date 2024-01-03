import { Stack, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WifiIcon from '@mui/icons-material/Wifi';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import WineBarIcon from '@mui/icons-material/WineBar';
import GroupsIcon from '@mui/icons-material/Groups';
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
      <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
        Description
      </Typography>
      <Typography sx={{ fontSize: 14, letterSpacing: 1 }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
        aliquid similique error aut eveniet, ad ipsam minus a quo rerum? Numquam
        sed a ea minus rem voluptatem. Ad, aperiam illum voluptatibus similique
        magni ratione, consequuntur sint impedit, tempore ab nostrum maiores.
        Saepe velit dolorem at repellendus nam necessitatibus, repudiandae est
        aspernatur autem quos, consequatur praesentium eveniet laborum dolor
        consectetur. Cupiditate beatae deserunt sit rerum id nesciunt aliquam
        fuga, fugiat in eos, placeat architecto reprehenderit, voluptate quaerat
      </Typography>
      <Stack direction={"row"} spacing={1} sx={{ fontWeight: "bold" }}>
        <Typography>Check-In</Typography>
        <Typography>Check-Out</Typography>
      </Stack>
      <Stack direction={"row"} >
        <Stack direction={"row"} spacing={1}>
          <AccessTimeIcon /><Typography>03:00 PM</Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}sx={{marginLeft:"-30px"}}>
          <AccessTimeIcon /><Typography>12:00 PM</Typography>
        </Stack>
      </Stack>
    
    </Stack>
    <Typography sx={{fontWeight:"bold",m:'2% 2%  2% 5% ',fontSize:18}}>Amenities</Typography>
      <Stack direction={"row"} spacing={20} sx={{ml:'5%', mb:'2%'}}>
     
        <Stack direction={"column"} spacing={1} alignItems={"center"}> <WifiIcon/><Typography sx={{fontSize:15}}>Fast Internet Access</Typography></Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}> <LocalParkingIcon/><Typography sx={{fontSize:15}}>Free Parking</Typography></Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}> <RestaurantIcon/><Typography sx={{fontSize:15}}>On-site Restaurant</Typography></Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}> <RoomServiceIcon/><Typography sx={{fontSize:15}}>Room Service</Typography></Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}> <FitnessCenterIcon/><Typography sx={{fontSize:15}}>Fitness Center</Typography></Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}> <PoolIcon/><Typography sx={{fontSize:15}}>Pool</Typography></Stack>
        <Stack direction={"column"} spacing={1} alignItems={"center"}> <CheckroomIcon/><Typography sx={{fontSize:15}}>Laundry</Typography></Stack>
     
        </Stack>
        <Stack direction={"row"} spacing={22} sx={{ml:'5.5%', mb:'2%'}}>
     
     
     <Stack direction={"column"} spacing={1} alignItems={"center"}> <GroupsIcon/><Typography sx={{fontSize:15}}>Meeting Facilities</Typography></Stack>
    
     <Stack direction={"column"} spacing={1} alignItems={"center"}> <WineBarIcon/><Typography sx={{fontSize:15}}>Concierge</Typography></Stack>
     </Stack>
      </>
  );
}

export default ViewDetails;
