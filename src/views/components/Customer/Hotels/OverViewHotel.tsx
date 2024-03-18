import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PoolIcon from "@mui/icons-material/Pool";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PetsIcon from "@mui/icons-material/Pets";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import WineBarIcon from "@mui/icons-material/WineBar";
import { useIntl, FormattedMessage } from "react-intl";

import Map2 from "../Map/Map2";
import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import GroupsIcon from "@mui/icons-material/Groups";
function OverViewHotel({ item }: any) {
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
    // item.amenities[0].includes(+i)
    item.amenities.includes(String(i))
  );
  return (
    <Box
      sx={{
        p: { sm: 4, lg: 5, md: 5 },
        border: "1px solid lightgray",
        mb: 2,
        borderRadius: 5,
        width: { sm: 642, lg: 870, md: 475 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 500,
          ml: { sm: 4, lg: 30 },
          mb: 1,
          mt: -3,
        }}
      >
        <Box sx={{ fontSize: { sm: 14, lg: 16, md: 14 } }}> Rating</Box>
        <Box sx={{ fontSize: { sm: 14, lg: 15, md: 14 } }}>
          OYO Rating Index® based on 1729 reviews across the web
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: { sm: 0, lg: 5, md: 0 },
        }}
      >
        <Box sx={{ fontSize: { sm: 18, lg: 22, md: 18 }, fontWeight: 500 }}>
          9.0/10
        </Box>
        <Box sx={{ fontSize: { sm: 9, lg: 12, md: 10 }, color: "gray" }}>
          Excellent
        </Box>
      </Box>
      <Grid container spacing={2}>
        {ShowAmenities.map((item) => (
          <Grid item xs={3}>
            <Stack sx={{ fontSize: "10px", ml: 5 }}>
              <Box sx={{ fontSize: "small" }}>{item.icon}</Box>
              {item.label}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default OverViewHotel;
