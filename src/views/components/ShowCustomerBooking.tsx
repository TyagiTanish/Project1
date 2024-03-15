import React, { useEffect, useState } from "react";
import { Stack, Typography, Button, Chip, Box } from "@mui/material";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Card, CardContent, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ShowCustomerBooking() {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState<any>(window.outerWidth);

  useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
    };

    window.addEventListener("resize", handleWindowSize);
  });

  const { request } = useAuth();
  const [bookings, setBookings] = React.useState<any>([]);
  const fetchBookings = async () => {
    const result = await request.get("/getBookings");
    // console.log(result.data);
    setBookings(result.data);
  };

  React.useEffect(() => {
    fetchBookings();
  }, []);
  return (
    <>
      <Stack
        sx={{
          // p: 3,
          pt: 0,
          mt: 2,
          "& .MuiInputBase-root::-webkit-scrollbar": {
            width: "5px", // Adjust the width as needed
          },
        }}
        // alignItems={"center"}
        spacing={5}
        // width={"45%"}
        maxHeight={710}
        overflow={"auto"}
      >
        {/* <Divider /> */}

        {bookings?.map((item: any, index: any) => (
          <Card
            variant="outlined"
            // sx={{
            //   backgroundColor: "#f5f5f5",
            // }}
            sx={{ borderRadius: 2, minHeight: 180 }}
          >
            <CardContent>
              <Stack
                direction={"row"}
                // spacing={{ sm: 3, md: 5, lg: 10, xl: 8 }}
              >
                <Stack direction={"row"} spacing={3}>
                  {window?.outerWidth > 768 && (
                    <Box
                      component={"img"}
                      sx={{ width: "200px", borderRadius: 2 }}
                      src={`http://localhost:8000/${bookings[index]?.hotelId?.photo}`}
                    />
                  )}
                  <Stack textAlign={"left"} width={200}>
                    <Typography sx={{ fontSize: 20, fontFamily: "system-ui" }}>
                      {item?.hotelId?.hotelName}
                    </Typography>
                    <Typography sx={{ color: "gray", fontSize: 14 }}>
                      {item?.hotelId?.state}
                    </Typography>
                    <Typography sx={{ color: "gray", fontSize: 14 }}>
                      {`${item?.bookFrom?.split("T")[0]} - ${
                        item?.bookTo?.split("T")[0]
                      }`}
                    </Typography>
                    <Typography sx={{ color: "gray", fontSize: 14 }}>
                      {" "}
                      {`${item?.totalRooms} Room - ${item?.totalGuests} Guests`}
                    </Typography>
                  </Stack>
                </Stack>

                <Stack textAlign={"center"} padding={2}>
                  {" "}
                </Stack>

                <Stack
                  direction={"column"}
                  alignItems={"center"}
                  textAlign={"center"}
                  spacing={0.5}
                >
                  {/* <Typography fontWeight={"bolder"}>Payment Status</Typography> */}
                  {/* <Chip
                    color={
                      item?.paymentStatus === "unpaid" ? "error" : "success"
                    }
                    // fontSize={"small"}
                    sx={{ width: 56 }}
                    size="small"
                    label={item?.paymentStatus}
                  /> */}

                  <Typography fontWeight={"bold"} fontFamily={"system-ui"}>
                    Booking Id
                  </Typography>
                  <Typography fontFamily={"system-ui"}>{item?._id}</Typography>
                  <Stack direction={"row"}>
                    {" "}
                    <Typography alignSelf={"left"}>Payment Status- </Typography>
                    <Typography
                      color={item?.paymentStatus === "paid" ? "green" : " red"}
                    >
                      {item?.paymentStatus}
                    </Typography>
                  </Stack>

                  <Button
                    sx={{
                      textTransform: "none",
                      color: "red",
                      fontWeight: "bolder",
                    }}
                    onClick={() => {
                      navigate(`/profile/myBookings/${item._id}`);
                    }}
                  >
                    View Details
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  );
}

export default ShowCustomerBooking;
