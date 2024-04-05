import React, { useEffect, useMemo, useState } from "react";
import { TotalEarnings } from "../../HotelOwner/Dashboard/dashBoardComponents/TotalEarnings";
import { Box, Button, Grid } from "@mui/material";
import useAllBookings from "../../../../Hooks/useAllBookings";
import { TotalHotels } from "./DasboardComponents/TotalHotels";
import useAllHotels from "../../../../Hooks/SuperAdmin/useAllHotels";
import { TotalCustomers } from "./DasboardComponents/TotalCustomers";
import useAllCustomers from "../../../../Hooks/SuperAdmin/useAllCustomers";
import useAllMembers from "../../../../Hooks/SuperAdmin/useAllMembers";
import { TotalMembers } from "./DasboardComponents/TotalMembers";
import BookingPieChart from "./DasboardComponents/BookingsPieChart";
import DashBoardDialogBox from "./CustomDashBoard/DashBoardDialogBox";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import useCustomizeDashboard from "../../../../Hooks/SuperAdmin/useCustomizeDashboard";
import { useSelector } from "react-redux";

const SuperAdminDashboard = () => {
  const { AllBooking } = useAllBookings();
  const { AllHotel, isSuccess } = useAllHotels();
  const { AllCustomer } = useAllCustomers();
  const { AllMember } = useAllMembers();
  const [bookingData, setBookingData] = useState<any>([]);
  const [hotels, setHotels] = useState<any>(0);
  const [customers, setCustomers] = useState<any>(0);
  const [members, setMembers] = useState<any>(0);
  const [customDashboard, setCustomDashboard] = useState(false);
  const user = useSelector((state: any) => state?.userReducer?.user);
  const dashboard = user?.dashboard;

  const items = [
    {
      id: 0,
      title: "Total Earnings",
    },
    {
      id: 1,
      title: "TotalHotels",
    },
    {
      id: 2,
      title: "TotalCustomers",
    },
    {
      id: 3,
      title: "TotalMembers",
    },
    {
      id: 4,
      title: "BookingPieChart",
    },
  ];
  const [item, setItems] = useState(dashboard || items);

  const components = [
    {
      id: 0,
      title: (
        <Grid item lg={4} sm={6} xs={12}>
          <TotalEarnings
            diff={12}
            trend="up"
            sx={{ height: "100%", borderRadius: 3 }}
            value="$24k"
            bookingData={bookingData}
          />
        </Grid>
      ),
    },
    {
      id: 1,
      title: (
        <Grid item lg={3} sm={6} xs={12}>
          <TotalHotels
            diff={12}
            trend="up"
            sx={{ height: "100%", borderRadius: 3 }}
            hotels={hotels}
          />
        </Grid>
      ),
    },
    {
      id: 2,
      title: (
        <Grid item lg={3} sm={6} xs={12}>
          <TotalCustomers
            diff={12}
            trend="up"
            sx={{ height: "100%", borderRadius: 3 }}
            customers={customers}
          />
        </Grid>
      ),
    },
    {
      id: 3,
      title: (
        <Grid item lg={3} sm={6} xs={12}>
          <TotalMembers
            diff={12}
            trend="up"
            sx={{ height: "100%", borderRadius: 3 }}
            members={members}
          />
        </Grid>
      ),
    },
    {
      id: 4,
      title: (
        <Grid item lg={7.5} sm={7} xs={12}>
          <BookingPieChart bookingData={bookingData} />
        </Grid>
      ),
    },
  ];
  const { customize } = useCustomizeDashboard(item);

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
  }, []);

  useMemo(() => {
    // console.log("000000", item);
    const customizeDashboard = async () => {
      await customize();
    };

    customizeDashboard();
  }, [item]);

  return (
    <>
      <Box bgcolor={"whitesmoke"} width={"100%"} p={2} height={"93vh"}>
        <Button
          variant="outlined"
          onClick={() => setCustomDashboard(true)}
          sx={{ float: "right" }}
        >
          Customize dashboard
        </Button>
        <Grid container xs={12} spacing={2}>
          {/* <Grid item lg={3} sm={6} xs={12}>
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
          </Grid> */}
          {item?.map((component: any) => components[component?.id]?.title)}
        </Grid>
      </Box>
      <DashBoardDialogBox
        customDashboard={customDashboard}
        setCustomDashboard={setCustomDashboard}
        item={item}
        setItem={setItems}
      />
    </>
  );
};

export default SuperAdminDashboard;
