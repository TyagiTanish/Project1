import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import HotelAmenities from "./HotelAmenities";

function HotelInfo(props: any) {
  return (
    <>
      <Stack spacing={4}>
        {" "}
        <Box
          sx={{ fontWeight: "bold", fontSize: 22 }}
          justifyItems={"space-evenly"}
        >
         Location Info:
        </Box>
        <Stack direction={'row'} justifyContent={'space-evenly'}>
          {" "}
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              City:
            </Typography>
            <Typography>{props.toGet.city}</Typography>
          </Stack>
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                State:
            </Typography>
            <Typography>{props.toGet.state}</Typography>
          </Stack>
        
        </Stack>
        <Stack direction={'row'} justifyContent={'space-evenly'}>
          {" "}
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                Country
            </Typography>
            <Typography>{props.toGet.country}</Typography>
          </Stack>
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                Pin Code
            </Typography>
            <Typography>{props.toGet.pinCode}</Typography>
          </Stack>
        
        </Stack>
      </Stack>
      <Stack  spacing={2}>
        {" "}
        <Box
          sx={{ fontWeight: "bold", fontSize: 22 }}
          justifyItems={"space-evenly"}
        >
            Owner Details:
        </Box>
        <Stack></Stack>
        <Stack direction={'row'} justifyContent={'space-evenly'}>
          {" "}
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                Owner Name:
            </Typography>
            <Typography>{props.toGet.ownerName}</Typography>
          </Stack>
          <Stack spacing={1} direction={"column"} >
            <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
              Owner Email:
            </Typography>
            <Typography>{props.toGet.ownerEmail}</Typography>
          </Stack>
        
        </Stack>
        
        </Stack>
        {/* <HotelAmenities/> */}
    </>
  );
}

export default HotelInfo;
