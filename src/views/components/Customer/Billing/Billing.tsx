import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import moment from "moment";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import io from "socket.io-client";
import { useSelector } from "react-redux";

import PaymentDialogBox from "./paymentDialogBox";
import BillingDetailsCard from "./BillingDetailsCard";
import Loader from "./loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import UseRoomAndGuestQuantity from "../../../../Hooks/roomAndGuestQuantity/useRoomAndGuestQuantity";
import { FormattedMessage, useIntl } from "react-intl";
import PaymentMethods from "./PaymentMethods";
import MenuItem from "@mui/material/MenuItem";

import { SelectChangeEvent } from '@mui/material/Select';
/**
 * for entering details of a user and checking the payment , Markdown is *Billing*.
 */

const socket = io("http://localhost:8000", {
  transports: ["websocket", "polling", "flashsocket"],
});
export const dataContext = createContext<any>({});

const Billing = () => {
  const [hotelDetail, sethotelDetail] = useState<any>({});
  const [data, setData] = useState();
  const hotelId = useSelector((state: any) => state.userReducer.hotelId);
  const [selectedMethod, setSelectedMethod] = useState();
  const user = useSelector((state: any) => state.userReducer.user);
  const [roomDetails, setroomDetails] = useState<any>();
  const [totalRoomsAndGuests, setTotalRoomsAndGuests] = useState<any>();
  const [totalPrice, setTotalPrice] = useState<any>(0);
  const [RoomPrice, setRoomPrice] = useState(0);
  const { TotalRooms, TotalGuests } = UseRoomAndGuestQuantity();
  // const roomDetails = useSelector(
  //   (state: any) => state.userReducer.roomDetails
  // );
  const { request } = useAuth();
  const id = useParams();
  // console.log(id);
  const fetchHotel: any = async () => {
    try {
      const result = await request.get(`/getHotel/${id?.id}`);
      sethotelDetail(result?.data);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    fetchHotel();
  }, []);
  const [difference, setDifference] = useState<any>(null);
  // const roomDetails =
  useMemo(() => {
    hotelDetail[0]?.rooms?.map((item: any, i: any) => {
      if (item?._id === id.hid) {
        setroomDetails(item);
      }
    });

    // setroomDetails(roomDetails);
  }, [hotelDetail, id?.hid]);
  // const data: any = localStorage.getItem("Date");
  const date: any = useSelector((state: any) => state?.userReducer?.date);
  // var startdate: any = date?.slice(0, date?.indexOf("-")) || "";
  // var enddate: any = date?.slice(date?.indexOf("-") + 1, date?.length) || "";

  // if (data) {
  //   startdate = dayjs(JSON.parse(data).startDate);
  //   enddate = dayjs(JSON.parse(data).endDate);
  // }
  var startdate: any = useSelector((state: any) => state?.userReducer?.start);
  var enddate: any = useSelector((state: any) => state?.userReducer?.end);

  const calculateDifference = () => {
    // console.log(enddate.slice(6, 9), startdate.slice(4, 6));
    const startDateArray = startdate.split(" ");
    const startDay = parseInt(startDateArray[1]);
    const endDateArray = enddate.split(" ");
    const endDay = parseInt(endDateArray[1]);

    const diff = Number(endDay) - Number(startDay);
    // const duration = moment.duration(diff);

    setDifference({
      days: diff,
    });
    return diff;
  };
  useEffect(() => {
    if (date) {
      calculateDifference();
    }
  }, [date]);

  console.log(difference);

  let totalRooms;
  let totalGuests: any;

  // useEffect(() => {
  //   var result = 0;
  //   var Rooms = 0;
  //   parsedData.forEach((element: any) => {
  //     result = result + +element.guest;
  //     Rooms = Rooms + 1;
  //   });
  //   totalRooms = Rooms;
  //   totalGuests = result;
  // }, [totalRooms, totalGuests]);

  const [bookingId, setBookingId] = useState();
  const [result, setResult] = useState<any>({});
  const [displayLoader, setDisplayLoader] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [display, setDisplay] = useState(false);
  const [guest, setGuest] = useState<any>(false);
  const [submitButton, setSubmitButton] = useState(false);
  const navigate = useNavigate();
  const language = useSelector((state: any) => state?.userReducer?.locale);
  console.log("Language from Redux:", language); // Debugging

  const [age, setAge] = useState<string>(
    language === "en" ? "Indian Rupee ₹" : "Euro €"
  );
  console.log("Initial Age:", age); 
console.log()
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleCheckboxSubmit = () => {
    if (submitButton === true) {
      setSubmitButton(false);
    } else {
      setSubmitButton(true);
    }
  };
useMemo(()=>{
    const lang=  language === "en" ? "Indian Rupee ₹" : "Euro €";
    setAge(lang as string);

},[language])
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
    fullName: any;
    phone: any;
    email: any;
    guestName: string | undefined;
    guestEmail: string | undefined;
    currency:any | undefined
  }
  const intl = useIntl();
  const FormSchema = Yup.object().shape({
    fullName: Yup.string()
      .required(
        intl.formatMessage({ defaultMessage: "First Name is required" })
      )
      .min(3)
      .matches(
        /^[a-zA-Z]+(?: [a-zA-Z]+)?$/,
        intl.formatMessage({
          defaultMessage:
            "First Letter of name should be capital and name should be string",
        })
      ),
    email: Yup.string()
      .email(intl.formatMessage({ defaultMessage: "Invalid Email" }))
      .required(intl.formatMessage({ defaultMessage: "Email is Required" })),
    phone: Yup.string()
      .required()
      .min(
        10,
        intl.formatMessage({ defaultMessage: "Min length should be 10" })
      )
      .max(
        10,
        intl.formatMessage({ defaultMessage: "Max length should be 10" })
      )
      .matches(
        /^[789]\d{9}$/,
        intl.formatMessage({
          defaultMessage:
            "Phone No. must not contain any special character and should start with 9 , 7 or 8",
        })
      ),
      currency: Yup.string()
      .required("Curerency field is required")
     
     ,
    guestName: Yup.string()
      .matches(
        /^[a-zA-Z]+(?: [a-zA-Z]+)?$/,
        intl.formatMessage({
          defaultMessage:
            "First Letter of name should be capital and name should be string",
        })
      )
      .notRequired(),
    guestEmail: Yup.string()
      .email(intl.formatMessage({ defaultMessage: "Invalid Email" }))
      .notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any, User>({
    resolver: yupResolver(FormSchema),
  });

  const Payment = async (data: any) => {
    data.startdate = startdate;
    data.enddate = enddate;
    data.totalGuests = totalRoomsAndGuests?.guests;
    data.totalDays = difference?.days;
    data.totalPrice = totalPrice;
    data.totalRooms = totalRoomsAndGuests?.rooms;
    data.roomId = roomDetails?._id;
    data.price = RoomPrice;
    
    console.log(data);
    setData(data);
    if (user) {
      if (selectedMethod !== "a") {
        const value = await request.post("/bookRoom", { data, hotelId });
        setBookingId(value.data.bookingId);
        const result = {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          hotelId: hotelId,
          days: difference?.days,
          roomId: roomDetails?._id,
          startDate: startdate,
          endDate: enddate,
          guests: totalGuests,
        };
        setResult(result);
        try {
          const data = await request?.post("/paymentSuccess", {
            bookingId: value?.data?.bookingId,
            amount_captured: totalPrice,
            type: "cash",
          });
          if (data.data === "success") {
            enqueueSnackbar("success", { variant: "success" });
            navigate("/profile/myBookings");
            setSubmitButton(false);
          }
        } catch (error) {}
        setSubmitButton(false);
      } else {
        setDisplay(true);
      }
    } else {
      enqueueSnackbar(
        intl.formatMessage({ defaultMessage: "User not Login" }),
        { variant: "error" }
      );
      navigate("/login", {
        state: { from: `/billing/${id?.id}/${id?.hid}` },
      });
    }

    // socket.emit("send_Message", result);
  };
  useEffect(() => {
    socket.on("recieved", (data: any) => {});
  }, []);
  // const handleClick=()=>{
  //   socket.emit("response", true);
  // }

  return (
    <>
      {displayLoader ? (
        <Loader />
      ) : (
        <>
          <Box>
            <Stack
              direction={"row"}
              spacing={10}
              justifyItems={"center"}
              ml={{ sm: 10, md: 15, lg: 20, xl: 30 }}
              mt={10}
            >
              <Stack width={"40%"}>
                <form onSubmit={handleSubmit(Payment)}>
                  <Stack
                    border={"2px solid lightgray"}
                    borderRadius={"10px"}
                    p={2}
                  >
                    <Typography sx={{ fontWeight: "Bolder", mb: 1 }}>
                      <FormattedMessage defaultMessage="First Name *" />
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder={intl.formatMessage({
                        defaultMessage: "Enter your name",
                      })}
                      defaultValue={user?.name}
                      {...register("fullName")}
                      fullWidth
                    />
                    {errors.fullName?.message && (
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.fullName?.message.toString()}
                      </FormHelperText>
                    )}
                    <Typography sx={{ fontWeight: "Bolder", mb: 1, mt: 1 }}>
                      <FormattedMessage defaultMessage="Email *" />
                    </Typography>
                    <TextField
                      variant="outlined"
                      placeholder={intl.formatMessage({
                        defaultMessage: "Email",
                      })}
                      defaultValue={user?.email}
                      {...register("email")}
                      fullWidth
                    />
                    {errors.email?.message && (
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.email?.message.toString()}
                      </FormHelperText>
                    )}
                    <Typography sx={{ fontWeight: "Bolder", mb: 1, mt: 1 }}>
                      <FormattedMessage defaultMessage="Phone No. *" />
                    </Typography>

                    <TextField
                      // id="standard-password-input"
                      placeholder={intl.formatMessage({
                        defaultMessage: "Phone no.",
                      })}
                      {...register("phone")}
                      defaultValue={user?.phone}
                      // autoComplete="current-password"
                    />
                       <Typography sx={{ fontWeight: "Bolder", mb: 1, mt: 1 }}>
                      <FormattedMessage defaultMessage="Payment Currency *" />
                    </Typography>
                    {errors.phone?.message && (
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.phone?.message.toString()}
                      </FormHelperText>
                    )}
     <FormControl fullWidth>
      <Select
        id="demo-simple-select"
        value={age}
        {...register("currency")}
        onChange={handleChange}
       
      >
        <MenuItem value="Indian Rupee ₹">Indian Rupee ₹</MenuItem>
        <MenuItem value="Euro €">Euro €</MenuItem>
      </Select>
    </FormControl>
                    {errors.currency?.message && (
                      <FormHelperText sx={{ color: "red" }}>
                        {errors.currency?.message.toString()}
                      </FormHelperText>
                    )}
                    <Stack direction={"row"} ml={-1}>
                      <Checkbox onChange={handleCheckbox} />
                      <Typography sx={{ mt: 1 }}>
                        <FormattedMessage defaultMessage="Make this booking for someone else" />
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
                          <FormattedMessage defaultMessage="Guest Information" />
                        </Typography>
                        <Typography sx={{ fontWeight: "Bolder", mb: 1 }}>
                          <FormattedMessage defaultMessage="Guest name" />
                        </Typography>
                        <TextField
                          {...register("guestName")}
                          placeholder={intl.formatMessage({
                            defaultMessage: "Guest Name",
                          })}
                          variant="outlined"
                          fullWidth
                        />
                        {errors.guestName?.message && (
                          <FormHelperText sx={{ color: "red" }}>
                            {errors.guestName?.message.toString()}
                          </FormHelperText>
                        )}
                        <Typography sx={{ fontWeight: "Bolder", mb: 1, mt: 1 }}>
                          <FormattedMessage defaultMessage=" Guest email" />
                        </Typography>
                        <TextField
                          variant="outlined"
                          placeholder={intl.formatMessage({
                            defaultMessage: "Guest Email",
                          })}
                          {...register("guestEmail")}
                          fullWidth
                        />
                        {errors.guestEmail?.message && (
                          <FormHelperText sx={{ color: "red" }}>
                            {errors.guestEmail?.message.toString()}
                          </FormHelperText>
                        )}
                      </Box>
                    ) : null}
                  </Stack>
                  <Stack
                    border={"1px solid lightgrey"}
                    borderRadius={"10px"}
                    mt={2}
                    p={2}
                  >
                    {/* <Stack direction={"row"}>
                      {}
                      <Checkbox
                        onChange={handleCheckboxSubmit}
                        checked={submitButton}
                        sx={{ mt: -2 }}
                      />
                      <Typography mt={1}>
                        <FormattedMessage
                          defaultMessage="By proceeding with this booking, I agree to OYO's Terms
                        of Use and Privacy Policy."
                        />
                      </Typography>
                    </Stack> */}
                    <PaymentMethods
                      selectedMethod={selectedMethod}
                      setSelectedMethod={setSelectedMethod}
                      setDisplay={setDisplay}
                      TotalRooms={TotalRooms.current}
                      roomQuantity={roomDetails?.roomQuantity}
                    />
                    {TotalRooms.current > roomDetails?.roomQuantity ? (
                      <Button
                        type="submit"
                        sx={{
                          width: "40%",
                          m: 2,
                          textTransform: "none",
                        }}
                        color="error"
                        variant="contained"
                        disabled={
                          !selectedMethod ||
                          TotalRooms.current > roomDetails?.roomQuantity
                        }
                        // onClick={handleClick}
                      >
                        <FormattedMessage defaultMessage="Currently Unavailable" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        sx={{
                          width: "50%",
                          m: 2,
                          textTransform: "none",
                        }}
                        color="error"
                        variant="contained"
                        disabled={selectedMethod === "a" || !selectedMethod}
                      >
                        <FormattedMessage defaultMessage="Book Now" />
                      </Button>
                    )}
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
                  setTotalRoomsAndGuests={setTotalRoomsAndGuests}
                  totalRoomsAndGuests={totalRoomsAndGuests}
                  setTotalPrice={setTotalPrice}
                  totalPrice={totalPrice}
                  setRoomPrice={setRoomPrice}
                  calculateDifference={calculateDifference}
                  startdate={startdate}
                  enddate={enddate}
                />
              </Stack>
            </Stack>
          </Box>
          <dataContext.Provider value={data}>
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
              setTotalRoomsAndGuests={setTotalRoomsAndGuests}
              setTotalPrice={setTotalPrice}
              setRoomPrice={setRoomPrice}
              totalRoomsAndGuests={totalRoomsAndGuests}
              setSubmitButton={setSubmitButton}
              calculateDifference={calculateDifference}
              startdate={startdate}
              enddate={enddate}
            />
          </dataContext.Provider>
        </>
      )}
    </>
  );
};

export default Billing;
