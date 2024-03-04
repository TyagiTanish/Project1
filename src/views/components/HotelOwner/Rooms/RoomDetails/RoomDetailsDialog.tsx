import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Box,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  Popper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CheckIcon from "@mui/icons-material/Check";
export default function RoomDetailBox({
  open,
  setOpen,
  Rooms,
  Detailedroom,
  setDetailedRoom,
}: any) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [screenSize, setScreenSize] = React.useState(window.innerWidth);
  const [roomImage, setRoomImage] = React.useState(0);
  const [popper, setPopper] = React.useState(false);
  const roomIndex = React.useMemo(() => {
    setDetailedRoom(Detailedroom);
  }, [Detailedroom, roomImage]);

  React.useEffect(() => {
    setScreenSize(window.innerWidth);
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
    >
      <DialogContent>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ float: "right", mt: "-2%", mr: "-2%" }}
        >
          <Tooltip title={"Close"}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack direction={screenSize <= 1024 ? "column" : "row"} spacing={4}>
          <Stack
            spacing={1}
            padding={1}
            margin={2}
            width={{ sm: "100%", xl: "50%" }}
            borderRight={screenSize <= 1024 ? "none" : "1px solid lightgray"}
          >
            <Stack direction={"row"} spacing={0.2}>
              <Box
                component={"img"}
                width={{
                  xl: "75%",
                  md: "75%",
                  sm: "65%",
                  xs: "50%",
                  lg: "75%",
                }}
                src={`http://localhost:8000/${Rooms[Detailedroom]?.photos[roomImage]?.path}`}
              />
              <>
                <Stack direction={"column"} spacing={0.2}>
                  {Rooms[Detailedroom]?.photos?.map(
                    (image: any, index: number) => {
                      return (
                        <>
                          {index != roomImage && (
                            <Box
                              component={"img"}
                              width={{ xl: "85%", sm: "80%", md: "80%" }}
                              height={{ xl: "50%", sm: "50", md: "60%" }}
                              src={`http://localhost:8000/${image?.path}`}
                              onClick={() => setRoomImage(index)}
                            />
                          )}
                        </>
                      );
                    }
                  )}
                </Stack>
              </>
            </Stack>
            <Stack spacing={2}>
              <Box sx={{ fontWeight: "bolder", fontSize: "25px" }}></Box>
              <Typography
                style={{ width: "40%", color: "black", fontWeight: "bolder" }}
              >
                Room Description
              </Typography>
              <hr color="lightgray" />

              <Box
                sx={{ wordWrap: "break-word" }}
                dangerouslySetInnerHTML={{
                  __html: Rooms[Detailedroom]?.discription,
                }}
              />
            </Stack>
          </Stack>
          <Stack padding={2} spacing={2} justifyContent={"space-between"}>
            <Box>
              {" "}
              <Typography sx={{ fontWeight: "bolder", color: "black" }}>
                Room Highlights
              </Typography>
              <hr color="lightgray" />
              <br />
              <Stack
                gap={2}
                alignItems={"center"}
                direction={"row"}
                width={600}
                flexWrap={"wrap"}
              >
                {Rooms[Detailedroom]?.amenities?.map(
                  (item: any, index: any) => (
                    <>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        width={200}
                      >
                        {/* <CheckIcon fontSize="small" sx={{ml:2}}  /> */}
                        <Checkbox disabled checked />
                        {item}
                      </Stack>
                    </>
                  )
                )}
              </Stack>
            </Box>
            <Stack>
              {/* <Divider/>*/}
              <hr></hr>
              <Stack direction={"row"} spacing={2}>
                <Stack>
                  <Typography
                    fontSize={"15px"}
                    margin={0.5}
                    color={"black"}
                    fontWeight={"bolder"}
                  >
                    Price
                  </Typography>{" "}
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    fontSize={"25px"}
                    fontWeight={"bolder"}
                  >
                    <CurrencyRupeeIcon /> {Rooms[Detailedroom]?.price}
                  </Stack>
                </Stack>

                <Stack spacing={2} padding={1}>
                  <Stack spacing={1}>
                    <Typography fontSize={"12px"} fontWeight={"bold"}>
                      Cancellation Policy
                    </Typography>
                    <Typography fontSize={"10px"}>
                      72h Prior To 11:59 Pm Local Time The Day Of Arrival Or
                      1night Fee/ One Night Deposit At Booking
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography fontWeight={"bold"} fontSize={"12px"}>
                      Deposit Policy
                    </Typography>
                    <Typography fontSize={"10px"}>
                      Credit Card Deposit Required
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
