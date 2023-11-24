import { Box, Button, Card, Typography, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";

import OverViewHotel from "./OverViewHotel";
import PhotosDetails from "./PhotosDetails";
import ReviewDetails from "./ReviewDetails";
import InfoHotelDetails from "./InfoHotelDetails";
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
    <Box sx={{ fontFamily: "sans-serif", Width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          width: "400px",
          ml: "30%",
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
      <Button
        sx={{ float: "right", borderRadius: 3, color: "black", mt: -4.8 }}
        onClick={() => {
          handleClick(i);
        }}
      >
        X
      </Button>
      {openModule === "info" ? (
        <InfoHotelDetails item={item} />
      ) : openModule === "Overview" ? (
        <OverViewHotel />
      ) : openModule === "Photos" ? (
        <PhotosDetails />
      ) : (
        <ReviewDetails />
      )}
    </Box>
  );
}

export default HotelDetails;
