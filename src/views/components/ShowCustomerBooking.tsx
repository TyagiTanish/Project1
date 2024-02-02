import React from "react";
import { Stack, Typography, Button, Chip } from "@mui/material";
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
        // border={"1px solid lightgray"}
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
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 35,
            color: "rgb(215, 0, 64)",
            fontFamily: "system-ui",
            mb: 3,
          }}
        >
          Booking History-
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
                <Stack direction={"row"} spacing={4}>
                  <img
                    style={{ width: "180px" }}
                    src={`http://localhost:8000/${bookings[index]?.hotelId?.photo}`}
                  />
                  <Stack textAlign={"left"}>
                    <Typography
                      sx={{ fontWeight: "bolder", fontSize: "large" }}
                    >
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
                </Stack>
                <Typography sx={{ fontWeight: "bold" }}>
                  {item?._id.slice(-8)}
                </Typography>
                <Stack direction={"row"} alignItems={"center"}>
                  {/* <Typography fontWeight={"bolder"}>Payment Status</Typography> */}
                  <Chip
                    color={
                      item?.paymentStatus === "unpaid" ? "error" : "success"
                    }
                    // fontSize={"small"}
                    sx={{ width: 56 }}
                    size="small"
                    label={item?.paymentStatus}
                  />
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
