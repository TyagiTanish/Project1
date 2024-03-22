import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { IconParkingCircle } from '@tabler/icons-react';
import { IconWifi } from '@tabler/icons-react';
import { IconSwimming } from '@tabler/icons-react';
import { IconHotelService } from '@tabler/icons-react';
import { IconBarbell } from '@tabler/icons-react';
import { IconWashMachine } from '@tabler/icons-react';
import { IconGlassGin } from '@tabler/icons-react';
import { IconUsersGroup } from '@tabler/icons-react';
import { FormattedMessage } from "react-intl";
function ViewDetails({ hotels }: any) {
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
    hotels[0].amenities.includes(String(i))
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
        <FormattedMessage defaultMessage="Description"/>  
        </Typography>
        <Typography
          sx={{ fontSize: { xl: 14, md: 12, sm: 11 }, letterSpacing: 1 }}
        >
          <Box
            dangerouslySetInnerHTML={{ __html: hotels[0]?.discription }}
            sx={{ flex: 1,wordBreak:'break-word' }}
          />
        </Typography>
        <Stack
          direction={"row"}
          spacing={12}
          sx={{ fontWeight: "bold", fontSize: { xl: 18, md: 18, sm: 15 } }}
        >
          <Typography sx={{ fontSize: { xl: 20, md: 16, sm: 15 } }}>
          <FormattedMessage defaultMessage=" Check-In"/>     
          </Typography>
          <Typography sx={{ fontSize: { xl: 20, md: 16, sm: 15 } }}>
          <FormattedMessage defaultMessage="Check-Out"/>         
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={9} alignItems={"center"}>
          <Stack direction={"row"} spacing={1}>
            <AccessTimeIcon fontSize="small" />
            <Typography sx={{ fontSize: { xl: 17, md: 15, sm: 15 } }}>
            <FormattedMessage defaultMessage="03:00 PM"/>          
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <AccessTimeIcon fontSize="small" />
            <Typography sx={{ fontSize: { xl: 17, md: 15, sm: 15 } }}>
            <FormattedMessage defaultMessage="12:00 PM"/>      
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
        <FormattedMessage defaultMessage="Amenities"/>     
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4, ml: { lg: -2, md: 0 } }}>
        {ShowAmenities.map((item) => (
          <Grid item xs={2} >
            <Stack sx={{ fontSize:{xl:'16px',md:'12px',sm:'12px'}}} direction={'column'} alignItems={'center'}>
              <Box fontSize='small'>{item.icon}
              </Box>
              {item.label}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ViewDetails;
