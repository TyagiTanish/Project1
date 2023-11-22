import { Box, Button, Card, Typography, createTheme } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PoolIcon from "@mui/icons-material/Pool";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PetsIcon from "@mui/icons-material/Pets";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import WineBarIcon from "@mui/icons-material/WineBar";
import Map2 from "./Map2";
function InfoHotelDetails({ item }: any) {
  return (
    <Box
      sx={{
        border: "1px solid lightgrey",
        mb: 2,
        width: "100%",
        borderRadius: 5,
      }}
    >
      <Box sx={{ fontWeight: 700, fontSize: 22, m: 2 }}>{item.name}</Box>

      <Box sx={{ pl: 4, pr: 4, pb: 4, textAlign: "justify", lineHeight: 2 }}>
        Commanding a sweeping view of the Arabian Sea in India's commercial
        capital, The InterContinental Marine Drive is setting standards for
        personalised service for business and leisure travellers. The experience
        begins as Mumbai's glittering skyline, aptly called the Queen's Necklace
        welcomes you. Step into the InterContinental Marine Drive and the warm,
        personalised attention helps you relax. The InterContinental Marine
        Drive is strategically located in the heart of Mumbai's business &
        financial district, 1.5 kms from Nariman Point and 3 kms from the Main
        Shopping Area of Colaba. Offering you the all-important luxury of saving
        time while on work. State-of-the-art business communication and meeting
        facilities further optimize time management.
      </Box>
      <Box sx={{ fontWeight: 600, ml: 2, fontSize: 20 }}>Location</Box>
      <Box sx={{ m: 2 }}>
        <Map2 />
      </Box>
      <Box>
        <Box sx={{ fontSize: 20, fontWeight: 600, ml: 2 }}>Top amenities</Box>

        <Box sx={{ display: "flex", mt: 2 }}>
          <Box>
            <WifiIcon sx={{ fontSize: "large", ml: 26.5 }} />
            Wifi in lobby
          </Box>
          <Box>
            <NetworkWifiIcon sx={{ fontSize: "large", ml: 26 }} />
            Free WiFi
          </Box>
          <Box>
            <PoolIcon sx={{ fontSize: "large", ml: 26.7 }} />
            Pool
          </Box>
        </Box>
        <Box sx={{ display: "flex", mt: 2 }}>
          <Box sx={{ ml: 26.5 }}>
            <AirlineSeatReclineExtraIcon sx={{ fontSize: "large", mr: 1 }} />
            Spa
          </Box>
          <Box sx={{ ml: 32.5 }}>
            <LocalParkingIcon sx={{ fontSize: "large", mr: 1 }} />
            Parking
          </Box>
          <Box sx={{ ml: 26.7 }}>
            <PetsIcon sx={{ fontSize: "large", mr: 1 }} />
            Pets
          </Box>
        </Box>
        <Box sx={{ display: "flex", mt: 2 }}>
          <Box sx={{ ml: 26.5 }}>
            <AcUnitIcon sx={{ fontSize: "large", mr: 1 }} />
            A/C
          </Box>
          <Box sx={{ ml: 32.5 }}>
            <RestaurantMenuIcon sx={{ fontSize: "large", mr: 1 }} />
            Restaurant
          </Box>
          <Box sx={{ ml: 23.5 }}>
            <WineBarIcon sx={{ fontSize: "large", mr: 1 }} />
            Hotel bar
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
        <Box sx={{ mt: 3, mb: 3 }}>Arrival / Departure</Box>
        <Box sx={{ mb: 1 }}>Check in: 15:00</Box>
        <Box>Check out: 12:00</Box>
        <Box sx={{ mt: 3, mb: 3 }}>Contact</Box>
        <Box sx={{ mb: 1 }}>{item.name}</Box>
        <Box sx={{ mb: 3 }}>
          Telephone: +91 2239879999 | Fax: +91 2239879600
        </Box>
      </Box>
    </Box>
  );
}

export default InfoHotelDetails;
