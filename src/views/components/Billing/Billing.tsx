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
  Divider,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import moment from "moment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import React, { useEffect, useReducer, useState } from "react";

import { useForm } from "react-hook-form";
import Logo from "../Logo";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useAuth from "../../../Hooks/useAuth/useAuth";
import io from "socket.io-client";
import { useSelector } from "react-redux";

import dayjs from "dayjs";
import { format } from "date-fns";
import PaymentDialogBox from "./paymentDialogBox";
import BillingDetailsCard from "./BillingDetailsCard";
import Loader from "./loader/Loader";


const socket = io("http://localhost:8000", {
  transports: ["websocket", "polling", "flashsocket"],
});
const Billing = () => {
 
  const [hotelDetail, sethotelDetail] = useState<any>({});
  const hotelId = useSelector((state: any) => state.userReducer.hotelId);
  const user = useSelector((state:any)=>state.userReducer.user)
  const roomDetails = useSelector(
    (state: any) => state.userReducer.roomDetails
  );
  // console.log("Hotel Id", hotelId, "roomDetails", roomDetails);
  const { request } = useAuth();


  const fetchHotel: any = async () => {                           //function to get all hotel details 
    const result = await request.get(`/getHotel/${hotelId}`);     
    sethotelDetail(result.data);
  };
  useEffect(() => {
    fetchHotel();
  }, []);
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
const [bookingId,setBookingId] = useState();
const [result,setResult]=useState<any>({});
  const [displayLoader, setDisplayLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [display, setDisplay] = useState(false);
  const [guest, setGuest] = useState<any>(false);
  const [submitButton, setSubmitButton] = useState(false);
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
  const Submit = async (data: any) => {
    data.startdate = startdate;
    data.enddate = enddate;
    data.totalGuests = totalGuests;
    data.totalDays = difference?.days;
    data.totalPrice = totalPrice;
    data.totalRooms = totalRooms;
    data.roomId = roomDetails?.roomId;
    const value = await request.post("/bookRoom", { data, hotelId });
    setBookingId(value.data.bookingId)
    const result = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      hotelId: hotelId,
      days:difference?.days,
      roomId:roomDetails?.roomId,
      startDate:startdate,
      endDate:enddate,
      guests:totalGuests
    };
    setResult(result)
    setDisplay(true);
    // socket.emit("send_Message", result);
  };

  useEffect(() => {
    socket.on("recieved", (data: any) => {});
  }, [socket]);
  // const handleClick=()=>{
  //   socket.emit("response", true);
  // }
  return (
    <>
      {displayLoader ? (<Loader />):(
        <>
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
                  defaultValue={user?.name}
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
                  defaultValue={user?.email}
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
                  defaultValue={user?.phone}
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
              <Stack
                border={"1px solid lightgrey"}
                borderRadius={"10px"}
                mt={2}
              >
                <Stack direction={"row"}>
                  <Checkbox onChange={handleCheckboxSubmit} sx={{ mt: -2 }} />
                  <Typography mt={1}>
                    By proceeding with this booking, I agree to OYO's Terms of
                    Use and Privacy Policy.
                  </Typography>
                </Stack>
                <Button
                  type="submit"
                  sx={{
                    width: "30%",
                    m: 2,
                    textTransform:'none'
                  }}
                  color="error"
                  variant="contained"
                  disabled={!submitButton}
                  // onClick={handleClick}
                >
                 Pay Now
                </Button>
              </Stack>
            </form>
            {/* {display && (
            <Stack color={"red"} marginTop={3}>
              {text}
            </Stack>
          )} */}
          </Stack>
          <Stack>
            <BillingDetailsCard
              hotelDetail={hotelDetail}
              roomDetails={roomDetails}
              totalGuests={totalGuests}
              totalRooms={totalRooms}
              totalPrice={totalPrice}
            />
          </Stack>
        </Stack>
      </Box>
      <PaymentDialogBox
      display={display}
        setDisplay={setDisplay}
        hotelDetail={hotelDetail}
        roomDetails={roomDetails}
        totalGuests={totalGuests}
        totalRooms={totalRooms}
        totalPrice={totalPrice}
        setDisplayLoader={setDisplayLoader}
        bookingId={bookingId}
        result={result}
      />
      </>
      )}
    </>
  );
};

export default Billing;
