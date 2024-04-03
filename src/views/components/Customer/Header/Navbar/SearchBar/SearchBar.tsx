import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Popover,
  Popper,
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
import {
  RoomsAndGuests,
  clearFilter,
  searchDetails,
  userLocation,
} from "../../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { cleanFilterItem } from "@mui/x-data-grid/hooks/features/filter/gridFilterUtils";
import SearchBarValidationPopper from "./searchBarValidationPopper";
import { FormattedMessage, useIntl } from "react-intl";
function SearchBar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [searchBarAnchorEl, setSearchBarAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const data: any = localStorage.getItem("Rooms&Guests");
  // let data = JSON.parse(data);

  // if (data !== null) {
  //   if (typeof data === "object" && !Array.isArray(data)) {
  //     data = [data];
  //   }
  // }
  const data = useSelector((state: any) => state?.userReducer?.RoomsAndGuests);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [dateValidationMessage, setDateValidationMessage] = useState(false);

  const handleClose = () => {
    setAnchorEl2(null);
  };
  // const data: any = localStorage.getItem("Rooms&Guests");
  // let parsedData = JSON.parse(data);

  // if (parsedData !== null) {
  //   if (typeof parsedData === "object" && !Array.isArray(parsedData)) {
  //     parsedData = [parsedData];
  //   }
  // }
  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);

  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    // console.log(anchorEl2);
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };

  const Open = Boolean(anchorEl2);
  const id = Open ? "simple-popper" : undefined;

  const [rooms, setRooms] = React.useState<any>(
    data !== null ? data : [{ Room: 1, guest: 1 }] || [{ Room: 1, guest: 1 }]
  );
  const search = useSelector((state: any) => state.userReducer.searchDetails);
  // const search = localStorage.getItem("searchTerm");
  const [value, setValue] = useState<any>(search || "");
  const [guests, setGuests] = useState(data?.Guests != null ? data?.Guests : 1);
  const [totalRooms, setTotalRooms] = useState(
    data?.Rooms != null ? data?.Rooms : 0
  );
  const [render, setRender] = React.useState(0);
  const [searchTerm, setSearchTerm] = useState<any>(search ? search : "" || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dates, setDates] = useState<any>("");
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
  }, [render, rooms, dispatch]);
  // useMemo(() => {

  // localStorage.setItem("Rooms&Guests", JSON.stringify(rooms));

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
    // localStorage.setItem("searchTerm", "around me");
    setSearchTerm("around me");
    dispatch(searchDetails(searchTerm));
    setValue("Around me");
    // Make API call to OpenWeatherMap
  }
  const intl = useIntl();
  const handleCloseValidationPopper = (event: any) => {
    if (event?.value === "") {
      setSearchBarAnchorEl(event);
    } else {
      if (date) {
        setSearchBarAnchorEl(null);
      } else {
        const datePicker = document?.querySelector("#datePicker");
        setMessage(
          intl.formatMessage({
            defaultMessage: "Please select a Check-In and Check-Out date",
          })
        );
        setSearchBarAnchorEl(datePicker || event);
      }
    }
  };
  const date = useSelector((state: any) => state.userReducer.date);

  useMemo(() => {
    if (date) {
      setSearchBarAnchorEl(null);
    }
  }, [date]);

  useMemo(() => {
    setSearchTerm(search ? search : "");
  }, [search]);

  function error() {}

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
            <FormattedMessage defaultMessage="Over 157,000 hotels and homes across 35 countries" />
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
              sx={{ bgcolor: "white", width: { lg: 400, md: 300 } }}
              id="searchField"
              placeholder={intl.formatMessage({
                defaultMessage: "Search by city,hotel or state",
              })}
              onChange={(e) => {
                setSearchTerm(e?.target?.value);
                const value: any = e?.target?.value;
                dispatch(searchDetails(value));
                const field = document.querySelector("#searchField");
                setMessage(" Please select a destination");
                handleCloseValidationPopper(field);
              }}
              defaultValue={searchTerm}
              value={searchTerm}
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
                      <FormattedMessage defaultMessage=" Near me" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <SearchBarValidationPopper
              searchBarAnchorEl={searchBarAnchorEl}
              handleCloseValidationPopper={handleCloseValidationPopper}
              setSearchBarAnchorEl={setSearchBarAnchorEl}
              message={message}
            />
            <Box mt={0}>
              <TextField
                id="datePicker"
                autoComplete="off"
                sx={{ bgcolor: "white", width: { lg: 400, md: 300 } }}
                placeholder={intl.formatMessage({
                  defaultMessage: "Check in - Check out",
                })}
                onClick={handleClick2}
                value={date}
              />
              <Popover
                id={id}
                open={Open}
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
                ml: 0,
                fontWeight: "bolder",
                bgcolor: "white",
                width: { lg: 300, md: 200 },
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
                width: 150,
              }}
              onClick={() => {
                if (searchTerm !== "") {
                  dispatch(searchDetails(searchTerm));

                  const field = document.querySelector("#searchField");
                  handleCloseValidationPopper(field);
                  if (date) {
                    dispatch(clearFilter());
                    navigate("/hotels");
                    window?.scroll(0, 0);
                  } else {
                    const datePicker = document?.querySelector("#datePicker");
                    setMessage(
                      intl.formatMessage({
                        defaultMessage:
                          "Please select a Check-In and Check-Out date",
                      })
                    );
                    handleCloseValidationPopper(datePicker);
                  }
                } else {
                  const searchField = document.querySelector("#searchField");
                  setMessage(
                    intl.formatMessage({
                      defaultMessage: " Please select a destination",
                    })
                  );
                  handleCloseValidationPopper(searchField);
                }
              }}
            >
              <FormattedMessage defaultMessage="Search" />
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
