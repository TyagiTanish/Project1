import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
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
  const [isVisible, setIsVisible] = useState(false);

  const [guest, setGuest] = useState<any>(false);
  const [submitButton, setSubmitButton] = useState<any>(false);
  const handleCheckboxSubmit = () => {
    if (submitButton === true) {
      setSubmitButton(false);
    } else {
      setSubmitButton(true);
    }
  };
  const handleCheckbox = () => {
    if (guest === true) {
      setGuest(false);
      setIsVisible(!isVisible);
    } else {
      setGuest(true);
      setIsVisible(!isVisible);
    }
  };
  interface User {
    fullName: string;
    phone: string;
    quantity: string;
    bookFrom: string;
    bookTo: string;
    guests: string;
    email: string;
    guestName: string;
    guestEmail: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const Submit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <IconButton href="/" sx={{ ml: 2 }}>
        <Logo />
      </IconButton>
      <Stack direction={"row"} justifyContent={"space-evenly"}>
        {/* <Stack>
          <Box
            sx={{
              mt: { xl: 15, md: 14, sm: 10 },
              ml: { xl: 80, md: 35, sm: 20 },
            }}
          >
            {" "}
            <Link
              to="/hotels"
              style={{
                // fontSize: "18px",
                textDecoration: "none",
                color: "rgb(238, 42, 36)",
                // width: 50,
              }}
            >
              <Stack
                direction={"row"}
                // sx={{ width: { xl: "220px", md: "200px", sm: "180px" } }}
              >
                <ArrowBackIosNewIcon
                  sx={{
                    fontSize: { xl: 20, md: 16, sm: 14 },
                    mt: { xl: 0.5, md: 0.2, sm: 0.4 },
                    mr: { xl: 0.5, md: 0.5, sm: 0.5 },
                  }}
                />
                <Typography sx={{ fontSize: { xl: 20, md: 16, sm: 14 } }}>
                  Modify your Booking
                </Typography>
              </Stack>
            </Link>
            <Typography
              sx={{
                mt: 5,
                ml: { xl: 18, md: 14, sm: 16 },
                color: "rgb(211, 140, 23)",
              }}
            >
              🎉 Yay! you just saved ₹856 on this booking!
            </Typography>
            <Stack
              direction={"row"}
              sx={{ mt: 5, ml: 3, alignItems: "center" }}
            >
              <LooksOneIcon sx={{ fontSize: { xl: 24, md: 20 }, mt: -0.5 }} />
              <Typography
                sx={{
                  fontSize: { xl: 20, md: 18, sm: 16 },
                  fontWeight: "Bolder",
                }}
              >
                {" "}
                Enter Your Details
              </Typography>{" "}
            </Stack>
            <Typography
              sx={{ mt: 5, ml: 3, fontSize: { xl: 17, md: 15, sm: 13 } }}
            >
              We will use these details to share your booking information
            </Typography> */}
        {/* <form>
              <Stack direction={"row"} sx={{ m: 3, alignItems: "center" }}>
              <TextField
                variant="outlined"
                label="Full Name"
                {...register("fullName")}
                sx={{
                  fontWeight: "bolder",
                  width: { xl: "13vw", md: "22vw", sm: "20vw" },
                }}
              ></TextField>{" "}
              <Stack direction={"row"} sx={{ ml: { xl: 11, md: 5, sm: 3 } }}>
                <TextField
                  id="standard-select-currency"
                  select
                  defaultValue="IND"
                  variant="standard"
                  sx={{ mt: 2 }}
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
                  {...register("phone")}
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                />
              </Stack>
              </Stack>
              <Stack direction={"row"} sx={{ alignItems: "center" }}>
                <TextField
                  variant="outlined"
                  label="email"
                  {...register("email")}
                  sx={{ ml: 3, width: { xl: "20vw", md: "31vw" } }}
                ></TextField>
                <Button
                  variant="contained"
                  sx={{
                    ml: 2,
                    width: 200,
                    height: "50px",
                    backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)",
                  }}
                >
                  Verify
                </Button>
              </Stack>
            </form> */}
        {/* </Box> */}
        {/* 
          <Box></Box>
        </Stack> */}
        <Stack width={"40%"}>
          <form>
            <Stack border={"2px solid lightgray"} borderRadius={"10px"} p={2}>
              <Typography sx={{ fontWeight: "Bolder", mb: 1 }}>
                Full Name *
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your name"
                {...register("fullName")}
                fullWidth
              />
              <Typography sx={{ fontWeight: "Bolder", mb: 1, mt: 1 }}>
                Email *
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Email"
                {...register("email")}
                fullWidth
              />
              <Typography sx={{ fontWeight: "Bolder", mb: 1, mt: 1 }}>
                Phone No. *
              </Typography>
              {/* <Stack direction={"row"} borderRadius={1}>
                <TextField
                  id="standard-select-currency"
                  select
                  defaultValue="IND"
                  variant="outlined"
                  sx={{ borderRight: "1px solid lightgray" }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack> */}
              <TextField
                // id="standard-password-input"
                placeholder="Phone Number"
                {...register("phone")}

                // autoComplete="current-password"
              />
              <Stack direction={"row"} ml={-1}>
                <Checkbox onChange={handleCheckbox} />
                <Typography sx={{ mt: 1 }}>
                  Make this booking for someone else
                </Typography>
              </Stack>
              {guest === true ? (
                <Box
                  sx={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <Typography sx={{ fontWeight: "Bolder", mt: 3, mb: 2 }}>
                    Guest Information
                  </Typography>
                  <Typography sx={{ fontWeight: "Bolder", mb: 1 }}>
                    Guest name
                  </Typography>
                  <TextField
                    {...register("guestName")}
                    placeholder="Guest Name"
                    variant="outlined"
                    fullWidth
                  />
                  <Typography sx={{ fontWeight: "Bolder", mb: 1, mt: 1 }}>
                    Guest email
                  </Typography>
                  <TextField
                    variant="outlined"
                    placeholder="Guest Email"
                    {...register("guestEmail")}
                    fullWidth
                  />
                </Box>
              ) : null}
            </Stack>
            <Stack border={"1px solid lightgrey"} borderRadius={"10px"} mt={2}>
              <Stack direction={"row"}>
                <Checkbox onChange={handleCheckboxSubmit} />
                <Typography mt={1}>
                  By proceeding with this booking, I agree to OYO's Terms of Use
                  and Privacy Policy .
                </Typography>
              </Stack>
              <Button
                type="submit"
                onClick={handleSubmit(Submit)}
                sx={{
                  width: "30%",
                  m: 2,
                  background: `linear-gradient(135.46deg,#d11450,#df293a)`,
                  color: "white",
                }}
              >
                Book Now
              </Button>
            </Stack>
          </form>
        </Stack>
        <Stack>
          <Card sx={{ mb: 4 }}>
            <CardContent>Hello there</CardContent>
          </Card>
        </Stack>
      </Stack>
    </>
  );
};

export default Billing;
