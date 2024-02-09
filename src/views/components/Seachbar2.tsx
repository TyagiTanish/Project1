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
import DateRangePickers from "./DatePicker";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { searchDetails, userLocation } from "./redux/user/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";






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
  const [rooms, setRooms] = React.useState<any>([{ Room: 1, guest: 1 }]);
  const [guests, setGuests] = useState(0);
  const [render, setRender] = React.useState(0);
  const dispatch = useDispatch();

  const search = useSelector((state:any)=>state.userReducer.searchDetails)
  
  const [searchTerm,setSearchTerm] = useState<any>(search||'');
  const handleInputChange = (event: any) => {
    const { value } = event.target;
    dispatch(searchDetails(value))
  };

  
  const data: any = localStorage.getItem("Rooms&Guests");
  const parsedData = JSON.parse(data);
  const navigate = useNavigate();
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
    const data: any = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    dispatch(userLocation(data));
  }
  function error() {
    console.log("Unable to retrieve your location");
  }

  
  return (
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
                <FormattedMessage defaultMessage="Near me"/>  
              </IconButton>
            </InputAdornment>
          ),
        }}
        placeholder="Search by city,hote, or neighborhood"
        onChange={(e)=>setSearchTerm(e.target.value)}
        defaultValue={search}
      />
      <DateRangePickers />
      <TextField
        id="outlined-basic"
        variant="outlined"
        sx={{
          bgcolor: "white",
          fontWeight: "bolder",
          mt: 1,
        }}
        // value={`${rooms.length} Room , ${guests} guest`}
        value={`${parsedData.Rooms} Room , ${parsedData.Guests} guest`}
        onClick={(event: any) => handleClick(event)}
      />
      <Button
              variant="contained"
              sx={{
                bgcolor: "#1ab64f",
                "&:hover": { bgcolor: "green" },
                color: "white",
                fontWeight: "bolder",
                height:55 ,
                mt:0.75,
               borderRadius: 1,
              }}
              onClick={() => {
                dispatch(searchDetails(searchTerm))
                navigate("./hotels");
              }}
            >
                <FormattedMessage defaultMessage="Search"/>  
              </Button>
    </Stack>
  );
}

export default Seachbar2;
