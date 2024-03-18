import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Logo from "../../Logo/Logo";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ViewDetails from "./ViewDetails";
import UserViewRooms from "./Rooms/UserViewRooms";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { FormattedMessage } from "react-intl";

/**
 * To show Details of a specific hotel. Markdown is *Hotels*.
 */

function ViewDeal() {
  const { id } = useParams();
  const [filterData, setFilteredData] = useState<any>([]);
  // console.log(id);
  // const hotelId = useSelector((state: any) => state.userReducer.hotelId);
  // console.log(hotelId);
  const [hotels, sethotels] = useState<any>([]);
  const { request } = useAuth();

  const getHotels = async () => {
    try {
      const result = await request.get(`/getHotel/${id}`);
      sethotels(result.data);
    } catch (error) {
      console.log(error);
    }

    // console.log(hotels);
  };

  useEffect(() => {
    getHotels();
  }, []);

  useMemo(() => {
    setFilteredData(hotels);
    // console.log(filterData);
  }, [hotels]);

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
      <Stack overflow={"auto"} height={"90vh"}>
        <Stack spacing={8} direction={"row"} ml={10} mt={4}>
          <Box
            component="img"
            sx={{
              width: "20%",
              height: "auto",
            }}
            alt="The house from the offer."
            src={`http://localhost:8000/${filterData[0]?.photo}`}
          />
          <Stack direction={"column"} spacing={1}>
            <Typography sx={{ fontSize: 22 }}>
              {filterData[0]?.hotelName}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              <LocationOnIcon fontSize="small" />
              <Typography fontSize={14}>
                {filterData[0]?.city},{filterData[0]?.state}
              </Typography>
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
              <Typography sx={{ fontSize: 14 }}><FormattedMessage defaultMessage="Points Calendar"/></Typography>
            </Stack>
          </Stack>
        </Stack>

        {open && <ViewDetails hotels={hotels} />}
        <Stack
          direction={"row"}
          sx={{ fontSize: 10, color: "#0096FF", cursor: "pointer" }}
          spacing={0.5}
          onClick={handleOpen}
          justifyContent={"center"}
        >
          <Typography textAlign={"center"} fontSize={15}>
          <FormattedMessage defaultMessage="View Details"/>
          </Typography>
          {open ? (
            <KeyboardArrowUpIcon fontSize="small" />
          ) : (
            <KeyboardArrowDownIcon fontSize="small" />
          )}
        </Stack>
        <Divider sx={{ borderBottomWidth: 20 }} />
        <Box padding={1}>
          <UserViewRooms hotels={hotels} />
        </Box>
      </Stack>
    </>
  );
}

export default ViewDeal;
