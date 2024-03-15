import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Booking from "../Bookings/PaymentGateway/PaymentPage";
import { Box, IconButton, Stack } from "@mui/material";
import BillingDetailsCard from "./BillingDetailsCard";
import CloseIcon from "@mui/icons-material/Close";

/**
 * Dialog Box opens when user wants to pay . Markdown is *payment*.
 */

export default function PaymentDialogBox({
  display,
  setDisplay,
  hotelDetail,
  roomDetails,
  totalGuests,
  totalRooms,
  totalPrice,
  setDisplayLoader,
  bookingId,
  result,
  setSubmitButton,
  setTotalRoomsAndGuests,
  setTotalPrice,
  setRoomPrice,
  totalRoomsAndGuests,
  calculateDifference,
  startdate,
  enddate,
}: any) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setDisplay(false);
    setSubmitButton(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={display}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth={"xl"}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {" "}
          <DialogTitle id="responsive-dialog-title">Payment</DialogTitle>{" "}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <DialogContent>
          <DialogContentText>
            <Stack direction={"row"} spacing={3}>
              <Box>
                <Booking
                  setDisplayLoader={setDisplayLoader}
                  setDisplay={setDisplay}
                  bookingId={bookingId}
                  totalPrice={totalPrice}
                  result={result}
                />
              </Box>
              <Box>
                <BillingDetailsCard
                  setTotalRoomsAndGuests={setTotalRoomsAndGuests}
                  hotelDetail={hotelDetail}
                  roomDetails={roomDetails}
                  totalGuests={totalGuests}
                  calculateDifference={calculateDifference}
                  totalRooms={totalRooms}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  setRoomPrice={setRoomPrice}
                  totalRoomsAndGuests={totalRoomsAndGuests}
                  startdate={startdate}
                  enddate={enddate}
                />
              </Box>
            </Stack>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
