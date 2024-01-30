import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import AddPhotoAlternateSharpIcon from "@mui/icons-material/AddPhotoAlternateSharp";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PoolIcon from "@mui/icons-material/Pool";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import WineBarIcon from "@mui/icons-material/WineBar";
import GroupsIcon from "@mui/icons-material/Groups";
import { Stack } from "@mui/system";
import { Card, CardContent } from "@mui/material";

export default function HotelAmenities({ amenities }: any) {
  const amenitie = [
    { id: "parking", label: "Parking", icon: <LocalParkingIcon />, index: 0 },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon />, index: 1 },
    { id: "pool", label: "Pool", icon: <PoolIcon />, index: 2 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <RoomServiceIcon />,
      index: 3,
    },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon />, index: 4 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <DryCleaningIcon />,
      index: 5,
    },
    { id: "bar", label: "Bar", icon: <WineBarIcon />, index: 6 },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon />, index: "7" },
    { id: "parking", label: "Parking", icon: <LocalParkingIcon />, index: 8 },
    { id: "wifi", label: "Wifi", icon: <NetworkWifiIcon />, index: 9 },
    { id: "pool", label: "Pool", icon: <PoolIcon />, index: 10 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <RoomServiceIcon />,
      index: 11,
    },
    { id: "gym", label: "Gym", icon: <FitnessCenterIcon />, index: 12 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <DryCleaningIcon />,
      index: 13,
    },
    { id: "bar", label: "Bar", icon: <WineBarIcon />, index: 14 },
    { id: "meeting", label: "Meeting", icon: <GroupsIcon />, index: 15 },
  ];
  const ShowAmenities = amenitie.filter((item: any, index: any) =>
    amenities?.includes(String(item.index))
  );

  console.log(ShowAmenities, amenities);

  return (
    <>
     
          <Swiper
            slidesPerView={3}
            spaceBetween={0}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {ShowAmenities.map((item) => (
              <SwiperSlide>
                <Card variant="outlined">
                  <CardContent>
                    <Stack alignItems={"center"} fontSize={'small'} >
                      {item?.icon}
                      {item?.label}
                    </Stack>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
    </>
  );
}
