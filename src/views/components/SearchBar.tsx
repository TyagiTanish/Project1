import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Building1 from "./BuildingSvg";
import "react-datepicker/dist/react-datepicker.css";
import DateRangePickers from "./DatePicker";
import RoomSelection from "./RoomSelection";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useDispatch } from "react-redux";
import { userLocation } from "./redux/user/userSlice";

function SearchBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [rooms, setRooms] = React.useState<any>([{ Room: 1, guest: 1 }]);
  const [guests, setGuests] = useState(0);
  const [render, setRender] = React.useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    var result = 0;
    rooms.forEach((element: any) => {
      result = result + +element.guest;
    });
    setGuests(result);
    setRooms(rooms);
  }, [render, rooms]);
  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }
  function success(position: any) {
    console.log("position", position);
    const data: any = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    dispatch(userLocation(data));

    // Make API call to OpenWeatherMap
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(135.46deg,#d11450,#df293a)`,
          width: "100%",
          height: 250,
          display: "flex",
          justifyContent: "center",
          padding: "10px 0 32px",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          position={"absolute"}
          ml={20}
          width={{ lg: "90%", sm: "79%" }}
        >
          <Typography sx={{ mt: 2 }}>
            <Building1 />
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Building1 />
          </Typography>
        </Stack>
        <Stack direction={"column"} justifyContent={"center"} alignItems={"center"} >
          <Box
            sx={{
              color: "white",
              fontWeight: "800",
              fontSize: { lg: "32px", sm: "24px" },
              textAlign: "center",
              zIndex: "0",
            }}
          >
            Over 157,000 hotels and homes across 35 countries
          </Box>
          <Stack
            sx={{ alignItems: "center", textAlign: "center",width:{md:'100%',sm:'98%'}  }}
            direction={"row"}
            zIndex={0}
          >
            <TextField
              sx={{ bgcolor: "white" }}
              placeholder="Search by city,hotel, or neighborhood"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={handleLocationClick}
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bolder",
                        color: "black",
                      }}
                    >
                      <MyLocationIcon />
                      Near me
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Box marginTop={-1}>
              <DateRangePickers />
            </Box>
            <TextField
              id="outlined-basic"
              variant="outlined"
              sx={{
                ml: 0,
                fontWeight: "bolder",
                bgcolor: "white",
              }}
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
                height: "100%",
                borderRadius: 0,
              }}
            >
              Search
            </Button>
          </Stack>
        </Stack>
      </Box>
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

export default SearchBar;
