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

import Map2 from "../Map/Map2";

import { IconParkingCircle } from '@tabler/icons-react';
import { IconWifi } from '@tabler/icons-react';
import { IconSwimming } from '@tabler/icons-react';
import { IconHotelService } from '@tabler/icons-react';
import { IconBarbell } from '@tabler/icons-react';
import { IconWashMachine } from '@tabler/icons-react';
import { IconGlassGin } from '@tabler/icons-react';
import { IconUsersGroup } from '@tabler/icons-react';

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
    { id: "parking", label: "Parking", icon: <IconParkingCircle stroke={2} />, index: 0 },
    { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: 1 },
    { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: 2 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <IconHotelService stroke={2} />,
      index: 3,
    },
    { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: 4 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <IconWashMachine stroke={2} />,
      index: 5,
    },
    { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: 6 },
    { id: "meeting", label: "Meeting", icon: <IconUsersGroup stroke={2} />, index: "7" },
    { id: "parking", label: "Parking", icon: <IconParkingCircle stroke={2} />, index: 8 },
    { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: 9 },
    { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: 10 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <IconHotelService stroke={2} />,
      index: 11,
    },
    { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: 12 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <IconWashMachine stroke={2} />,
      index: 13,
    },
    { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: 14 },
    { id: "meeting", label: "Meeting", icon: <IconUsersGroup stroke={2} />, index: 15 },
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
        width: { sm: "98%", lg: 770, md: 980, xl: 960 },
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
