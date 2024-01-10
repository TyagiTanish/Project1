import { useRef, useState } from "react";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PoolIcon from "@mui/icons-material/Pool";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import WineBarIcon from "@mui/icons-material/WineBar";
import GroupsIcon from "@mui/icons-material/Groups";
import '../../App.css'
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
const amenitie = [
    { id: "parking", label: "Parking", icon: <LocalParkingIcon /> },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon /> },
    { id: "pool", label: "Pool", icon: <PoolIcon /> },
    { id: "roomService", label: "Room Service", icon: <RoomServiceIcon /> },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon /> },
    { id: "dryClean", label: "DryClean", icon: <DryCleaningIcon /> },
    { id: "bar", label: "Bar", icon: <WineBarIcon /> },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon /> },
    { id: "parking", label: "Parking", icon: <LocalParkingIcon /> },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon /> },
    { id: "pool", label: "Pool", icon: <PoolIcon /> },
    { id: "roomService", label: "Room Service", icon: <RoomServiceIcon /> },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon /> },
    { id: "dryClean", label: "DryClean", icon: <DryCleaningIcon /> },
    { id: "bar", label: "Bar", icon: <WineBarIcon /> },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon /> },
  ];
const HotelAmenities = () => {
  
  return (
    <>
 
    </>
  );
};
export default HotelAmenities;