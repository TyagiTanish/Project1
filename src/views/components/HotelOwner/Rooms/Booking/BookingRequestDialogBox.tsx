import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Box, Divider, Stack, Typography } from "@mui/material";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
/**
* To display the detailed view of Booking Requests. Markdown is *DialogBox*.
*/
function BookingRequestDialogBox(props: any) {
  const { onClose, data, selectedValue, open } = props;
  const [display, setDisplay] = React.useState<any>({});
  const [hotel, setHotel] = React.useState<any>({});
  const { request } = useAuth();
  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  React.useMemo(async () => {
    const display = await request.get(`/getDetails/${data.hotelId?._id}`);
    const result = display.data.rooms.filter((item: any) => {
      return (item._id = data.roomId);
    });
    setHotel(display?.data);
    setDisplay(result);
  }, []);
  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
      <Stack justifyContent={"space-between"} direction={"row"}>
        {" "}
        <DialogTitle>{hotel?.hotelName}</DialogTitle>
        <CloseIcon
          style={{ marginTop: 18, marginRight: 10 ,cursor:"pointer"}}
          onClick={onClose}
        />
      </Stack>
      <hr />
      <Stack spacing={8} padding={4}>
        <Stack direction={"row"} spacing={10}>
          <Stack spacing={0.5} direction={"column"}>
            <Stack sx={{ fontWeight: "bold" }}>Booking Details</Stack>
            <Stack direction={"row"} spacing={40}>
              <Stack direction={"row"} spacing={10}>
                <Stack direction={"column"}>
                  <Stack sx={{ fontSize: 15 }}>Check-in</Stack>
                  <Stack sx={{ fontSize: 15 }}>Check-out</Stack>
                  <Stack sx={{ fontSize: 15 }}>Guests</Stack>
                  {/* <Stack sx={{ fontSize: 16 }}>Check-out</Stack> */}
                </Stack>
                <Stack direction={"column"}>
                  <Stack sx={{ fontSize: 15, fontWeight: "bold" }}>
                    {data?.bookFrom}
                  </Stack>
                  <Stack sx={{ fontSize: 15, fontWeight: "bold" }}>
                    {data?.bookTo}
                  </Stack>
                  <Stack sx={{ fontSize: 15 }}>{data?.totalGuests}</Stack>
                  {/* <Stack sx={{ fontSize: 16 }}>Check-out</Stack> */}
                </Stack>
              </Stack>
              <Stack sx={{ fontSize: 25 }}>Booking</Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={50}>
          {" "}
          <Stack direction={"column"} spacing={0.5}>
            <Stack sx={{ fontWeight: "bold" }}>Booked By</Stack>
            <Stack direction={"row"} spacing={10}>
              <Stack direction={"column"} width={500}>
                <Stack sx={{ fontSize: 15 }}>{data?.fullName}</Stack>
                <Stack sx={{ fontSize: 15 }}>{data?.phone}</Stack>
                <Stack sx={{ fontSize: 15 }}>{data?.email}</Stack>
                {/* <Stack sx={{ fontSize: 16 }}>Check-out</Stack> */}
              </Stack>
              <Stack direction={"row"} spacing={6}>
                <Stack direction={"column"}>
                  <Stack sx={{ fontSize: 15, width: 100 }}>Booking Date</Stack>
                  <Stack sx={{ fontSize: 15 }}>Payment Status</Stack>
                </Stack>
                <Stack direction={"column"}>
                  <Stack sx={{ fontSize: 15, width: 100 }}>23-05-23</Stack>
                  <Stack sx={{ fontSize: 15 }}>{data?.paymentStatus}</Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={"column"}
          spacing={0}
          border={"1px solid lightgray"}
          borderRadius={1}
        >
          <Stack>
            <Stack
              border={"1px solid lightGray"}
              borderRadius={1}
              padding={1}
              sx={{ backgroundColor: "lightblue" }}
            >
              <Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography>Description</Typography>
                  <Typography paddingRight={-6}>Amount</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={"row"} spacing={65} padding={2}>
              <Typography sx={{ fontSize: 15 }}>
                Room Price for 1 Night * 1 Guest
              </Typography>
              <Typography sx={{ fontSize: 15 }}>{display?.price}</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Stack sx={{ fontWeight: "bold" }}>Additional Information</Stack>
          <Stack direction={"row"} spacing={2}>
            <Typography>Type of room</Typography>
            <Typography sx={{ fontSize: 15 }}>{display?.roomType}</Typography>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Typography>Total No. of Days-</Typography>
            <Typography sx={{ fontSize: 15 }}>{data?.totalDays}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
}
export default BookingRequestDialogBox;