import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import dayjs from "dayjs";

import { TotalEarnings } from "./HotelDashboardComponents/TotalEarnings";
import { TotalBookings } from "./HotelDashboardComponents/TotalBookings";
import { TotalCustomers } from "./HotelDashboardComponents/TotalCustomers";
import { BookingChart } from "./HotelDashboardComponents/BookingChart";
import { LatestBookings } from "./HotelDashboardComponents/LatestBookings";
import { AcceptedBookings } from "./HotelDashboardComponents/AcceptedBookings";
import { PendingBookings } from "./HotelDashboardComponents/PendingBookings";
import Remainder from "./HotelDashboardComponents/reminder";
import { useParams } from "react-router-dom";
import useParticularHotelBookings from "../../../../Hooks/Member/particularHotelBookings";

export default function AdminDashboard({ firstHotel, setRender }: any) {
  const id = useParams();
  let param: any;
  if (Object.keys(id).length !== 0) {
    param = id.id;
  } else {
    param = firstHotel?._id;
  }
  const { AllBooking, data } = useParticularHotelBookings(param);
  const [bookingData, setBookingData] = React.useState<any>();
  // State to hold monthly bookings
  const [monthlyBookings, setMonthlyBookings] = React.useState({});
  const [bookingType, setBookingType] = React.useState("Total");
  React.useEffect(() => {
    // Function to calculate monthly bookings
    const calculateMonthlyBookings = () => {
      const monthlyBookingsObj: any = {};

      // Iterate through each booking
      if (bookingType === "Total") {
        bookingData?.forEach((booking: any) => {
          // Extracting the bookFrom date string
          const dateString = booking.bookFrom;

          // Extract month from the booking date string
          const monthName = dateString.split(" ")[0].trim(); // Extracting the month name part
          const month =
            new Date(Date.parse(monthName + " 1, 2023")).getMonth() + 1; // Parse month name and get its index (JavaScript's getMonth() returns zero-based index)

          // Add bookings count to corresponding month
          if (monthlyBookingsObj[month]) {
            monthlyBookingsObj[month] += 1;
          } else {
            monthlyBookingsObj[month] = 1;
          }
        });
      } else if (bookingType === "Accepted") {
        const filterBookingdata = bookingData.filter(
          (booking: any) => booking.status === "accepted"
        );
        filterBookingdata?.forEach((booking: any) => {
          // Extracting the bookFrom date string
          const dateString = booking.bookFrom;

          // Extract month from the booking date string
          const monthName = dateString.split(" ")[0].trim(); // Extracting the month name part
          const month =
            new Date(Date.parse(monthName + " 1, 2023")).getMonth() + 1; // Parse month name and get its index (JavaScript's getMonth() returns zero-based index)

          // Add bookings count to corresponding month
          if (monthlyBookingsObj[month]) {
            monthlyBookingsObj[month] += 1;
          } else {
            monthlyBookingsObj[month] = 1;
          }
        });
      } else {
        const filterBookingdata = bookingData.filter(
          (booking: any) => booking.status === "pending"
        );
        filterBookingdata?.forEach((booking: any) => {
          // Extracting the bookFrom date string
          const dateString = booking.bookFrom;

          // Extract month from the booking date string
          const monthName = dateString.split(" ")[0].trim(); // Extracting the month name part
          const month =
            new Date(Date.parse(monthName + " 1, 2023")).getMonth() + 1; // Parse month name and get its index (JavaScript's getMonth() returns zero-based index)

          // Add bookings count to corresponding month
          if (monthlyBookingsObj[month]) {
            monthlyBookingsObj[month] += 1;
          } else {
            monthlyBookingsObj[month] = 1;
          }
        });
      }

      // Set the state with the calculated monthly bookings
      setMonthlyBookings(monthlyBookingsObj);
    };

    // Call the function to calculate monthly bookings
    calculateMonthlyBookings();
  }, [bookingData, bookingType]);
  React.useMemo(() => {
    const get = async () => {
      const data = await AllBooking();
      setBookingData(data);
    };
    get();
  }, [AllBooking, param]);
  const booking: { [key: number]: number } = monthlyBookings;

  return (
    <Grid container spacing={3} xs={12} bgcolor={"whitesmoke"} p={2}>
      <Grid lg={3} sm={6} xs={12}>
        <TotalEarnings
          diff={12}
          trend="up"
          sx={{ height: "100%", borderRadius: 3 }}
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
        <TotalBookings
          sx={{ height: "100%", borderRadius: 3 }}
          value={bookingData?.length}
        />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <AcceptedBookings
          sx={{ height: "100%", borderRadius: 3 }}
          value={bookingData}
        />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <PendingBookings
          sx={{ height: "100%", borderRadius: 3 }}
          value={bookingData}
        />
      </Grid>
      <Grid lg={8} xs={12}>
        <BookingChart
          chartSeries={[
            {
              name: "This year",
              data: [
                booking[1],
                booking[2],
                booking[3],
                booking[4],
                booking[5],
                booking[6],
                booking[7],
                booking[8],
                booking[9],
                booking[10],
                booking[11],
                booking[12],
              ],
            },
          ]}
          sx={{ height: "100%", borderRadius: 3 }}
          setBookingType={setBookingType}
          bookingType={bookingType}
        />
      </Grid>
      <Grid lg={4} xs={12}>
        <Remainder />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <LatestBookings
          orders={bookingData}
          sx={{ height: "100%", borderRadius: 3 }}
        />
      </Grid>
    </Grid>
    // </Stack>
  );
}
