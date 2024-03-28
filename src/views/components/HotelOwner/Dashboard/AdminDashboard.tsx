import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";

import { TotalEarnings } from "./dashBoardComponents/TotalEarnings";
import { TotalBookings } from "./dashBoardComponents/TotalBookings";
import { TotalCustomers } from "./dashBoardComponents/TotalCustomers";
import { BookingChart } from "./dashBoardComponents/BookingChart";
import { LatestBookings } from "./dashBoardComponents/LatestBookings";
import { Stack } from "@mui/material";
import useAllBookings from "../../../../Hooks/Member/useAllBookings";
import { AcceptedBookings } from "./dashBoardComponents/AcceptedBookings";
import { PendingBookings } from "./dashBoardComponents/PendingBookings";
import Remainder from "./dashBoardComponents/reminder";

export default function AdminDashboard() {
  const { AllBooking, data } = useAllBookings();
  const [bookingData, setBookingData] = React.useState<any>();
  React.useMemo(() => {
    const get = async () => {
      const data = await AllBooking();
      setBookingData(data);
    };
    get();
  }, [AllBooking]);
  console.log(bookingData);

  return (
    // <Stack
    //   bgcolor={"whitesmoke"}
    //   padding={2}
    //   alignItems={"center"}
    //   width={"100%"}
    // >
    <Grid container spacing={3} xs={12} bgcolor={"whitesmoke"} p={2}>
      <Grid lg={3} sm={6} xs={12}>
        <TotalEarnings
          diff={12}
          trend="up"
          sx={{ height: "100%" }}
          value="$24k"
          bookingData={bookingData}
        />
      </Grid>
      {/* <Grid lg={3} sm={6} xs={12}>
        <TotalCustomers
          diff={16}
          trend="down"
          sx={{ height: "100%" }}
          value="1.6k"
        />
      </Grid> */}
      <Grid lg={3} sm={6} xs={12}>
        <TotalBookings sx={{ height: "100%" }} value={bookingData?.length} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <AcceptedBookings sx={{ height: "100%" }} value={bookingData} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <PendingBookings sx={{ height: "100%" }} value={bookingData} />
      </Grid>
      <Grid lg={8} xs={12}>
        <BookingChart
          chartSeries={[
            {
              name: "This year",
              data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
            },
            {
              name: "Last year",
              data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
            },
          ]}
          sx={{ height: "100%" }}
        />
      </Grid>
      <Grid lg={4} xs={12}>
        <Remainder />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestBookings
          orders={[
            {
              id: "ORD-007",
              customer: { name: "Ekaterina Tankova" },
              amount: 30.5,
              status: "pending",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
            {
              id: "ORD-006",
              customer: { name: "Cao Yu" },
              amount: 25.1,
              status: "delivered",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
            {
              id: "ORD-004",
              customer: { name: "Alexa Richardson" },
              amount: 10.99,
              status: "refunded",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
            {
              id: "ORD-003",
              customer: { name: "Anje Keizer" },
              amount: 96.43,
              status: "pending",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
            {
              id: "ORD-002",
              customer: { name: "Clarke Gillebert" },
              amount: 32.54,
              status: "delivered",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
            {
              id: "ORD-001",
              customer: { name: "Adam Denisov" },
              amount: 16.76,
              status: "delivered",
              createdAt: dayjs().subtract(10, "minutes").toDate(),
            },
          ]}
          sx={{ height: "100%" }}
        />
      </Grid>
    </Grid>
    // </Stack>
  );
}
