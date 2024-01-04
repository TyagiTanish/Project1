import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Logo from "./Logo";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ViewDetails from "./ViewDetails";
import UserViewRooms from "./UserViewRooms";
function ViewDeal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <>
      <Stack width={"99.9%"} boxShadow={3}>
        <Logo />
      </Stack>
      <Stack alignItems={"center"}>
        <Stack margin={6} spacing={8} direction={"row"} width={"90%"}>
          <Box
            component="img"
            sx={{
              width: "20%",
              height: "auto",
            }}
            alt="The house from the offer."
            src={require(`./pic2.jpg`)}
          />
          <Stack direction={"column"} spacing={1}>
            <Typography sx={{ fontSize: 22 }}>
              Hotel Mountain face by snow
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <LocationOnIcon fontSize="small" />
              <Typography fontSize={14}>Juhu Tara Road Mumbai</Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
              color={"#0096FF"}
              sx={{
                "&:hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              <CallIcon fontSize="small" />
              <Typography sx={{ fontSize: 14 }}>+91 22 6826 1234</Typography>
            </Stack>
            <Stack
              direction={"row"}
              spacing={1}
              color={"#0096FF"}
              sx={{
                "&:hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              <CalendarMonthIcon fontSize="small" />
              <Typography sx={{ fontSize: 14 }}>Points Calendar</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {open && <ViewDetails />}
      <Stack
        direction={"row"}
        sx={{ fontSize: 10, color: "#0096FF", cursor: "pointer" }}
        spacing={0.5}
        onClick={handleOpen}
        justifyContent={"center"}
      >
        <Typography textAlign={"center"} fontSize={15}>
          View Details
        </Typography>
        {open ? (
          <KeyboardArrowUpIcon fontSize="small" />
        ) : (
          <KeyboardArrowDownIcon fontSize="small" />
        )}
      </Stack>

      <Divider sx={{ borderBottomWidth: 20 }} />
      <UserViewRooms />
    </>
  );
}

export default ViewDeal;
