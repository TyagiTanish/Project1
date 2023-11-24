import { Box } from "@mui/material";
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
function OverViewHotel() {
  return (
    <Box sx={{ p: 5, border: "1px solid lightgray", mb: 2, borderRadius: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 500,
          ml: 30,
          mb: 3,
          mt: -3,
        }}
      >
        <Box>Rating</Box>
        <Box>OYO Rating Index® based on 1729 reviews across the web</Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", ml: 5 }}>
        <Box sx={{ fontSize: 22, fontWeight: 500 }}>9.0/10</Box>
        <Box sx={{ fontSize: 12, color: "gray" }}>Excellent</Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-evenly", mt: 2, ml: -1 }}
      >
        <Box>
          <WifiIcon sx={{ fontSize: "large", mr: 1 }} />
          Wifi in lobby
        </Box>
        <Box>
          <NetworkWifiIcon sx={{ fontSize: "large", mr: 1 }} />
          Free WiFi
        </Box>
        <Box>
          <PoolIcon sx={{ fontSize: "large", mr: 1 }} />
          Pool
        </Box>
      </Box>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Box sx={{ ml: 19 }}>
          <AirlineSeatReclineExtraIcon sx={{ fontSize: "large", mr: 1 }} />
          Spa
        </Box>
        <Box sx={{ ml: 26.5 }}>
          <LocalParkingIcon sx={{ fontSize: "large", mr: 1 }} />
          Parking
        </Box>
        <Box sx={{ ml: 21 }}>
          <PetsIcon sx={{ fontSize: "large", mr: 1 }} />
          Pets
        </Box>
      </Box>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Box sx={{ ml: 19 }}>
          <AcUnitIcon sx={{ fontSize: "large", mr: 1 }} />
          A/C
        </Box>
        <Box sx={{ ml: 26.5 }}>
          <RestaurantMenuIcon sx={{ fontSize: "large", mr: 1 }} />
          Restaurant
        </Box>
        <Box sx={{ ml: 18 }}>
          <WineBarIcon sx={{ fontSize: "large", mr: 1 }} />
          Hotel bar
        </Box>
      </Box>
    </Box>
  );
}

export default OverViewHotel;
