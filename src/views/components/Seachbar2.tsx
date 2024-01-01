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
import { useDispatch } from "react-redux";
import { userLocation } from "./redux/user/userSlice";

function Seachbar2(props: any) {
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
  const handleInputChange = (event: any) => {
    const { value } = event.target;
    props.setSearchTerm(value);
    props.filterData(value);
  };

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
    direction={'row'}
      sx={{
        width: {md:"100vw",xl:'100vw',sm:'95vw'},
        mb: "20px",
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
      }}
    >
   
      <TextField
          sx={{
            backgroundColor: "white",
            borderRadius: 3,
            mt:1,
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
                  Near me
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder="Search by city,hote, or neighborhood"
          value={props.searchTerm}
          onChange={handleInputChange}
        />
          <DateRangePickers />    
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{
            bgcolor: "white",
            fontWeight: "bolder",
            mt:1
          }}
          value={`${rooms.length} Room , ${guests} guest`}
          onClick={(event: any) => handleClick(event)}
        />
 
    </Stack>
  );
}

export default Seachbar2;
