import React from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useParams } from "react-router-dom";
import { Stack, Typography, Button, Box, Divider } from "@mui/material";
function BookingDetails() {
  const id = useParams();
  const { request } = useAuth();
  const fetchBookings = async () => {
    const result = await request.get(`/getBookingDetails/${id.id}`);
    console.log(result.data);
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
              Booked by Tushar on Fri, 24 Nov 2023
            </span>
          </Stack>
          <Typography sx={{ fontSize: 18 }}>QL843167</Typography>
          <Divider sx={{ width: "90%", alignSelf: "center", mt: 3 }} />
          <Divider sx={{ width: "90%", alignSelf: "center" }} />
          <Divider sx={{ width: "90%", alignSelf: "center" }} />
          {screenSize <= 768 ? (
            <Stack justifyContent={"space-between"} mt={3} spacing={3}>
              <Box>
                <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 2 }}>
                  Hotel Name
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                  Hotel type
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  SCF 116/1, Near Raj Mahindra agency, Sec 58, Shahi Majra,
                  Phase 5, Mohali
                </Typography>
              </Box>
              <img
                style={{ width: 200 }}
                src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
              />
            </Stack>
          ) : (
            <Stack direction={"row"} justifyContent={"space-between"} mt={3}>
              <Box>
                <Typography sx={{ fontSize: 16, fontWeight: 700, mb: 3 }}>
                  Hotel Name
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                  Hotel type
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  SCF 116/1, Near Raj Mahindra agency, Sec 58, Shahi Majra,
                  Phase 5, Mohali
                </Typography>
              </Box>
              <img
                style={{ width: 200 }}
                src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
              />
            </Stack>
          )}
          <Divider sx={{ width: "90%", alignSelf: "center", mt: 3 }} />
          <Divider sx={{ width: "90%", alignSelf: "center" }} />
          <Divider sx={{ width: "90%", alignSelf: "center" }} />

          <Stack></Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default BookingDetails;
