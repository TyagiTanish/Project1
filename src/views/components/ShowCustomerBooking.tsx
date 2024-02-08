import React, { useEffect, useState } from "react";
import { Stack, Typography, Button, Chip, Box } from "@mui/material";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Card, CardContent, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ShowCustomerBooking() {
  const navigate = useNavigate();
  const [screenSize,setScreenSize] = useState<any>(window.outerWidth);

  useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
    };
    console.log("screenSize", screenSize);

    window.addEventListener("resize", handleWindowSize);
  });

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
          // ml: { sm: 9, md: 12, lg: 15, xl: 18 },
          mt: 5,
      
          // textAlign: "center",
        }}
        // alignItems={"center"}
        spacing={5}
        width={"45%"}
      >
      
        {/* <Divider /> */}

        {bookings?.map((item: any, index: any) => (
          <Card
            variant="outlined"
            // sx={{
            //   backgroundColor: "#f5f5f5",
            // }}
          sx={{borderRadius:2}}
          >
            <CardContent>
              <Stack
                direction={screenSize <=768? 'column' :"row"}
                spacing={{ sm:   3, md: 5, lg: 10, xl: 8}}
              >
                <Stack direction={'row'} spacing={3} >
                <Box
                  component={'img'}
                  sx={{ width:"200px" ,
                  borderRadius:2
                
                }}
                  src={`http://localhost:8000/${bookings[index]?.hotelId?.photo}`}
                />
                <Stack textAlign={'left'} width={200}>
                  <Typography sx={{ fontSize: 20,fontFamily:"system-ui" }}>
                    {item?.hotelId?.hotelName}
                  </Typography>
                  <Typography sx={{ color: "gray", fontSize:14 }}>
                  {item?.hotelId?.state}
                  </Typography>
                  <Typography sx={{ color: "gray", fontSize:14 }}>
                    {`${item?.bookFrom?.split("T")[0]} - ${
                      item?.bookTo?.split("T")[0]
                    }`}
                  </Typography>
                  <Typography sx={{ color: "gray", fontSize:14  }}>
                    {" "}
                    {`${item?.totalRooms} Room - ${item?.totalGuests} Guests`}
                  </Typography>
                </Stack>
                </Stack >
               
                  <Stack textAlign={'center'} padding={2}>   </Stack>
             
                <Stack direction={"column"} alignItems={"center"}  textAlign={"center"} spacing={0.5}>
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

<Typography fontWeight={'bold'} fontFamily={'system-ui'}>Booking Id</Typography>
                  <Typography fontFamily={'system-ui'}>{item?._id}</Typography>
                  <Stack direction={'row'}>  <Typography alignSelf={'left'}>Payment Status- </Typography><Typography color={item?.paymentStatus ==='paid' ? 'green' :' red'}>{item?.paymentStatus}</Typography></Stack>
                
                  <Button
                    sx={{ textTransform: "none", color: "red",fontWeight:"bolder" }}
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
