import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import HotelDetails from "./HotelDetails";
import CloseIcon from "@mui/icons-material/Close";
import { NONAME } from "dns";
import { Stack } from "@mui/material";
/**
 * A Component to add hotel . Markdown is addHotel*.
 */
export default function AddHotelDialogBox({ open, setOpen }: any) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        maxWidth="lg"
      >
        <DialogTitle id="responsive-dialog-title">
          {/* {"Use Google's location service?"} */}
          <Button
            onClick={handleClose}
            sx={{
              float: "right",
              textTransform: "none",
              color: "black",
              mt: -2,
              mr: -3,
            }}
          >
            <CloseIcon fontSize="small" />
          </Button>
        </DialogTitle>
        {/* <DialogContent> */}
        <Stack>
          <HotelDetails />
        </Stack>
        {/* </DialogContent> */}
      </Dialog>
    </>
  );
}
