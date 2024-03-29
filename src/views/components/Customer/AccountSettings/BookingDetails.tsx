import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useParams } from "react-router-dom";
import {
  Stack,
  Typography,
  Button,
  Box,
  Divider,
  Chip,
  Tooltip,
  Icon,
  IconButton,
} from "@mui/material";
import EuroIcon from "@mui/icons-material/Euro";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import BookingProgress from "./ProgressBar";
import RecieptDialogBox from "../../HotelOwner/Rooms/Booking/RecieptDialogBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LinearIndeterminate from "../../HotelOwner/Rooms/Booking/LoaderBeforeReciept";
import { FormattedMessage } from "react-intl";

import { useSelector } from "react-redux";

function BookingDetails() {
  const lang = useSelector((state: any) => state?.userReducer?.locale);
  const [data, setData] = React.useState<any>([]);
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = useState<any>(null);
  const [loader, setLoader] = React.useState(false);
  const id = useParams();
  const { request } = useAuth();
  const fetchBookings = async () => {
    if (Object.keys(id).length === 0) {
      const result = await request.get(`/getData`);
      setData(result.data);
    } else {
      const result = await request.get(`/getBookingDetails/${id.id}`);

      setData(result.data[0]);
    }
  };

  React.useMemo(() => {
    fetchBookings();
  }, [id.id]);

  const [screenSize, setScreenSize] = React.useState(window.outerWidth);
  React.useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
    };
    // console.log("screenSize", screenSize);

    window.addEventListener("resize", handleWindowSize);
  });

  const handleClickOpen = async (data: any) => {
    setLoader(true);
    const buffer = (
      await request.get("/viewReciept", {
        responseType: "blob",
        params: { bookingId: id?.id },
      })
    ).data;
    setDisplay(buffer);
    setTimeout(() => {
      setLoader(false);
      setOpen(true);
    }, 2000);
  };

  return (
    <>
      <Stack sx={{ m: 5 }}>
        <Box sx={{ mb: -3 }}>
          {loader && (
            <Box sx={{ mt: -3, ml: -10 }}>
              <LinearIndeterminate />
            </Box>
          )}
        </Box>
        <Stack
          border={"1px solid lightgray"}
          p={3}
          pt={0}
          // width={{ sm: "93.5%" }}
          alignSelf={"center"}
          ml={{ sm: -10 }}
          marginTop={0}
          overflow={"auto"}
          // height={680}
        >
          <Stack justifyContent={"flex-end"} direction={"row"}>
            <Tooltip title="View reciept" sx={{ cursor: "pointer" }}>
              <IconButton sx={{ borderRadius: 1 }} onClick={handleClickOpen}>
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
          </Stack>

          {data?.paymentStatus === "unpaid" ? (
            <BookingProgress step={1} />
          ) : (
            <BookingProgress step={2} />
          )}

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography sx={{ fontSize: 20, fontWeight: 600 }} mt={5}>
              <FormattedMessage defaultMessage="Booking Id" />
            </Typography>
            <span style={{ marginTop: 14, fontWeight: "bold" }}>
              {` Booked by ${data?.userId?.name} on ${
                data?.bookFrom?.split("T")[0]
              }`}
            </span>
          </Stack>
          <Typography sx={{ fontSize: 16 }}>{data?._id}</Typography>
          <Divider sx={{ borderBottomWidth: 2.5, mt: 3 }} />
          {/* <Divider sx={{ width: "100%", alignSelf: "center" }} />
          <Divider sx={{ width: "100%", alignSelf: "center" }} /> */}
          {screenSize <= 768 ? (
            <Stack justifyContent={"space-between"} mt={3} spacing={3}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack>
                  <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 2 }}>
                    <FormattedMessage defaultMessage="Super OYO " />{" "}
                    {data?.hotelId?.hotelName}
                  </Typography>
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                    {data?.hotelId?.hotelName}
                  </Typography>
                  <Typography sx={{ fontSize: 12 }}>
                    {/* SCF 116/1, Near Raj Mahindra agency, Sec 58, Shahi Majra,
                  Phase 5, Mohali */}
                    {`${data?.hotelId?.city} - ${data?.hotelId?.pinCode}, ${data?.hotelId?.state}, ${data?.hotelId?.country}`}
                  </Typography>
                </Stack>
                <img
                  style={{ width: 150 }}
                  src={`http://192.168.1.114:8000/${data?.hotelId?.photo}`}
                  alt="imag"
                />
              </Stack>
            </Stack>
          ) : (
            <Stack direction={"row"} justifyContent={"space-between"} mt={3}>
              <Box>
                <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 3 }}>
                  <FormattedMessage defaultMessage="Super OYO " />{" "}
                  {data?.hotelId?.hotelName}
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                  {data?.hotelId?.hotelName}
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  {`${data?.hotelId?.city} - ${data?.hotelId?.pinCode}, ${data?.hotelId?.state}, ${data?.hotelId?.country}`}
                </Typography>
              </Box>
              <img
                style={{ width: 200 }}
                src={`http://192.168.1.114:8000/${data?.hotelId?.photo}`}
                alt="phot"
              />
            </Stack>
          )}
          <Divider sx={{ borderBottomWidth: 2.5, mt: 3 }} />
          {screenSize <= 768 ? (
            <>
              <Stack mt={3}>
                <Stack direction={"row"}>
                  <Stack>
                    <Typography fontWeight={600}>
                      {" "}
                      <FormattedMessage defaultMessage="Primary Guest" />
                    </Typography>
                    <Typography>{data?.userId?.name}</Typography>
                  </Stack>
                  <Stack>
                    <Typography fontWeight={600}>
                      <FormattedMessage defaultMessage="Check In On" />
                    </Typography>
                    <Typography>{data?.bookFrom}</Typography>
                  </Stack>
                  <Stack>
                    <Typography fontWeight={600}>
                      <FormattedMessage defaultMessage="Check In Time" />
                    </Typography>
                    <Typography>
                      <FormattedMessage defaultMessage="10:00 PM" />
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} mt={3}>
                  <Stack>
                    <Typography fontWeight={600}>
                      <FormattedMessage defaultMessage="Mobile Number" />
                    </Typography>
                    <Typography>{data?.userId?.phone}</Typography>
                  </Stack>
                  <Stack>
                    <Typography fontWeight={600}>
                      <FormattedMessage defaultMessage="Check Out" />
                    </Typography>
                    <Typography>{data?.bookTo}</Typography>
                  </Stack>
                  <Stack>
                    <Typography fontWeight={600}>
                      <FormattedMessage defaultMessage="Check Out Time" />
                    </Typography>
                    <Typography>
                      <FormattedMessage defaultMessage="11:00 AM" />
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack minWidth={"30%"} mt={3}>
                <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
                  {data?.totalDays} <FormattedMessage defaultMessage="Night" />
                </Typography>
                <Stack
                  direction={"row"}
                  // justifyContent={"space-between"}
                  mt={3}
                  spacing={5}
                >
                  <Typography sx={{ fontSize: 16 }}>
                    {data?.totalGuests}{" "}
                    <FormattedMessage defaultMessage="Guests" />
                  </Typography>
                  <Stack>
                    <Typography>
                      {" "}
                      {data?.totalRooms}
                      <FormattedMessage defaultMessage="Room" />{" "}
                    </Typography>
                    {/* <Typography>Classic</Typography> */}
                  </Stack>
                </Stack>
              </Stack>
            </>
          ) : (
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              mt={3}
              // ml={10}
            >
              <Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Stack>
                    <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                      <FormattedMessage defaultMessage="Primary Guest" />
                    </Typography>
                    <Typography sx={{ fontSize: 15 }}>
                      {data?.userId?.name}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                      <FormattedMessage defaultMessage=" Check In On" />
                    </Typography>
                    <Typography sx={{ fontSize: 15 }}>
                      {data?.bookFrom}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                      <FormattedMessage defaultMessage="Check In Time" />
                    </Typography>
                    <Typography sx={{ fontSize: 15 }}>
                      {" "}
                      <FormattedMessage defaultMessage="12:00 PM" />{" "}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={"row"}
                  mt={3}
                  spacing={{ xl: 15, lg: 15, md: 3 }}
                >
                  <Stack>
                    <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                      <FormattedMessage defaultMessage="Mobile Number" />
                    </Typography>
                    <Typography sx={{ fontSize: 15 }}>
                      {data?.userId?.phone}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                      <FormattedMessage defaultMessage="Check Out" />
                    </Typography>
                    <Typography sx={{ fontSize: 15 }}>
                      {data?.bookTo}
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                      <FormattedMessage defaultMessage="Check Out Time" />
                    </Typography>
                    <Typography sx={{ fontSize: 15 }}>
                      <FormattedMessage defaultMessage=" 11:00 AM" />{" "}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack>
                <Typography sx={{ fontSize: 20, fontWeight: 700, ml: 6 }}>
                  {data?.totalDays}
                  <FormattedMessage defaultMessage="Night" />
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  mt={5}
                  spacing={5}
                  ml={3}
                >
                  <Typography sx={{ fontSize: 13 }}>
                    {" "}
                    {data?.totalGuests}{" "}
                    <FormattedMessage defaultMessage="Guests" />
                  </Typography>
                  <Stack>
                    <Typography sx={{ fontSize: 14 }}>
                      {" "}
                      {data?.totalRooms}{" "}
                      <FormattedMessage defaultMessage="Room" />
                    </Typography>
                    {/* <Typography>Classic</Typography> */}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          )}
          <Typography mt={3}>
            {" "}
            <FormattedMessage defaultMessage=" Email Address" />
          </Typography>
          <Typography>{data?.email}</Typography>
          <Divider sx={{ borderBottomWidth: 2.5, mt: 3 }} />
          <Typography sx={{ mt: 3, fontSize: 16, fontWeight: 700 }}>
            <FormattedMessage defaultMessage="Payment Details" />
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ border: "1px solid lightgray", p: 2, mt: 3 }}
          >
            <Typography fontWeight={"bolder"}>
              {" "}
              <FormattedMessage
                defaultMessage="Total Amount
            "
              />
            </Typography>
            <Stack direction={"row"} spacing={2} alignItems={"center"}>
              {lang === "en" ? (
                <Stack direction={"row"} alignItems={"center"}>
                  <CurrencyRupeeIcon fontSize="small" />
                  <Typography fontWeight={"bolder"} fontSize={"20px"}>
                    {data?.price}
                  </Typography>
                </Stack>
              ) : (
                <Stack direction={"row"} alignItems={"center"}>
                  <EuroIcon fontSize="small" />

                  <Typography fontWeight={"bolder"} fontSize={"20px"}>
                    {(data?.price / 90).toFixed(1)}
                  </Typography>
                </Stack>
              )}
              <Chip
                color={data?.paymentStatus === "unpaid" ? "error" : "success"}
                // fontSize={"small"}
                size="small"
                label={data?.paymentStatus}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {open && (
        <RecieptDialogBox pdfBuffer={display} open={open} setOpen={setOpen} />
      )}
    </>
  );
}

export default BookingDetails;
