import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  Box,
  Button,
  DialogContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
import { Document, Page } from "react-pdf";
import PdfViewerFromBuffer from "./DisplayPdf";
import { DialogActions } from "@mui/joy";
import { FormattedMessage } from "react-intl";
import { saveAs } from 'file-saver';
/**
 * To display the detailed view of Booking Requests. Markdown is *DialogBox*.
 */
function RecieptDialogBox(props: any) {
  const { setOpen, pdfBuffer, selectedValue, open } = props;
  const handleClose = () => {
    setOpen(selectedValue);
  };


  const handleDownload = () => {
    if (pdfBuffer) {
      const pdfBlob = new Blob([pdfBuffer], { type: 'application/pdf' });
      saveAs(pdfBlob, 'Reciept.pdf');
    }
  };



  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="md">
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography sx={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
            Reciept
          </Typography>
          <CloseIcon
            style={{ cursor: "pointer", float: "right" }}
            onClick={handleClose}
          />
        </Stack>
      </DialogTitle>
      <DialogContent>
        <PdfViewerFromBuffer pdfBuffer={pdfBuffer} />
        <DialogActions>
          <Stack direction={"row"} spacing={2}>
            <Button variant="contained"   onClick={handleDownload}  ><FormattedMessage defaultMessage={'download'} /> </Button>
            <Button variant="contained"  onClick={handleClose}  ><FormattedMessage  defaultMessage={'close'} /></Button>
          </Stack>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
export default RecieptDialogBox;
