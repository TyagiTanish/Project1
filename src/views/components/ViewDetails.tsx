import { Box, Grid, Stack, Typography } from "@mui/material";
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
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
function ViewDetails({ hotels }: any) {
  const amenitie = [
    { id: "parking", label: "Parking", icon: <LocalParkingIcon />, index: "0" },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon />, index: "1" },
    { id: "pool", label: "Pool", icon: <PoolIcon />, index: "2" },
    {
      id: "roomService",
      label: "Room Service",
      icon: <RoomServiceIcon />,
      index: "3",
    },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon />, index: "4" },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <DryCleaningIcon />,
      index: "5",
    },
    { id: "bar", label: "Bar", icon: <WineBarIcon />, index: "6" },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon />, index: "7" },
    { id: "parking", label: "Parking", icon: <LocalParkingIcon />, index: "8" },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon />, index: "9" },
    { id: "pool", label: "Pool", icon: <PoolIcon />, index: "10" },
    {
      id: "roomService",
      label: "Room Service",
      icon: <RoomServiceIcon />,
      index: "11",
    },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon />, index: "12" },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <DryCleaningIcon />,
      index: "13",
    },
    { id: "bar", label: "Bar", icon: <WineBarIcon />, index: "14" },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon />, index: "15" },
  ];

  const ShowAmenities = amenitie.filter((v, i) =>
    hotels[0].amenities[0].includes(+i)
  );

  return (
    <>
      <Stack
        sx={{ width: "65%" }}
        direction={"column"}
        spacing={2}
        margin={4}
        marginLeft={`5%`}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xl: 18, md: 16, sm: 16 } }}
        >
          Description
        </Typography>
        <Typography
          sx={{ fontSize: { xl: 14, md: 12, sm: 11 }, letterSpacing: 1 }}
        >
          <Box
            dangerouslySetInnerHTML={{ __html: hotels[0]?.discription }}
            sx={{ flex: 1 }}
          />
        </Typography>
        <Stack
          direction={"row"}
          spacing={12}
          sx={{ fontWeight: "bold", fontSize: { xl: 18, md: 18, sm: 15 } }}
        >
          <Typography sx={{ fontSize: { xl: 20, md: 16, sm: 15 } }}>
            Check-In
          </Typography>
          <Typography sx={{ fontSize: { xl: 20, md: 16, sm: 15 } }}>
            Check-Out
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={9} alignItems={"center"}>
          <Stack direction={"row"} spacing={1}>
            <AccessTimeIcon fontSize="small" />
            <Typography sx={{ fontSize: { xl: 17, md: 15, sm: 15 } }}>
              03:00 PM
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <AccessTimeIcon fontSize="small" />
            <Typography sx={{ fontSize: { xl: 17, md: 15, sm: 15 } }}>
              12:00 PM
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Typography
        sx={{
          fontWeight: "bold",
          m: "2% 2%  2% 5% ",
          fontSize: { xl: 18, md: 16, sm: 16 },
        }}
      >
        Amenities
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4, ml: { lg: 5, md: 0 } }}>
        {ShowAmenities.map((item) => (
          <Grid item xs={2}>
            <Stack sx={{ fontSize: "10px", ml: 5 }}>
              <Box sx={{ fontSize: "small" }}>{item.icon}</Box>
              {item.label}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ViewDetails;
