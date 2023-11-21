import { Box } from "@mui/material";
import React from "react";

function OverViewHotel() {
  return (
    <Box sx={{ p: 5, border: "1px solid lightgray", mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: 500,
          ml: 20,
          mb: 3,
          mt: -3,
        }}
      >
        <Box>Rating</Box>
        <Box>OYO Rating Index® based on 1729 reviews across the web</Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ fontSize: 22, fontWeight: 500 }}>9.0/10</Box>
        <Box sx={{ fontSize: 12, color: "gray" }}>Excellent</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: 2,
          maxWidth: "500px",
          ml: 20,
        }}
      >
        <Box>Wifi in lobby</Box>
        <Box>Free WiFi</Box>
        <Box>Pool</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: 2,
          maxWidth: "500px",
          ml: 20,
        }}
      >
        <Box>Spa</Box>
        <Box sx={{ ml: 6 }}>Parking</Box>
        <Box sx={{ ml: 1 }}>Pets</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: 2,
          maxWidth: "500px",
          ml: 20,
        }}
      >
        <Box sx={{ ml: 5 }}>A/C</Box>
        <Box sx={{ ml: 11 }}>Restaurant</Box>
        <Box sx={{ ml: 4 }}>Hotel bar</Box>
      </Box>
    </Box>
  );
}

export default OverViewHotel;
