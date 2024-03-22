import { useRef, useState } from "react";
import { IconParkingCircle } from '@tabler/icons-react';
import { IconWifi } from '@tabler/icons-react';
import { IconSwimming } from '@tabler/icons-react';
import { IconHotelService } from '@tabler/icons-react';
import { IconBarbell } from '@tabler/icons-react';
import { IconWashMachine } from '@tabler/icons-react';
import { IconGlassGin } from '@tabler/icons-react';
import { IconUsersGroup } from '@tabler/icons-react';
import '../../App.css'
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
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
const HotelAmenities = () => {
  
  return (
    <>
 
    </>
  );
};
export default HotelAmenities;