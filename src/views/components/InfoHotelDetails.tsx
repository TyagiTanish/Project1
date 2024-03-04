import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
  createTheme,
} from "@mui/material";
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
import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import GroupsIcon from "@mui/icons-material/Groups";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";

import { useIntl, FormattedMessage } from "react-intl";




  /**
*  To display Information of a particular Hotels. Markdown is *InfoHotelDetails*.
*/
   
   

function InfoHotelDetails({ item }: any) {
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
    item.amenities.includes(String(i))
  );
  // console.log(ShowAmenities);
  return (
    <Box
      sx={{
        border: "1px solid lightgrey",
        mb: 2,
        width: { sm: "98%", lg: 950, md: 555 },
        borderRadius: 5,
      }}
    >
      <Box sx={{ fontWeight: 700, fontSize: { sm: 12, lg: 20, md: 16 }, m: 2 }}>
        {item.hotelName}
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
       
        <Box
          dangerouslySetInnerHTML={{ __html: item.discription }}
          sx={{ flex: 1, wordBreak: "break-word" }}
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
          sx={{
            fontSize: { sm: 12, lg: 20, md: 12 },
            fontWeight: 600,
            ml: 2,
            mb: 2,
          }}
        >
          <FormattedMessage defaultMessage="Top amenities" />
        </Box>
   
        <>
   
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
        </>
        
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
          {item.hotelName}
        </Box>
        <Box sx={{ mb: 3, fontSize: { sm: 9, lg: 15, md: 12 } }}>
          {/* <FormattedMessage defaultMessage=" Telephone: +91 2239879999 | Fax: +91 2239879600" /> */}
          <Typography>Telephone: +91{item.phone}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default InfoHotelDetails;
