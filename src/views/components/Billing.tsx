import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import Logo from "./Logo";

const Billing = () => {
  const currencies = [
    {
      value: "USA",
      label: "+1",
    },
    {
      value: "IND",
      label: "+91",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <>
    <IconButton href="/" ><Logo/></IconButton>
    <Stack>
      <Box sx={{ width: "60vw", mt: 10,ml:25 }}>
        {" "}
        <Link
          to="/hotels"
          style={{
            fontSize: "18px",
            textDecoration: "none",
            color: "rgb(238, 42, 36)",
            width:50
          }}
        >
          <Stack direction={"row"} sx={{width:'200px'}}>
            <ArrowBackIosIcon />
            Modify your Booking
          </Stack>
        </Link>
        <Typography sx={{ mt: 5, ml: 20, color: "rgb(211, 140, 23)" }}>
          🎉 Yay! you just saved ₹856 on this booking!
        </Typography>
        <Stack direction={"row"} sx={{ mt: 5, ml: 5, alignItems: "center" }}>
          <LooksOneIcon />{" "}
          <Typography sx={{ fontSize: 20, fontWeight: "Bolder" }}>
            {" "}
            Enter Your Details
          </Typography>{" "}
        </Stack>
        <Typography sx={{ mt: 5, ml: 5 }}>
          We will use these details to share your booking information
        </Typography>
        <Stack direction={"row"} sx={{ m: 5 ,alignItems:"center"}}>
          <TextField
            variant="outlined"
            label="Full Name"
            sx={{ fontWeight: "bolder" }}
          ></TextField>{" "}
          <Stack direction={"row"} sx={{ml:15}} >
            <TextField
              id="standard-select-currency"
              select
              defaultValue="IND"
              variant="standard"
              sx={{ width: 60,mt:2}}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-password-input"
              label="Phone Number"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
          </Stack>
        </Stack>
        <Stack direction={"row"} sx={{alignItems:'center'}} >
          <TextField variant="outlined" label="email" sx={{ml:5,width:'20vw'}} ></TextField>
          <Button variant="contained" sx={{ml:2,width:200,height:'50px',backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)"}}>Verify</Button>
        </Stack>
        </Box>

        <Box></Box>
      </Stack>
    </>
  );
};

export default Billing;
