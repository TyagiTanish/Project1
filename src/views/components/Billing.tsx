import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  IconButton,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  CardHeader,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import moment from "moment";

import React, { useEffect, useReducer, useState } from "react";

import { useForm } from "react-hook-form";
import Logo from "./Logo";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useAuth from "../../Hooks/useAuth/useAuth";
import io from "socket.io-client";
import { useSelector } from "react-redux";

import dayjs from "dayjs";

const socket = io("http://localhost:8000", {
  transports: ["websocket", "polling", "flashsocket"],
});
const Billing = () => {
  const [hotelDetail, sethotelDetail] = useState<any>({});
  const hotelId = useSelector((state: any) => state.userReducer.hotelId);
  const roomDetails = useSelector(
    (state: any) => state.userReducer.roomDetails
  );
  // console.log("Hotel Id", hotelId, "roomDetails", roomDetails);
  const { request } = useAuth();
  const fetchHotel: any = async () => {
    const result = await request.get(`/getHotel/${hotelId}`);
    console.log(result.data);
    sethotelDetail(result.data);
  };
  useEffect(() => {
    fetchHotel();
  }, []);
  // const currencies = [
  //   {
  //     value: "USA",
  //     label: "+1",
  //   },
  //   {
  //     value: "IND",
  //     label: "+91",
  //   },
  //   {
  //     value: "BTC",
  //     label: "฿",
  //   },
  //   {
  //     value: "JPY",
  //     label: "¥",
  //   },
  // ];
  const [difference, setDifference] = useState<any>(null);

  const data: any = localStorage.getItem("Date");
  var startdate: any = "";
  var enddate: any = "";
  if (data) {
    startdate = dayjs(JSON.parse(data).startDate);
    enddate = dayjs(JSON.parse(data).endDate);
  }

  const calculateDifference = () => {
    const diff = enddate.diff(startdate);
    const duration = moment.duration(diff);

    setDifference({
      days: duration.days() + 1,
    });
  };
  useEffect(() => {
    if (data) {
      calculateDifference();
    }
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [display,setDisplay]=useState(false);
  const [guest, setGuest] = useState<any>(false);
  const [submitButton, setSubmitButton] = useState(false);
  const [text,setText]=useState('Please wait , your request is preeceding')
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
  const roomsGuests: any = localStorage.getItem("Rooms&Guests");
  const totalRooms: any = JSON.parse(roomsGuests)?.Rooms;
  const totalGuests: any = JSON.parse(roomsGuests)?.Guests;
  // console.log(roomsGuests, totalRooms);

  interface User {
    fullName: any;
    phone: any;
    // quantity: string;
    // bookFrom: string;
    // bookTo: string;
    // guests: string;
    email: any;
    guestName: string | undefined;
    guestEmail: string | undefined;
  }
  const FormSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("First Name is required")
      .min(3)
      .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "should be a string"),
    email: Yup.string().email("invalid email !").required("Email is Required"),
    phone: Yup.string()
      .required("This field is required")
      .max(10, "Max length should be 10")
      .matches(/(?=.*[0-9])\w+/, "Phone No. must be a number"),
    guestName: Yup.string().notRequired(),
    guestEmail: Yup.string().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any, User>({
    resolver: yupResolver(FormSchema),
  });
  const totalPrice = roomDetails?.price * totalRooms * difference?.days;
  const Submit = (data: any) => {
    data.startdate = startdate;
    data.enddate = enddate;
    data.totalGuests = totalGuests;
    data.totalDays = difference?.days;
    data.totalPrice = totalPrice;
    data.totalRooms = totalRooms;
    data.roomId = roomDetails?.roomId;
    request.post("/bookRoom", data);
    const result = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      hotelId: hotelId,
    };
    console.log(result);

    socket.emit("send_Message",result);
    setDisplay(true);
  
  };

  useEffect(()=>{
      socket.on("recieved",(data:any)=>{
          // alert(data);
      })
     
  },[socket])
  return (
    <Box>
      <IconButton href="/" sx={{ ml: 2 }}>
        <Logo />
      </IconButton>
      <Stack
        direction={"row"}
        spacing={10}
        justifyItems={"center"}
        ml={{ sm: 10, md: 15, lg: 20, xl: 30 }}
      >
        <Stack width={"40%"}>
          <form onSubmit={handleSubmit(Submit)}>
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
              <FormHelperText sx={{ color: "red" }}>
                {/* {errors.fullName?.message} */}
                {errors.fullName &&
                  typeof errors.fullName === "string" &&
                  errors.fullName}
              </FormHelperText>
              <Typography sx={{ fontWeight: "Bolder", mb: 1, mt: 1 }}>
                Email *
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Email"
                {...register("email")}
                fullWidth
              />
              <FormHelperText sx={{ color: "red" }}>
                {/* {errors.fullName?.message} */}
                {errors.email &&
                  typeof errors.email === "string" &&
                  errors.email}
              </FormHelperText>
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
              <FormHelperText sx={{ color: "red" }}>
                {/* {errors.fullName?.message} */}
                {errors.phone &&
                  typeof errors.phone === "string" &&
                  errors.phone}
              </FormHelperText>
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
                <Checkbox onChange={handleCheckboxSubmit} sx={{ mt: -2 }} />
                <Typography mt={1}>
                  By proceeding with this booking, I agree to OYO's Terms of Use
                  and Privacy Policy.
                </Typography>
              </Stack>
              {submitButton ? (
                <Button
                  type="submit"
                  sx={{
                    width: "30%",
                    m: 2,
                    background: `linear-gradient(135.46deg,#d11450,#df293a)`,
                    color: "white",
                  }}
                >
                  Book Now
                </Button>
              ) : (
                <Button
                  type="submit"
                  onClick={handleSubmit(Submit)}
                  sx={{
                    width: "30%",
                    m: 2,
                    background: `lightgrey`,
                    color: "white",
                  }}
                  disabled
                >
                  Book Now
                </Button>
              )}
            </Stack>
          </form>
          {display && <Stack color={'red'} marginTop={3}>{text}</Stack>}
        </Stack>
        <Stack>
          <Card
            sx={{
              backgroundColor: "lightgrey",
            }}
          >
            <CardContent>
              <h3 style={{ marginBottom: "1rem" }}>
                {hotelDetail[0]?.hotelName}
              </h3>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack>
                  <Stack fontSize={{ sm: "small", md: "medium" }}>
                    {hotelDetail[0]?.city} - {hotelDetail[0]?.pinCode} ,
                    {hotelDetail[0]?.state}, {hotelDetail[0]?.country}
                  </Stack>
                  <Stack
                    mt={3}
                    textAlign={"left"}
                  >{` ${difference?.days} Night`}</Stack>
                </Stack>
                <Stack width={70}>
                  <img
                    src={`http://localhost:8000/${hotelDetail[0]?.photo}`}
                    alt="Hotel Image"
                    style={{ borderRadius: "10px", marginTop: "-1rem" }}
                  />
                </Stack>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                mt={3}
                fontSize={{ sm: "small", md: "medium" }}
              >
                <Stack>
                  {`${startdate.$d.toISOString().slice(0, 10)}`} /{" "}
                  {`${enddate.$d.toISOString().slice(0, 10)}`}
                </Stack>
                <Stack fontSize={{ sm: "small", md: "medium" }} ml={2}>
                  {totalRooms} Room {totalGuests} Guest
                </Stack>
              </Stack>
              <Stack textAlign={"left"} mt={3}>
                {roomDetails?.type}
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"} mt={3}>
                <Stack
                  fontSize={{ sm: "small", md: "medium" }}
                >{`Room price for ${difference?.days} Night X ${totalGuests} Guest `}</Stack>
                <Stack fontSize={{ sm: "small", md: "medium" }}>
                  {roomDetails?.price}
                </Stack>
              </Stack>

              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                mt={3}
                fontSize={{ sm: "small", md: "medium", lg: "large" }}
              >
                <Stack>Payable Amount</Stack>
                <Stack direction={"row"}>
                  <CurrencyRupeeIcon
                    sx={{
                      fontSize: { sm: "small", md: "medium", lg: "large" },
                    }}
                  />
                  {totalPrice}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </>

  );
};

export default Billing;
