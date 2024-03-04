import { Card, CardContent, Divider, Stack } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import dayjs from "dayjs";
import moment from "moment";
const BillingDetailsCard = ({
  hotelDetail,
  roomDetails,
  totalPrice,
  setTotalRoomsAndGuests,
  totalRoomsAndGuests,
  setTotalPrice,
}: any) => {
  const data: any = localStorage.getItem("Date");
  const [difference, setDifference] = useState<any>(null);
  const parsedData: any = JSON.parse(
    localStorage.getItem("Rooms&Guests") || ""
  );

  var startdate: any = "";
  var enddate: any = "";
  if (data) {
    startdate = dayjs(JSON.parse(data).startDate);
    enddate = dayjs(JSON.parse(data).endDate);
  }
  const calculateDifference = () => {
    const diff = enddate.diff(startdate);
    const duration = moment.duration(diff);
    setDifference({
      days: duration.days() + 1,
    });
  };

  useMemo(() => {
    var result = 0;
    var totalRooms = 0;
    parsedData.forEach((element: any) => {
      result = result + +element.guest;
      totalRooms = totalRooms + 1;
    });
    setTotalRoomsAndGuests({ rooms: totalRooms, guests: result });
    setTotalPrice(Number(totalRooms) * Number(roomDetails?.price));
  }, []);

  useEffect(() => {
    if (data) {
      calculateDifference();
    }
  }, []);

  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardContent>
        <Stack direction={"row"} spacing={4} alignItems={"center"}>
          <Stack direction={"column"} justifyContent={"space-between"}>
            <h3 style={{ marginBottom: "1rem" }}>
              {hotelDetail?.[0]?.hotelName}
            </h3>
            <Stack>
              <Stack fontSize={{ sm: "small", md: "medium" }} color={"gray"}>
                {hotelDetail?.[0]?.city} - {hotelDetail?.[0]?.pinCode} ,
                {hotelDetail?.[0]?.state}, {hotelDetail?.[0]?.country}
              </Stack>
              <Stack
                mt={3}
                textAlign={"left"}
                fontSize={"13px"}
                fontWeight={"bolder"}
              >{` ${difference?.days} Night`}</Stack>
            </Stack>
          </Stack>
          <Stack width={90}>
            <img
              src={`http://localhost:8000/${hotelDetail?.[0]?.photo}`}
              style={{ borderRadius: "5px", marginTop: "-1rem" }}
            />
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          mt={3}
          fontSize={{ sm: "small", md: "medium" }}
        >
          <Stack
            fontWeight={"bolder"}
            direction={"row"}
            alignItems={"center"}
            spacing={2}
          >
            <CalendarMonthIcon style={{ marginRight: 4 }} />
            {`${startdate?.$d?.toDateString().slice(0, 10)}`} --{" "}
            {`${enddate?.$d?.toDateString().slice(0, 10)}`}
            <Stack fontSize={{ sm: "small", md: "medium" }} ml={2}>
              {totalRoomsAndGuests?.rooms} Room {totalRoomsAndGuests?.guests}
              {" " + "Guest"}
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ marginTop: 2 }} />
        <Stack textAlign={"left"} mt={3} fontWeight={"bolder"}>
          {roomDetails?.type}
        </Stack>
        <Stack>
          <Stack direction={"row"} justifyContent={"space-between"} mt={3}>
            <Stack fontSize={{ sm: "small", md: "medium" }}>{`Room price for ${
              difference?.days
            } Night X ${totalRoomsAndGuests?.guests} ${
              " " + "Guest"
            }  `}</Stack>
            <Stack
              fontSize={{ sm: "small", md: "medium" }}
              // fontWeight={"bolder"}
            >
              {roomDetails?.price}
            </Stack>
          </Stack>
          <Divider sx={{ marginTop: 3 }} />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            mt={3}
            fontSize={{ sm: "small", md: "medium", lg: "large" }}
          >
            <Stack fontWeight={"bolder"}>Payable Amount</Stack>
            <Stack
              direction={"row"}
              fontWeight={"bolder"}
              alignItems={"center"}
            >
              <CurrencyRupeeIcon
                sx={{
                  fontSize: { sm: "small", md: "medium", lg: "large" },
                }}
              />
              {totalPrice}
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BillingDetailsCard;
