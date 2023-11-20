import { Box, Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Building1 from "./BuildingSvg";
import "react-datepicker/dist/react-datepicker.css";
import DateRangePickers from "./DatePicker";
import RoomSelection from "./RoomSelection";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useDispatch } from "react-redux";
import {userLocation} from './redux/user/userSlice'

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
},[render,rooms])
function handleLocationClick() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
}
function success(position:any) {
 
console.log("position",position);
 const data:any={
  latitude:position.coords.latitude,
  longitude:position.coords.longitude
 }
dispatch(userLocation(data))

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
          padding: "10px 0 32px",
        }}
      >
        <Typography sx={{ position: "absolute", ml: 50, mt: 2 }}>
          <Building1 />
        </Typography>

        <Typography sx={{ position: "absolute", ml: 140, mt: 2 }}>
          {" "}
          <Building1 />
        </Typography>
        <Box
          sx={{
            color: "white",
            fontWeight: "800",
            ml: 63,
            fontSize: "32px",
            position: "absolute",
            mt: 5,
          }}
        >
          Over 157,000 hotels and homes across 35 countries
        </Box>
        <Typography sx={{ mt: 9, display: "flex", alignContent: "center" }}>
          <TextField
            sx={{
              backgroundColor: "white",
              position:"relative",
              width: "30%",
              ml: "15%",
              height: "20%",
              mt: 2,
            }}
            placeholder="Search by city,hotel, or neighborhood"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start" >
                  <IconButton onClick={handleLocationClick} sx={{fontSize:'15px',fontWeight:'bolder',color:'black'}}  >
                    <MyLocationIcon />
                    Near me
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
         
          <Typography sx={{ position: "relative" }}>
            <DateRangePickers />
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            sx={{
              width: "15%",
              bgcolor: "white",
              ml: 0,
              height: "20%",
              mt: 2,
              fontWeight: "bolder",
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
              height: "55px",
              width: "10%",
              borderRadius: 0,
              mt: 2,
            }}
          >
            Search
          </Button>
        </Typography>
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
