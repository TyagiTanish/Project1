import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Card, CardContent, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ShowCustomerBooking() {
  const navigate = useNavigate();

  const { request } = useAuth();
  const [bookings, setBookings] = React.useState<any>([]);
  const fetchBookings = async () => {
    const result = await request.get("/getBookings");
    console.log(result.data);
    setBookings(result.data);
  };

  React.useEffect(() => {
    fetchBookings();
  }, []);
  return (
    <>
      <Stack
        border={"1px solid lightgray"}
        sx={{
          p: 3,
          ml: { sm: 9, md: 12, lg: 15, xl: 18 },
          m: 5,
          textAlign: "center",
        }}
        alignItems={"center"}
        spacing={2}
        width={"70%"}
      >
        <Typography sx={{ fontWeight: 900, fontSize: "22px" }}>
          Booking History
        </Typography>
        <Divider />

        {bookings?.map((item: any, index: any) => (
          <Card
            variant="outlined"
            // sx={{
            //   backgroundColor: "#f5f5f5",
            // }}
          >
            <CardContent>
              <Stack
                direction={"row"}
                spacing={{ sm: 3, md: 5, lg: 10, xl: 25 }}
              >
                <img
                  style={{ width: "130px" }}
                  src={`http://localhost:8000/${bookings[index]?.hotelId?.photo}`}
                />
                <Stack>
                  <Typography sx={{ fontWeight: "bolder", fontSize: "large" }}>
                    {item?.hotelId?.hotelName}
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    {`${item?.bookFrom?.split("T")[0]} - ${
                      item?.bookTo?.split("T")[0]
                    }`}
                  </Typography>
                  <Typography sx={{ color: "gray" }}>
                    {" "}
                    {`${item?.totalRooms} Room - ${item?.totalGuests} Guests`}
                  </Typography>
                </Stack>
                <Typography sx={{ fontWeight: "bold" }}>
                  {item?._id.slice(-8)}
                </Typography>
                <Stack>
                  <Typography>Payment</Typography>
                  <Typography>{item?.paymentStatus}</Typography>
                  <Button
                    sx={{ textTransform: "none", color: "red" }}
                    onClick={() => {
                      navigate(`/myBookings/${item._id}`);
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
