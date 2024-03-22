import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import { Stack } from "@mui/system";
import { IconParkingCircle } from '@tabler/icons-react';
import { IconWifi } from '@tabler/icons-react';
import { IconSwimming } from '@tabler/icons-react';
import { IconHotelService } from '@tabler/icons-react';
import { IconBarbell } from '@tabler/icons-react';
import { IconWashMachine } from '@tabler/icons-react';
import { IconGlassGin } from '@tabler/icons-react';
import { IconUsersGroup } from '@tabler/icons-react';
export default function HotelAmenities({ amenities }: any) {
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
  const ShowAmenities = amenitie.filter((item: any, index: any) =>
    amenities?.includes(String(item.index))
  );



  // console.log(ShowAmenities, amenities);

  return (
    <>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {ShowAmenities.map((item) => (
              <SwiperSlide  >
                    <Stack alignItems={"center"} fontSize={'small'} >
                      {item?.icon}
                      {item?.label}
                    </Stack>
              </SwiperSlide>
            ))}
          </Swiper>
    </>
  );
}
