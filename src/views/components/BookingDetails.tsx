import React from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useParams } from "react-router-dom";
import { Stack, Typography, Button, Box, Divider } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function BookingDetails() {
  const [data, setData] = React.useState<any>([]);
  const id = useParams();
  const { request } = useAuth();
  const fetchBookings = async () => {
    const result = await request.get(`/getBookingDetails/${id.id}`);
    console.log(result.data[0]);
    setData(result.data[0]);
  };

  React.useEffect(() => {
    fetchBookings();
  }, []);

  const [screenSize, setScreenSize] = React.useState(window.outerWidth);
  React.useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
    };
    console.log("screenSize", screenSize);

    window.addEventListener("resize", handleWindowSize);
  });

  return (
    <>
      <Stack sx={{ m: 5 }}>
        <Typography sx={{ color: "green", fontSize: 30, fontWeight: 700 }}>
          Thanks for staying with us!
        </Typography>
        {/* <Button>Print</Button> */}
        <Stack
          border={"1px solid lightgray"}
          p={3}
          width={"70%"}
          alignSelf={"center"}
        >
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography sx={{ fontSize: 25, fontWeight: 600 }}>
              Booking Id
            </Typography>
            <span style={{ marginTop: 10 }}>
              {` Booked by ${data?.userId?.name} on ${
                data?.bookFrom?.split("T")[0]
              }`}
            </span>
          </Stack>
          <Typography sx={{ fontSize: 18 }}>{data?._id}</Typography>
          <Divider sx={{ width: "90%", alignSelf: "center", mt: 3 }} />
          <Divider sx={{ width: "90%", alignSelf: "center" }} />
          <Divider sx={{ width: "90%", alignSelf: "center" }} />
          {screenSize <= 768 ? (
            <Stack justifyContent={"space-between"} mt={3} spacing={3}>
              <Box>
                <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 2 }}>
                  Super OYO {data?.hotelId?.hotelName}
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                  {data?.hotelId?.hotelName}
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  {/* SCF 116/1, Near Raj Mahindra agency, Sec 58, Shahi Majra,
                  Phase 5, Mohali */}
                  {`${data?.hotelId?.city} - ${data?.hotelId?.pinCode}, ${data?.hotelId?.state}, ${data?.hotelId?.country}`}
                </Typography>
              </Box>
              <img
                style={{ width: 200 }}
                src={`http://localhost:8000/${data?.hotelId?.photo}`}
              />
            </Stack>
          ) : (
            <Stack direction={"row"} justifyContent={"space-between"} mt={3}>
              <Box>
                <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 3 }}>
                  Super OYO {data?.hotelId?.hotelName}
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
                src={`http://localhost:8000/${data?.hotelId?.photo}`}
              />
            </Stack>
          )}
          <Divider sx={{ width: "90%", alignSelf: "center", mt: 3 }} />
          <Divider sx={{ width: "90%", alignSelf: "center" }} />
          <Divider sx={{ width: "90%", alignSelf: "center" }} />
          {screenSize <= 768 ? (
            <>
              <Stack mt={3}>
                <Stack direction={"row"}>
                  <Stack>
                    <Typography>Primary Guest</Typography>
                    <Typography>{data?.userId?.name}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Check In</Typography>
                    <Typography>{data?.bookFrom?.split("T")[0]}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Check In Time</Typography>
                    <Typography>10:00 PM</Typography>
                  </Stack>
                </Stack>
                <Stack direction={"row"} mt={3}>
                  <Stack>
                    <Typography>Mobile Number</Typography>
                    <Typography>{data?.userId?.phone}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Check Out</Typography>
                    <Typography>{data?.bookTo?.split("T")[0]}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Check Out Time</Typography>
                    <Typography>11:00 AM</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack minWidth={"30%"} mt={3}>
                <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
                  {data?.totalDays} Night
                </Typography>
                <Stack
                  direction={"row"}
                  // justifyContent={"space-between"}
                  mt={3}
                  spacing={5}
                >
                  <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                    {data?.totalGuests} Guests
                  </Typography>
                  <Stack>
                    <Typography> {data?.totalRooms} Room</Typography>
                    {/* <Typography>Classic</Typography> */}
                  </Stack>
                </Stack>
              </Stack>
            </>
          ) : (
            <Stack direction={"row"} justifyContent={"space-between"} mt={3}>
              <Stack>
                <Stack direction={"row"} spacing={{ xl: 30, lg: 15, md: 3 }}>
                  <Stack>
                    <Typography>Primary Guest</Typography>
                    <Typography>{data?.userId?.name}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Check In</Typography>
                    <Typography>{data?.bookFrom?.split("T")[0]}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Check In Time</Typography>
                    <Typography>12:00 PM</Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={"row"}
                  mt={3}
                  spacing={{ xl: 30, lg: 15, md: 3 }}
                >
                  <Stack>
                    <Typography>Mobile Number</Typography>
                    <Typography>{data?.userId?.phone}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Check Out</Typography>
                    <Typography>{data?.bookTo?.split("T")[0]}</Typography>
                  </Stack>
                  <Stack>
                    <Typography>Check Out Time</Typography>
                    <Typography>11:00 AM</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack>
                <Typography sx={{ fontSize: 24, fontWeight: 700 }}>
                  {data?.totalDays} Night
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  mt={5}
                  spacing={5}
                >
                  <Typography sx={{ fontSize: 12 }}>
                    {" "}
                    {data?.totalGuests} Guests
                  </Typography>
                  <Stack>
                    <Typography> {data?.totalRooms} Room</Typography>
                    {/* <Typography>Classic</Typography> */}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          )}
          <Typography mt={3}>Email Address</Typography>
          <Typography>{data?.email}</Typography>
          <Divider sx={{ width: "90%", alignSelf: "center", mt: 3 }} />
          <Divider sx={{ width: "90%", alignSelf: "center" }} />
          <Divider sx={{ width: "90%", alignSelf: "center" }} />
          <Typography sx={{ mt: 3, fontSize: 16, fontWeight: 700 }}>
            Payment Details
          </Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ border: "1px solid lightgray", p: 2, mt: 3 }}
          >
            <Typography>Total Amount</Typography>
            <Stack direction={"row"}>
              <CurrencyRupeeIcon fontSize="small" />
              <Stack>
                {" "}
                <Typography>{data?.price}</Typography>
                {data?.paymentStatus === "unpaid" ? (
                  <Typography color={"red"} fontSize={"small"}>
                    {data?.paymentStatus}
                  </Typography>
                ) : (
                  <Typography fontSize={"small"}>
                    {data?.paymentStatus}
                  </Typography>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default BookingDetails;