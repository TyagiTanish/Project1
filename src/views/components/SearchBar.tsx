import { Box, Button, TextField, Typography } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import Building1 from "./BuildingSvg";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro/DesktopDateRangePicker";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { pickersLayoutClasses } from "@mui/x-date-pickers/PickersLayout";
import DateRangePickers from "./DatePicker";
import RoomSelection from "./RoomSelection";

function SearchBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [rooms, setRooms] = React.useState<any>([{ Room: 1, guest: 1 }]);
  const [guests, setGuests] = useState(0);
  const [render,setRender] = React.useState(0)
 

useEffect(()=>{
    var result=0;
    rooms.forEach((element:any) => {
        result = result + +element.guest
    })
    setGuests(result)
    setRooms(rooms);
},[render,rooms])


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
              width: "30%",
              ml: "20%",
              height: "20%",
              mt: 2,
            }}
            placeholder="Search by city,hote, or neighborhood"
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
        setRender = {setRender}
      />
    </>
  );
}

export default SearchBar;
