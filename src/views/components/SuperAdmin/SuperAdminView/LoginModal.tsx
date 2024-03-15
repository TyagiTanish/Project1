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
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userLogout } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import useUserLogin from "../../../../Hooks/userLogin/superAdmin/useUserLogin";
import DotLoader from "../../loader/DotLoader/DotLoader";
import Loaders from "../../loader/Loaders";

export default function LoginModal({
  loginModal,
  setLogInModal,
  members,
  hotelOwner,
  setLoader,
}: any) {
  // const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [disableLoginButton, setDisableLoginButton] = React.useState(false);
  const loggedInUser = useSelector((state: any) => state?.userReducer?.user);
  const { UserLogin, data } = useUserLogin();

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
  const handleLogin = async () => {
    setDisableLoginButton(true);

    const value = await UserLogin({
      userId: hotelOwner?._id,
      loggedInUserId: loggedInUser?._id,
    });
    if (value?.data) {
      setTimeout(() => {
        // setLoader(false);
        dispatch(userLogin(value?.data));
        localStorage.setItem("authToken", value?.token);
        navigate(`/${value?.data?.role}`);
      }, 3000);
    }
  };

  return (
    <>
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
              <Typography width={300}>Login as {hotelOwner?.name}</Typography>
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
                  while logged in as Customer are indistinguishable from the
                  actions of this user. Are you sure you want to login as
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
              <Button
                autoFocus
                variant="contained"
                onClick={handleLogin}
                disabled={disableLoginButton}
              >
                Login as {hotelOwner?.name}
              </Button>
            </Stack>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
}
