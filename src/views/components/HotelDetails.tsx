import { Box, Button, Card, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Map2 from "./Map2";
import OverViewHotel from "./OverViewHotel";
import PhotosDetails from "./PhotosDetails";
import ReviewDetails from "./ReviewDetails";
import WifiIcon from "@mui/icons-material/Wifi";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PoolIcon from "@mui/icons-material/Pool";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PetsIcon from "@mui/icons-material/Pets";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import WineBarIcon from "@mui/icons-material/WineBar";
function HotelDetails({
  i,
  item,
  handleClick,
  openModule,
  setOpenModule,
}: any) {
  const [activeButton, setActiveButton] = useState<any>("info");
  useEffect(() => {
    setOpenModule("info");
  }, []);
  return (
    <Box sx={{ fontFamily: "sans-serif" }}>
      <Box
        sx={{
          display: "flex",
          width: "400px",
          ml: "35%",
          justifyContent: "space-evenly",
        }}
      >
        {activeButton === "Overview" ? (
          <Button
            sx={{
              color: "Black",
              fontWeight: 500,
              borderBottom: "1px solid Blue",
            }}
            onClick={() => {
              setOpenModule("Overview");
              setActiveButton("Overview");
            }}
          >
            Overview
          </Button>
        ) : (
          <Button
            sx={{ color: "grey" }}
            onClick={() => {
              setOpenModule("Overview");
              setActiveButton("Overview");
            }}
          >
            Overview
          </Button>
        )}
        {activeButton === "info" ? (
          <Button
            sx={{
              color: "Black",
              fontWeight: 500,
              borderBottom: "1px solid Blue",
            }}
            onClick={() => {
              setOpenModule("info");
              setActiveButton("info");
            }}
          >
            Info
          </Button>
        ) : (
          <Button
            sx={{ color: "grey" }}
            onClick={() => {
              setOpenModule("info");
              setActiveButton("info");
            }}
          >
            Info
          </Button>
        )}
        {activeButton === "Photos" ? (
          <Button
            sx={{
              color: "Black",
              fontWeight: 500,
              borderBottom: "1px solid Blue",
            }}
            onClick={() => {
              setOpenModule("Photos");
              setActiveButton("Photos");
            }}
          >
            Photos
          </Button>
        ) : (
          <Button
            sx={{ color: "grey" }}
            onClick={() => {
              setOpenModule("Photos");
              setActiveButton("Photos");
            }}
          >
            Photos
          </Button>
        )}
        {/* {activeButton === "Reviews" ? (
          <Button
            sx={{
              color: "Black",
              fontWeight: 500,
              borderBottom: "1px solid Blue",
            }}
            onClick={() => {
              setOpenModule("Reviews");
              setActiveButton("Reviews");
            }}
          >
            Reviews
          </Button>
        ) : (
          <Button
            sx={{ color: "grey" }}
            onClick={() => {
              setOpenModule("Reviews");
              setActiveButton("Reviews");
            }}
          >
            Reviews
          </Button>
        )} */}
      </Box>
      {openModule === "info" ? (
        <Box sx={{ border: "1px solid lightgrey", mb: 2 }}>
          <Box sx={{ fontWeight: 700, fontSize: 22, m: 2 }}>{item.name}</Box>

          <Box
            sx={{ pl: 4, pr: 4, pb: 4, textAlign: "justify", lineHeight: 2 }}
          >
            Commanding a sweeping view of the Arabian Sea in India's commercial
            capital, The InterContinental Marine Drive is setting standards for
            personalised service for business and leisure travellers. The
            experience begins as Mumbai's glittering skyline, aptly called the
            Queen's Necklace welcomes you. Step into the InterContinental Marine
            Drive and the warm, personalised attention helps you relax. The
            InterContinental Marine Drive is strategically located in the heart
            of Mumbai's business & financial district, 1.5 kms from Nariman
            Point and 3 kms from the Main Shopping Area of Colaba. Offering you
            the all-important luxury of saving time while on work.
            State-of-the-art business communication and meeting facilities
            further optimize time management.
          </Box>
          <Box sx={{ fontWeight: 600, ml: 2, fontSize: 20 }}>Location</Box>
          <Box sx={{ m: 2 }}>
            <Map2 />
          </Box>
          <Box>
            <Box sx={{ fontSize: 20, fontWeight: 600, ml: 2 }}>
              Top amenities
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}
            >
              <Box>
                <WifiIcon sx={{ fontSize: "large", mr: 1 }} />
                Wifi in lobby
              </Box>
              <Box>
                <NetworkWifiIcon sx={{ fontSize: "large", mr: 1 }} />
                Free WiFi
              </Box>
              <Box>
                <PoolIcon sx={{ fontSize: "large", mr: 1 }} />
                Pool
              </Box>
            </Box>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Box sx={{ ml: 26 }}>
                <AirlineSeatReclineExtraIcon
                  sx={{ fontSize: "large", mr: 1 }}
                />
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
              <Box sx={{ ml: 26 }}>
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
      ) : openModule === "Overview" ? (
        <OverViewHotel />
      ) : openModule === "Photos" ? (
        <PhotosDetails />
      ) : (
        <ReviewDetails />
      )}
      <Button
        sx={{
          ml: "90%",
          mt: -1,
          border: "1px solid grey",
          borderRadius: 3,
          mb: 1,
        }}
        onClick={() => {
          handleClick(i);
        }}
      >
        Close
      </Button>
    </Box>
  );
}

export default HotelDetails;
