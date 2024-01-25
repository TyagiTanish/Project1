import { Stack } from "@mui/material";
import React, { useMemo, useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
/**
 * To show all the accepted Bookings by the Hotel Owner. Markdown is *AcceptedBooking*.
 */
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const handleClick = (item: any) => {
  console.log(item?.hotelId?.photo);
};
function AcceptedBookings() {
  const [data, setData] = useState([]);
  const { request } = useAuth();

  useMemo(async () => {
    const data = await request.get("/acceptedBookings");
    setData(data.data);
  }, []);

  return (
    <Stack>
      {data.map((item: any) => (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Stack
            
                justifyContent={'space-around'}
            >
             <Typography   sx={{ fontSize: 20, fontWeight: "bold", mb: 4 }}>Booking History</Typography> 
             
            </Stack>
            <Stack spacing={110} direction={"row"}>
              <Stack direction={"row"} spacing={5}>
                <Box
                  component="img"
                  sx={{
                    width: { sm: "150px ", lg: "150px", md: "140px" },
                    height: { lg: "140px", sm: "10vh", md: "20vh" },
                    // borderTopLeftRadius: "20px",
                    // borderBottomLeftRadius: "20px",
                    borderRadius: 2,
                  }}
                  alt="The house from the offer."
                  src={`http://localhost:8000/${item?.hotelId?.photo}`}
                />
                <Stack direction={"column"} spacing={1}>
                  <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                    {item.hotelId.hotelName}
                  </Typography>
                  <Stack direction={"row"} spacing={1}>
                    <LocationOnIcon fontSize="small" />
                    <Typography>
                      {item?.hotelId.city}-{item?.hotelId.state},
                      {item?.hotelId.country}
                    </Typography>
                  </Stack>
                  {/* <Typography sx={{fontSize:16}}>{item.hotelId.}</Typography> */}{" "}
                  <Typography sx={{ fontSize: 16 }}>
                    {item?.totalGuests} Guest
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction={"column"} spacing={0.5}>
                <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                  Checked Out
                </Typography>
                <Typography sx={{ fontSize: 16 }}>
                  Pending Amount:₹1200
                </Typography>
                <Typography sx={{ color: "red", fontWeight: "bold" }}>
                  View Details
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

export default AcceptedBookings;
