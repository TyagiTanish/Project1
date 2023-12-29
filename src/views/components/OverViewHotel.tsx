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
import { useIntl, FormattedMessage } from "react-intl";
function OverViewHotel() {
  return (
    <Box
      sx={{
        p: { sm: 4, lg: 5, md: 5 },
        border: "1px solid lightgray",
        mb: 2,
        borderRadius: 5,
        width: { sm: 690, lg: 860, md:510 },
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
        <Box sx={{ fontSize: { sm: 14, lg: 16,md:14 } }}> Rating</Box>
        <Box sx={{ fontSize: { sm: 14, lg: 15,md:14 } }}>
          OYO Rating Index® based on 1729 reviews across the web
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", ml: { sm: 0, lg: 5,md:0 } }}
      >
        <Box sx={{ fontSize: { sm: 18 , lg: 22,md:18 }, fontWeight: 500 }}>9.0/10</Box>
        <Box sx={{ fontSize: { sm: 9, lg: 12,md:10 }, color: "gray" }}>Excellent</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: 2,
         fontSize: { sm: "medium", lg: "large" , md:"14px" },
        }}
      >
        <Box>
          <WifiIcon
            sx={{
              fontSize: { sm: "medium", lg: "large" , md:"15px" },
              ml: { sm: 8, lg: 18,md:8 },
              mr: { sm: 0.5, lg: 1 ,md:1},
            }}
          />
          <FormattedMessage defaultMessage="Wifi in lobby" />
        </Box>
        <Box>
          <NetworkWifiIcon
            sx={{
              fontSize: { sm: "medium", lg: "large" , md:"15px" },
              ml: { sm: 6, lg: 20,md:6 },
              mr: { sm: 0.5, lg: 1,md:1 },
            }}
          />
          <FormattedMessage defaultMessage="Free WiFi" />
        </Box>
        <Box>
          <PoolIcon
            sx={{
           fontSize: { sm: "medium", lg: "large" , md:"15px" },
              ml: { sm: 9, lg: 20,md:9},
              mr: { sm: 0.5, lg: 1 ,md:1},
            }}
          />
          <FormattedMessage defaultMessage="Pool" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: { sm: 1, lg: 2 },
        fontSize: { sm: "medium", lg: "large" , md:"15px" },
        }}
      >
        <Box sx={{ ml: { sm: 8, lg: 18 ,md:8} }}>
          <AirlineSeatReclineExtraIcon
            sx={{
           fontSize: { sm: "medium", lg: "large" , md:"15px" },
              mr: { sm: 0.5, lg: 1 ,md:1},
            }}
          />
          <FormattedMessage defaultMessage="Spa" />
        </Box>
        <Box
          sx={{
            ml: { sm: 13.5, lg: 28.3 ,md:12.3},
         fontSize: { sm: "medium", lg: "large" , md:"15px" },
          }}
        >
          <LocalParkingIcon
            sx={{
           fontSize: { sm: "medium", lg: "large" , md:"15px" },
              mr: { sm: 0.5, lg: 1 ,md:1},
            
            }}
          />
          <FormattedMessage defaultMessage=" Parking" />
        </Box>
        <Box sx={{ ml: { sm: 10.7, lg: 22,md:10} }}>
          <PetsIcon
            sx={{
           fontSize: { sm: "medium", lg: "large" , md:"15px" },
              mr: { sm: 0.5, lg: 1,md:1 },
            }}
          />
          <FormattedMessage defaultMessage="Pets" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: { sm: 1, lg: 2 },
       fontSize: { sm: "medium", lg: "large" , md:"15px" },
        }}
      >
        <Box sx={{ ml: { sm: 8, lg: 18 ,md:8} }}>
          <AcUnitIcon
            sx={{
              mr: { sm: 0.5, lg: 1,md:1 },
           fontSize: { sm: "medium", lg: "large" , md:"15px" },
            }}
          />
          <FormattedMessage defaultMessage="A/C" />
        </Box>
        <Box sx={{ ml: { sm: 13.7, lg: 28.5,md:12 } }}>
          <RestaurantMenuIcon
            sx={{
              mr: { sm: 0.5, lg: 1,md: 1},
           fontSize: { sm: "medium", lg: "large" , md:"15px" },
            }}
          />
          <FormattedMessage defaultMessage=" Restaurant" />
        </Box>
        <Box sx={{ ml: { sm: 7.5, lg: 18.5 ,md:7.5} }}>
          <WineBarIcon
            sx={{
              mr: { sm: 0.5, lg: 1,md:1 },
           fontSize: { sm: "medium", lg: "large" , md:"15px" },
            }}
          />
          <FormattedMessage defaultMessage="Hotel bar" />
        </Box>
      </Box>
    </Box>
  );
}

export default OverViewHotel;
