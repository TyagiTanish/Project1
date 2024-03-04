import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
import { useParams } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

export default function OnDeleteDialogBox({
  deleteOpen,
  setdeleteOpen,
  roomId,
  setRender,
  photos,
}: any) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { request } = useAuth();
  const id = useParams();
  const handleClose = () => {
    setdeleteOpen(false);
  };
  const handleAgree = async () => {
    if (Object.keys(id).length === 0) {
      await request.delete("/deleteRoom", {
        params: { roomid: roomId, photos: photos },
      });
      setRender((prev: any) => prev + 1);
      enqueueSnackbar("Room Deleted Successfully", { variant: "success" });
      handleClose();
    } else {
      console.log(id.id);
      await request.delete(`/deleteRoom/${id.id}`, {
        params: { roomid: roomId, photos: photos },
      });
      setRender((prev: any) => prev + 1);
      enqueueSnackbar("Room Deleted Successfully", { variant: "success" });
      handleClose();
    }
  };

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={deleteOpen}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Do you Want to Delete room?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
