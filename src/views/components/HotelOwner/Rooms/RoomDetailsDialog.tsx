import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Box,
  Grid,
  IconButton,
  Popper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

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
const [screenSize,setScreenSize] = React.useState(window.innerWidth);
  const [roomImage, setRoomImage] = React.useState(0);
  const [popper, setPopper] = React.useState(false);
  const roomIndex = React.useMemo(() => {
    setDetailedRoom(Detailedroom);
    console.log(roomImage);
  }, [Detailedroom, roomImage]);

  
const ScreenSize =React.useEffect(()=>{
  setScreenSize(window.innerWidth)
  window.addEventListener('resize',()=>setScreenSize(window.innerWidth))
})


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
          sx={{ float: "right", mt: "-2%", mr: "-2%", }}
        >
          <Tooltip title={'Close'}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack direction={"row"} spacing={4}>
          <Stack
            spacing={1}
            padding={1}
            margin={2}
            width={"50%"}
            borderRight={"1px solid lightgray"}
          >
            <Stack direction={"row"} spacing={0.2}>
              <Box component={'img'}
               width={{xl:'75%',md:'65%',sm:'55%',xs:'50%',lg:'75%'}}
                src={require(`../../${Rooms[Detailedroom]?.src[roomImage]?.url}`)}
              />
              <>
                <Stack direction={"column"} spacing={0.2}>
                  {Rooms[Detailedroom]?.src?.map(
                    (image: any, index: number) => {
                      return (
                        <>
                          {index != roomImage && (
                            <Box component={'img'}
                              width={{xl:'85%',sm:80,md:'80%'}}
                              height={{xl:'50%',sm:50,md:'60%'}}
                              src={require(`../../${image?.url}`)}
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
              <Box sx={{ fontWeight: "bolder", fontSize: "25px" }}>
                Hotel Mountain Face{" "}
              </Box>
              <Typography
                style={{ width: "40%", color: "gray", fontWeight: "bolder" }}
              >
                Room Description
              </Typography>
              <hr color="lightgray" />
              <Typography width={"100%"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita tempore provident tempora quisquam fuga, nihil beatae
                voluptate veniam doloribus cum at omnis fugit qui perferendis
                laboriosam, reiciendis rerum consequatur neque?
              </Typography>
            </Stack>
          </Stack>
          <Stack padding={2} spacing={1}>
            <Typography sx={{ fontWeight: "bolder", color: "gray" }}>
              Room Highlights
            </Typography>
            <hr color="lightgray" />
            <br />
            <Grid container
              // direction={screenSize <=768 ? "column":"row"}     
              spacing={2}
              alignItems={"center"}
            >
              <Grid item spacing={2}>
                <li>Ac</li>
                <li>42” LED Smart TV</li>
                <li>Coffee and tea maker</li>
                <li>Hair dryer</li>
                <li>Bath amenities</li>
                <li>Bath robes and slippers</li>
                <li>Minibar upon request</li>
              </Grid>
              <Grid  item spacing={2}>
                <li>24-hour room service</li>
                <li>Complimentary water bottles</li>
                <li>In-room safe</li>
                <li>Iron and ironing board</li>
                <li>Complimentary high-speed Wi-Fi</li>
                <li>Daily newspaper upon request</li>
                <li>Extra bed upon request</li>
              </Grid>
            </Grid>
            <Stack paddingTop={20.2}>
              <hr></hr>

              <Stack direction={"row"} spacing={2}>
                <Stack>
                  <Typography
                    fontSize={"15px"}
                    margin={0.5}
                    color={"gray"}
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
                    <CurrencyRupeeIcon /> {Rooms[Detailedroom].price}
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
