import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginModal({
  loginModal,
  setLogInModal,
  members,
  hotelOwner,
}: any) {
  // const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setLogInModal(false);
  };

  // const member = React.useMemo(() => {
  //   const member = members?.map(
  //     (member: any) => member?._id === hotelOwner && member
  //   );
  //   return member;
  // }, [hotelOwner, members]);
  const handleLogin = () => {
    dispatch(userLogin(hotelOwner));
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={loginModal}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography>Login as {hotelOwner?.name}</Typography>
            <Tooltip title="close">
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Box
                component={"img"}
                src={require("../../../../assets/user.png")}
                maxWidth={120}
              ></Box>
              <Box>
                With great power comes great responsibility. Actions you take
                while logged in as Patient are indistinguishable from the
                actions of this user. Are you sure you want to login as{" "}
                {hotelOwner?.name}?
              </Box>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            width={"100%"}
          >
            <Button autoFocus onClick={handleClose} variant="outlined">
              cancel
            </Button>
            <Button autoFocus variant="contained" onClick={handleLogin}>
              Login as {hotelOwner?.name}
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
