import React, { useEffect, useMemo, useState } from "react";
import { TotalEarnings } from "../../HotelOwner/Dashboard/dashBoardComponents/TotalEarnings";
import { Box, Grid } from "@mui/material";
import useAllBookings from "../../../../Hooks/useAllBookings";
import { TotalHotels } from "./DasboardComponents/TotalHotels";
import useAllHotels from "../../../../Hooks/SuperAdmin/useAllHotels";
import { TotalCustomers } from "./DasboardComponents/TotalCustomers";
import useAllCustomers from "../../../../Hooks/SuperAdmin/useAllCustomers";
import useAllMembers from "../../../../Hooks/SuperAdmin/useAllMembers";
import { TotalMembers } from "./DasboardComponents/TotalMembers";
import BookingPieChart from "./DasboardComponents/BookingsPieChart";

const SuperAdminDashboard = () => {
  const { AllBooking } = useAllBookings();
  const { AllHotel, isSuccess } = useAllHotels();
  const { AllCustomer } = useAllCustomers();
  const { AllMember } = useAllMembers();
  const [bookingData, setBookingData] = useState<any>();
  const [hotels, setHotels] = useState<any>();
  const [customers, setCustomers] = useState<any>();
  const [members, setMembers] = useState<any>();

  useMemo(() => {
    const bookings = async () => {
      const data = await AllBooking();
      setBookingData(data);
    };
    const hotels = async () => {
      const data = await AllHotel();
      setHotels(data);
    };
    const customers = async () => {
      const data = await AllCustomer();
      setCustomers(data);
    };
    const members = async () => {
      const data = await AllMember();
      setMembers(data);
    };
    hotels();
    customers();
    bookings();
    members();
  }, [isSuccess]);

  return (
    <>
      <Box bgcolor={"whitesmoke"} width={"100%"} p={2} height={"93vh"}>
        <Grid container xs={12} spacing={2}>
          <Grid item lg={3} sm={6} xs={12}>
            <TotalEarnings
              diff={12}
              trend="up"
              sx={{ height: "100%", borderRadius: 3 }}
              value="$24k"
              bookingData={bookingData}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <TotalHotels
              diff={12}
              trend="up"
              sx={{ height: "100%", borderRadius: 3 }}
              hotels={hotels}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <TotalCustomers
              diff={12}
              trend="up"
              sx={{ height: "100%", borderRadius: 3 }}
              customers={customers}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <TotalMembers
              diff={12}
              trend="up"
              sx={{ height: "100%", borderRadius: 3 }}
              members={members}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <BookingPieChart bookingData={bookingData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SuperAdminDashboard;
