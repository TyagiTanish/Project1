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
    <Box
      sx={{
        p: { sm: 4, lg: 5 },
        border: "1px solid lightgray",
        mb: 2,
        borderRadius: 5,
        width: { sm: 367, lg: 860 },
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
        <Box sx={{ fontSize: { sm: 11, lg: 16 } }}> Rating</Box>
        <Box sx={{ fontSize: { sm: 10, lg: 15 } }}>
          OYO Rating Index® based on 1729 reviews across the web
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", ml: { sm: 0, lg: 5 } }}
      >
        <Box sx={{ fontSize: { sm: 16, lg: 22 }, fontWeight: 500 }}>9.0/10</Box>
        <Box sx={{ fontSize: { sm: 9, lg: 12 }, color: "gray" }}>Excellent</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 2,
          fontSize: { sm: "small", lg: "large" },
        }}
      >
        <Box>
          <WifiIcon
            sx={{
              fontSize: { sm: "small", lg: "large" },
              ml: { sm: 5, lg: 18 },
              mr: { sm: 0.5, lg: 1 },
            }}
          />
          Wifi in lobby
        </Box>
        <Box>
          <NetworkWifiIcon
            sx={{
              fontSize: { sm: "small", lg: "large" },
              ml: { sm: 4, lg: 20 },
              mr: { sm: 0.5, lg: 1 },
            }}
          />
          Free WiFi
        </Box>
        <Box>
          <PoolIcon
            sx={{
              fontSize: { sm: "small", lg: "large" },
              ml: { sm: 4, lg: 20 },
              mr: { sm: 0.5, lg: 1 },
            }}
          />
          Pool
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: { sm: 1, lg: 2 },
          fontSize: { sm: "small", lg: "large" },
        }}
      >
        <Box sx={{ ml: { sm: 5, lg: 18 } }}>
          <AirlineSeatReclineExtraIcon
            sx={{
              fontSize: { sm: "small", lg: "large" },
              mr: { sm: 0.5, lg: 1 },
            }}
          />
          Spa
        </Box>
        <Box
          sx={{
            ml: { sm: 10, lg: 28.3 },
            fontSize: { sm: "small", lg: "large" },
          }}
        >
          <LocalParkingIcon
            sx={{
              fontSize: { sm: "small", lg: "large" },
              mr: { sm: 0.5, lg: 1 },
            }}
          />
          Parking
        </Box>
        <Box sx={{ ml: { sm: 5.3, lg: 22 } }}>
          <PetsIcon
            sx={{
              fontSize: { sm: "small", lg: "large" },
              mr: { sm: 0.5, lg: 1 },
            }}
          />
          Pets
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: { sm: 1, lg: 2 },
          fontSize: { sm: "small", lg: "large" },
        }}
      >
        <Box sx={{ ml: { sm: 5, lg: 18 } }}>
          <AcUnitIcon
            sx={{
              mr: { sm: 0.5, lg: 1 },
              fontSize: { sm: "small", lg: "large" },
            }}
          />
          A/C
        </Box>
        <Box sx={{ ml: { sm: 10, lg: 28.5 } }}>
          <RestaurantMenuIcon
            sx={{
              mr: { sm: 0.5, lg: 1 },
              fontSize: { sm: "small", lg: "large" },
            }}
          />
          Restaurant
        </Box>
        <Box sx={{ ml: { sm: 3, lg: 18.5 } }}>
          <WineBarIcon
            sx={{
              mr: { sm: 0.5, lg: 1 },
              fontSize: { sm: "small", lg: "large" },
            }}
          />
          Hotel bar
        </Box>
      </Box>
    </Box>
  );
}

export default OverViewHotel;
