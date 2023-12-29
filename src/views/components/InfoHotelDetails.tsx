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

import { useIntl, FormattedMessage } from "react-intl";

function InfoHotelDetails({ item }: any) {
  return (
    <Box
      sx={{
        border: "1px solid lightgrey",
        mb: 2,
        width: { sm: "98%", lg: "99%" ,md:590},
        borderRadius: 5,
      }}
    >
      <Box sx={{ fontWeight: 700, fontSize: { sm: 12, lg: 20, md: 16 }, m: 2 }}>
        {item.name}
      </Box>

      <Box
        sx={{
          pl: { sm: 3, lg: 4 },
          pr: { sm: 3, lg: 4 },
          pb: { sm: 3, lg: 4 },
          textAlign: "justify",
          fontSize: { sm: 10, lg: 17, md: 14 },
          lineHeight: { sm: 1.3, lg: 2, md: 1.5 },
        }}
      >
        <FormattedMessage
          defaultMessage="Commanding a sweeping view of the Arabian Sea in India's commercial
        capital, The InterContinental Marine Drive is setting standards for
        personalised service for business and leisure travellers. The experience
        begins as Mumbai's glittering skyline, aptly called the Queen's Necklace
        welcomes you. Step into the InterContinental Marine Drive and the warm,
        personalised attention helps you relax. The InterContinental Marine
        Drive is strategically located in the heart of Mumbai's business &
        financial district, 1.5 kms from Nariman Point and 3 kms from the Main
        Shopping Area of Colaba. Offering you the all-important luxury of saving
        time while on work. State-of-the-art business communication and meeting
        facilities further optimize time management."
        />
      </Box>
      <Box
        sx={{ fontWeight: 600, ml: 2, fontSize: { sm: 12, lg: 20, md: 16 } }}
      >
        <FormattedMessage defaultMessage="Location" />
      </Box>
      <Box sx={{ m: 2 }}>
        <Map2 />
      </Box>
      <Box>
        <Box
          sx={{ fontSize: { sm: 12, lg: 20, md: 12 }, fontWeight: 600, ml: 2 }}
        >
          <FormattedMessage defaultMessage="Top amenities" />
        </Box>

        <Box
          sx={{
            display: "flex",
            mt: 2,
            fontSize: { sm: "small", lg: "large", md: "14px" },
          }}
        >
          <Box>
            <WifiIcon
              sx={{
                fontSize: { sm: "small", lg: "large", md: "14px" },
                ml: { sm: 5, lg: 18, md: 14 },
                mr: { sm: 0.5, lg: 1, md: 1 },
              }}
            />
            <FormattedMessage defaultMessage="Wifi in lobby" />
          </Box>
          <Box>
            <NetworkWifiIcon
              sx={{
                fontSize: { sm: "small", lg: "large", md: "14px" },
                ml: { sm: 4, lg: 20, md: 6 },
                mr: { sm: 0.5, lg: 1, md: 1 },
              }}
            />
            <FormattedMessage defaultMessage="Free WiFi" />
          </Box>
          <Box>
            <PoolIcon
              sx={{
                fontSize: { sm: "small", lg: "large", md: "14px" },
                ml: { sm: 4, lg: 20, md: 9 },
                mr: { sm: 0.5, lg: 1, md: 1 },
              }}
            />
            <FormattedMessage defaultMessage="Pool" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: { sm: 1, lg: 2 },
            fontSize: { sm: "small", lg: "large", md: "14px" },
          }}
        >
          <Box sx={{ ml: { sm: 5, lg: 18, md: 14 } }}>
            <AirlineSeatReclineExtraIcon
              sx={{
                fontSize: { sm: "small", lg: "large", md: "14px" },
                mr: { sm: 0.5, lg: 1, md: 1 },
              }}
            />
            <FormattedMessage defaultMessage="Spa" />
          </Box>
          <Box
            sx={{
              ml: { sm: 10, lg: 28.3, md: 12.5 },
              fontSize: { sm: "small", lg: "large", md: "14px" },
            }}
          >
            <LocalParkingIcon
              sx={{
                fontSize: { sm: "small", lg: "large", md: "14px" },
                mr: { sm: 0.5, lg: 1, md: 1 },
              }}
            />
            <FormattedMessage defaultMessage=" Parking" />
          </Box>
          <Box sx={{ ml: { sm: 5.3, lg: 22, md: 10.2 } }}>
            <PetsIcon
              sx={{
                fontSize: { sm: "small", lg: "large", md: "14px" },
                mr: { sm: 0.5, lg: 1, md: 1 },
              }}
            />
            <FormattedMessage defaultMessage="Pets" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: { sm: 1, lg: 2 },
            fontSize: { sm: "small", lg: "large", md: "14px" },
          }}
        >
          <Box sx={{ ml: { sm: 5, lg: 18, md: 14 } }}>
            <AcUnitIcon
              sx={{
                mr: { sm: 0.5, lg: 1, md: 1 },
                fontSize: { sm: "small", lg: "large", md: "14px" },
              }}
            />
            <FormattedMessage defaultMessage="A/C" />
          </Box>
          <Box sx={{ ml: { sm: 10, lg: 28.5, md: 12.5 } }}>
            <RestaurantMenuIcon
              sx={{
                mr: { sm: 0.5, lg: 1, md: 1 },
                fontSize: { sm: "small", lg: "large", md: "14px" },
              }}
            />
            <FormattedMessage defaultMessage=" Restaurant" />
          </Box>
          <Box sx={{ ml: { sm: 3, lg: 18.5, md: 7.5 } }}>
            <WineBarIcon
              sx={{
                mr: { sm: 0.5, lg: 1, md: 1 },
                fontSize: { sm: "small", lg: "large", md: "14px" },
              }}
            />
            <FormattedMessage defaultMessage="Hotel bar" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
        <Box
          sx={{
            mt: 3,
            mb: { sm: 2, lg: 3 },
            fontSize: { sm: 9, lg: 17, md: 14 },
          }}
        >
          <FormattedMessage defaultMessage=" Arrival / Departure" />
        </Box>
        <Box sx={{ mb: 1, fontSize: { sm: 9, lg: 15, md: 12 } }}>
          <FormattedMessage defaultMessage="Check in: 15:00" />
        </Box>
        <Box sx={{ fontSize: { sm: 9, lg: 15, md: 12 } }}>
          <FormattedMessage defaultMessage="Check out: 12:00" />
        </Box>
        <Box
          sx={{
            mt: 3,
            mb: { sm: 2, lg: 3 },
            fontSize: { sm: 9, lg: 17, md: 14 },
          }}
        >
          <FormattedMessage defaultMessage="Contact" />
        </Box>
        <Box sx={{ mb: 1, fontSize: { sm: 9, lg: 15, md: 12 } }}>
          {item.name}
        </Box>
        <Box sx={{ mb: 3, fontSize: { sm: 9, lg: 15, md: 12 } }}>
          <FormattedMessage defaultMessage=" Telephone: +91 2239879999 | Fax: +91 2239879600" />
        </Box>
      </Box>
    </Box>
  );
}

export default InfoHotelDetails;
