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
    console.log(position);
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
    <Box sx={{ marginLeft: "-120px", width: "100vw", mb: "30px" }}>
      <Typography sx={{ mt: 2, display: "flex", alignContent: "center" }}>
        <Box
          className="nearby"
          sx={{ marginTop: "-120px", marginLeft: "-60px" }}
        >
          <Box></Box>
        </Box>
        <TextField
          sx={{
            backgroundColor: "white",
            position: "relative",
            width: "30%",
            ml: "20%",
            height: "20%",
            mt: 2,
            borderRadius: 3,
          }}
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
            ),
          }}
          placeholder="Search by city,hote, or neighborhood"
          value={props.searchTerm}
          onChange={handleInputChange}
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
        {/* 
     <Button
       variant="contained"
       sx={{
         bgcolor: "green",
         "&:hover": { bgcolor: "#1ab64f" },
         color: "white",
         fontWeight: "bolder",
         height: "55px",
         width: "10%",
       
         mt: 2,
       }}
     >
       Search
     </Button> */}
      </Typography>
    </Box>
  );
}

export default Seachbar2;
