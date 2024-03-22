import { Box, Grid, Stack } from "@mui/material";
import React from "react";




import { IconParkingCircle } from '@tabler/icons-react';
import { IconWifi } from '@tabler/icons-react';
import { IconSwimming } from '@tabler/icons-react';
import { IconHotelService } from '@tabler/icons-react';
import { IconBarbell } from '@tabler/icons-react';
import { IconWashMachine } from '@tabler/icons-react';
import { IconGlassGin } from '@tabler/icons-react';
import { IconUsersGroup } from '@tabler/icons-react';
function OverViewHotel({ item }: any) {
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
        width: { sm: 642, lg: 690, md: 880, xl: 880 },
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
