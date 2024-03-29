import { Box, Card, CardContent, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
const BillingDetailsCard = ({
  hotelDetail,
  roomDetails,
  totalPrice,
  setTotalRoomsAndGuests,
  totalRoomsAndGuests,
  setTotalPrice,
  setRoomPrice,
  calculateDifference,
  startdate,
  enddate,
}: any) => {
  const lang = useSelector((state: any) => state?.userReducer?.locale);
  const data: any = localStorage.getItem("Date");
  const [difference, setDifference] = useState<any>(null);
  // const RoomsAndGuests: any = JSON.parse(
  //   localStorage.getItem("Rooms&Guests") || ""
  // );

  const RoomsAndGuests = useSelector(
    (state: any) => state?.userReducer?.RoomsAndGuests
  );

  // var startdate: any = "";
  // var enddate: any = "";
  // if (data) {
  //   startdate = dayjs(JSON.parse(data).startDate);
  //   enddate = dayjs(JSON.parse(data).endDate);
  // }
  // const calculateDifference = () => {
  //   const diff = enddate.diff(startdate);
  //   const duration = moment.duration(diff);
  //   setDifference({
  //     days: duration.days() + 1,
  //   });
  // };

  useEffect(() => {
    const diff = calculateDifference();
    setDifference(diff);
  }, [startdate, enddate]);

  useEffect(() => {
    var result = 0;
    var totalRooms = 0;

    RoomsAndGuests?.map(
      (element: any) => (
        (result = result + +element.guest), (totalRooms = totalRooms + 1)
      )
    );
    setTotalRoomsAndGuests({ rooms: totalRooms, guests: result });
    setTotalPrice(
      Number(totalRooms) * Number(roomDetails?.price) * Number(difference)
    );
    setRoomPrice(roomDetails?.price);
  }, [totalPrice, roomDetails, RoomsAndGuests, difference]);

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
              >
                {difference} <FormattedMessage defaultMessage="Night" />
              </Stack>
            </Stack>
          </Stack>
          <Stack width={90}>
            <img
              src={`http://192.168.1.114:8000/${hotelDetail?.[0]?.photo}`}
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
            {startdate} -- {enddate}
            <Stack fontSize={{ sm: "small", md: "medium" }} ml={2}>
              {totalRoomsAndGuests?.rooms}{" "}
              <FormattedMessage defaultMessage="Room" />{" "}
              {totalRoomsAndGuests?.guests}{" "}
              <FormattedMessage defaultMessage="Guest" />
            </Stack>
          </Stack>
        </Stack>
        <Divider sx={{ marginTop: 2 }} />
        <Stack textAlign={"left"} mt={3} fontWeight={"bolder"}>
          {roomDetails?.type}
        </Stack>
        <Stack>
          <Stack direction={"column"} mt={3} gap={3}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              fontSize={{ sm: "small", md: "medium" }}
            >
              <Box>
                <FormattedMessage defaultMessage="Room price for 1 Night X 1 Room" />
              </Box>{" "}
              <Box>
                {lang === "en" ? (
                  <Stack direction={"row"} alignItems={"center"}>
                    <CurrencyRupeeIcon
                      sx={{
                        fontSize: { sm: "small", md: "medium", lg: "large" },
                      }}
                    />
                    {roomDetails?.price}
                  </Stack>
                ) : (
                  <Stack direction={"row"} alignItems={"center"}>
                    {/* <CurrencyRupeeIcon
                    sx={{
                      fontSize: { sm: "small", md: "medium", lg: "large" },
                    }}
                  /> */}
                    €{(roomDetails?.price / 90).toFixed(1)}
                  </Stack>
                )}
              </Box>
            </Stack>

            <Stack
              fontSize={{ sm: "small", md: "medium" }}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Box>
                <FormattedMessage defaultMessage="Room price for" />{" "}
                {difference} <FormattedMessage defaultMessage="Night X" />{" "}
                {totalRoomsAndGuests?.rooms}{" "}
                <FormattedMessage defaultMessage="Room" />{" "}
              </Box>
              {lang === "en" ? (
                <Stack
                  fontSize={{ sm: "small", md: "medium" }}
                  // fontWeight={"bolder"}
                  alignItems={"center"}
                  direction={"row"}
                >
                  <CurrencyRupeeIcon
                    sx={{
                      fontSize: { sm: "small", md: "medium", lg: "large" },
                    }}
                  />
                  {Number(roomDetails?.price) *
                    Number(difference) *
                    Number(totalRoomsAndGuests?.rooms)}
                </Stack>
              ) : (
                <Stack
                  fontSize={{ sm: "small", md: "medium" }}
                  // fontWeight={"bolder"}
                  alignItems={"center"}
                  direction={"row"}
                >
                  {/* <CurrencyRupeeIcon

              <Stack
                fontSize={{ sm: "small", md: "medium" }}
                // fontWeight={"bolder"}
                alignItems={"center"}
                direction={"row"}
              >
                <CurrencyRupeeIcon
                  sx={{
                    fontSize: { sm: "small", md: "medium", lg: "large" },
                  }}
                /> */}
                  €
                  {(
                    (Number(roomDetails?.price) *
                      Number(difference) *
                      Number(totalRoomsAndGuests?.rooms)) /
                    90
                  ).toFixed(1)}
                </Stack>
              )}
            </Stack>
          </Stack>
          <Divider sx={{ marginTop: 3 }} />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            mt={3}
            fontSize={{ sm: "small", md: "medium", lg: "large" }}
          >
            <Stack fontWeight={"bolder"}>
              <FormattedMessage defaultMessage="Payable Amount" />
            </Stack>
            {lang === "en" ? (
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
                {/* {Number(roomDetails?.price) *
                Number(difference?.days) *
                Number(totalRoomsAndGuests?.rooms)} */}
                {totalPrice}
              </Stack>
            ) : (
              <Stack
                direction={"row"}
                fontWeight={"bolder"}
                alignItems={"center"}
              >
                {/* <CurrencyRupeeIcon
                sx={{
                  fontSize: { sm: "small", md: "medium", lg: "large" },
                }}
              /> */}
                {/* {Number(roomDetails?.price) *
                Number(difference?.days) *
                Number(totalRoomsAndGuests?.rooms)} */}
                €{(totalPrice / 90).toFixed(1)}
              </Stack>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BillingDetailsCard;
