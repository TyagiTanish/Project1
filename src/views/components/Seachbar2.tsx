import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DateRangePickers from "./DatePicker";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  RoomsAndGuests,
  searchDetails,
  userLocation,
} from "./redux/user/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import RoomSelection from "./RoomSelection";
import { enqueueSnackbar } from "notistack";
import SearchBarValidationPopper from "./searchBarValidationPopper";

/**
 *  Search Bar at the top of every page except HomePage which helps in searching Hotels. Markdown is *SearchBar2*.
 */
function Seachbar2() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [searchBarAnchorEl, setSearchBarAnchorEl] =
    React.useState<null | HTMLElement>(null);
  // const data: any = localStorage.getItem("Rooms&Guests");
  // let data = JSON.parse(data);

  // if (data !== null) {
  //   if (typeof data === "object" && !Array.isArray(data)) {
  //     data = [data];
  //   }
  // }

  const data = useSelector((state: any) => state?.userReducer?.RoomsAndGuests);
  const date = useSelector((state: any) => state.userReducer.date);

  const [rooms, setRooms] = React.useState<any>(
    data || [
      {
        Room: 1,
        guest: 1,
      },
    ]
  );

  const [guests, setGuests] = useState(data?.Guests != null ? data?.Guests : 1);
  const [render, setRender] = React.useState(0);
  const [totalRooms, setTotalRooms] = useState(
    data?.Rooms != null ? data?.Rooms : 0
  );
  const dispatch = useDispatch();

  // const search = localStorage.getItem("searchTerm");

  const search = useSelector((state: any) => state?.userReducer?.searchDetails);

  const [value, setValue] = useState<any>(search);
  // const search = useSelector((state: any) => state?.userReducer?.searchDetails);

  const [searchTerm, setSearchTerm] = useState<any>(search || "");
  const handleInputChange = (event: any) => {
    const { value } = event.target;
    dispatch(searchDetails(value));
  };

  const navigate = useNavigate();

  useEffect(() => {
    var result = 0;
    var totalRooms = 0;
    rooms.forEach((element: any) => {
      result = result + +element.guest;
      totalRooms = totalRooms + 1;
    });
    setTotalRooms(totalRooms);
    setGuests(result);
    setRooms(rooms);
    // localStorage.setItem("Rooms&Guests", JSON.stringify(rooms));
    dispatch(RoomsAndGuests(rooms));
  }, [render, rooms]);

  // localStorage.setItem("Rooms&Guests", JSON.stringify(rooms));

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      enqueueSnackbar("Geolocation not supported", { variant: "error" });
    }
  }
  function success(position: any) {
    const data: any = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    dispatch(userLocation(data));
    // localStorage.setItem("searchTerm", "around me");

    setSearchTerm("around me");
    dispatch(searchDetails(searchTerm));
    setValue("Around me");
  }
  function error() {}
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const [dates, setDates] = useState<any>("");
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    console.log(anchorEl2);
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl2);
  const id = open ? "simple-popper" : undefined;
  const handleCloseValidationPopper = (event: any) => {
    console.log(event);
    setSearchBarAnchorEl(searchBarAnchorEl ? null : event);
  };
  const handleClose = () => {
    setAnchorEl2(null);
  };
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          mb: "20px",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <TextField
          id="searchField"
          sx={{
            backgroundColor: "white",
            borderRadius: 3,
            mt: 1,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton
                  onClick={handleLocationClick}
                  sx={{
                    fontSize: { sm: "10px", lg: "15px" },
                    fontWeight: "bolder",
                    color: "black",
                  }}
                >
                  <MyLocationIcon />
                  <FormattedMessage defaultMessage="Near me" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder="Search by city,hotel or state"
          onChange={(e) => setSearchTerm(e.target.value)}
          defaultValue={searchTerm}
          value={searchTerm}
        />
        <SearchBarValidationPopper
          searchBarAnchorEl={searchBarAnchorEl}
          handleCloseValidationPopper={handleCloseValidationPopper}
          setSearchBarAnchorEl={setSearchBarAnchorEl}
        />
        {/* <DateRangePickers /> */}
        <Box sx={{ mt: 1 }}>
          <TextField
            sx={{ bgcolor: "white", width: 300 }}
            placeholder="Check in - Check out"
            onClick={handleClick2}
            value={date}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl2}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <DateRangePickers setDates={setDates} onClose={handleClose} />
            {/* <Typography sx={{ p: 2 }}></Typography> */}
          </Popover>
        </Box>

        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{
            bgcolor: "white",
            fontWeight: "bolder",
            mt: 1,
          }}
          // value={`${rooms.length} Room , ${guests} guest`}
          value={`${rooms.length} Room , ${guests} guest`}
          onClick={(event: any) => handleClick(event)}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#1ab64f",
            "&:hover": { bgcolor: "green" },
            color: "white",
            fontWeight: "bolder",
            height: 55,
            mt: 0.75,
            borderRadius: 1,
          }}
          onClick={() => {
            dispatch(searchDetails(searchTerm));
            // localStorage.setItem("searchTerm", searchTerm);
            if (searchTerm !== "") {
              navigate("/hotels");
            } else {
              const field = document.querySelector("#searchField");
              handleCloseValidationPopper(field);
            }
          }}
        >
          <FormattedMessage defaultMessage="Search" />
        </Button>
      </Stack>
      <RoomSelection
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        rooms={rooms}
        setRooms={setRooms}
        render={render}
        setRender={setRender}
      />
    </>
  );
}

export default Seachbar2;
