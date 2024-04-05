import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { FormattedMessage } from "react-intl";
import { Divider, IconButton, Stack, Tooltip } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AlertDialogSlide({
  handleCloseDelete,
  open2,
  setOpen2,
  _id,
  handleDelete,
}: any) {
  const handleClose = () => {
    setOpen2(false);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDelete}
        aria-describedby="alert-dialog-slide-description"
      >
        <Stack sx={{ width: "500px" }}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <DialogTitle>
              <FormattedMessage defaultMessage="Delete Hotel" />
            </DialogTitle>
            <Tooltip title={"close"}>
              <IconButton onClick={handleCloseDelete}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Stack>
          <Divider />
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <FormattedMessage defaultMessage="Do You Want to Delete This Hotel ?" />
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ mb: 1 }}>
            <Button
              onClick={() => {
                handleCloseDelete();
                handleDelete();
              }}
              variant="contained"
            >
              <FormattedMessage defaultMessage="Delete" />
            </Button>
            <Button onClick={handleCloseDelete} variant="outlined">
              <FormattedMessage defaultMessage="Cancel" />
            </Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}
