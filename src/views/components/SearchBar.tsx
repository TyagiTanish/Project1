import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Building1 from "./BuildingSvg";
import "react-datepicker/dist/react-datepicker.css";
import DateRangePickers from "./DatePicker";
import RoomSelection from "./RoomSelection";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useDispatch, useSelector } from "react-redux";
import { searchDetails, userLocation } from "./redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { cleanFilterItem } from "@mui/x-data-grid/hooks/features/filter/gridFilterUtils";
function SearchBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const data: any = localStorage.getItem("Rooms&Guests");
  const parsedData = JSON.parse(data);
  const [rooms, setRooms] = React.useState<any>(
    parsedData || [{ Room: 1, guest: 1 }]
  );
  // const search = useSelector((state: any) => state.userReducer.searchDetails);
  const search = localStorage.getItem("searchTerm");
  const [value, setValue] = useState<any>();
  const [guests, setGuests] = useState(
    parsedData?.Guests != null ? parsedData?.Guests : 1
  );
  const [totalRooms, setTotalRooms] = useState(
    parsedData?.Rooms != null ? parsedData?.Rooms : 0
  );
  const [render, setRender] = React.useState(0);
  const [searchTerm, setSearchTerm] = useState<any>(search || "");
  const dispatch = useDispatch();
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
    localStorage.setItem("Rooms&Guests", JSON.stringify(rooms));
  }, [render, rooms]);
  // useMemo(() => {

  //   );
  // }, [guests]);
  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
    }
  }
  function success(position: any) {
    const data: any = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    dispatch(userLocation(data));
    localStorage.setItem("searchTerm", "around me");
    setSearchTerm("around me");
    setValue("Around me");
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
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
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
            sx={{
              alignItems: "center",
              textAlign: "center",
              width: { md: "100%", sm: "98%" },
            }}
            direction={"row"}
            zIndex={0}
          >
            <TextField
              sx={{ bgcolor: "white" }}
              placeholder="Search by city,hotel or state"
              onChange={(e) => setSearchTerm(e.target.value)}
              defaultValue={search}
              value={value}
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
            />
            <Box mt={-1}>
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
              onClick={() => {
                dispatch(searchDetails(searchTerm));
                localStorage.setItem("searchTerm", searchTerm);
                navigate("./hotels");
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
