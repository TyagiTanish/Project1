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
import { FormattedMessage } from "react-intl";
import TvIcon from "@mui/icons-material/Tv";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import DryCleaningIcon from "@mui/icons-material/DryCleaning";
import BathroomIcon from "@mui/icons-material/Bathroom";
import LiquorIcon from "@mui/icons-material/Liquor";
import { IconHours24 } from "@tabler/icons-react";
import { IconLockSquareRounded } from "@tabler/icons-react";
import { IconAirConditioningDisabled } from "@tabler/icons-react";
import { IconIroningSteam } from "@tabler/icons-react";
import { IconWifi } from "@tabler/icons-react";
import { IconBottle } from "@tabler/icons-react";
import { IconNews } from "@tabler/icons-react";
import { IconBed } from "@tabler/icons-react";
import HairDryer from "../../../icons/HairDryer";
import BathRobes from "../../../icons/BathRobes";
import CoffeeAndTeaMaker from "../../../icons/CoffeeAndTeaMaker";

export default function RoomDetailBox({
  open,
  setOpen,
  Rooms,
  Detailedroom,
  setDetailedRoom,
}: any) {
  const highlights = [
    { Highlight: "A/C", icon: <IconAirConditioningDisabled /> },
    { Highlight: "42' LED Smart TV", icon: <TvIcon /> },
    { Highlight: "Coffee and tea maker", icon: <CoffeeAndTeaMaker /> },
    { Highlight: "Hair dryer", icon: <HairDryer /> },
    { Highlight: "bath amenities", icon: <BathroomIcon /> },
    { Highlight: "bath robes and slippers", icon: <BathRobes /> },
    { Highlight: "Minibar upon request", icon: <LiquorIcon /> },
    {
      Highlight: "24-hour room service",
      icon: <IconHours24 />,
    },
    { Highlight: "Complimentry water bottles", icon: <IconBottle /> },
    { Highlight: "In-room safe ", icon: <IconLockSquareRounded /> },
    { Highlight: "Iron and ironing board", icon: <IconIroningSteam /> },
    { Highlight: "Complimentry high speed Wi-Fi", icon: <IconWifi /> },
    { Highlight: "Daily newspaper upon request", icon: <IconNews /> },
    { Highlight: "Extra bed upon request", icon: <IconBed /> },
  ];

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
            width={{ sm: "100%", xl: "50%", lg: "50%" }}
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
                src={`http://192.168.1.114:8000/${Rooms[Detailedroom]?.photos[roomImage]?.path}`}
              />
              <>
                <Stack direction={"column"} spacing={0.2}>
                  {Rooms[Detailedroom]?.photos?.map(
                    (image: any, index: number) => {
                      return (
                        <>
                          {index !== roomImage && (
                            <Box
                              component={"img"}
                              width={{ xl: "85%", sm: "80%", md: "80%" }}
                              height={{ xl: "50%", sm: "50", md: "60%" }}
                              src={`http://192.168.1.114:8000/${image?.path}`}
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
                <FormattedMessage defaultMessage="Room Description" />
              </Typography>
              <hr color="lightgray" />

              <Box
                sx={{ wordWrap: "break-word", width: "90%" }}
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
                <FormattedMessage defaultMessage="Room Highlights" />
              </Typography>
              <hr color="lightgray" />
              <br />
              <Stack
                gap={3}
                alignItems={"center"}
                direction={"row"}
                width={550}
                flexWrap={"wrap"}
              >
                {Rooms[Detailedroom]?.amenities?.map(
                  (item: any, index: any) => (
                    <>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        width={240}
                        gap={2}
                      >
                        {/* <CheckIcon fontSize="small" sx={{ml:2}}  /> */}
                        <Box>
                          {highlights?.map(
                            (highLight) =>
                              item === highLight?.Highlight && highLight?.icon
                          )}
                        </Box>
                        <Box> {item}</Box>
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
                    <FormattedMessage defaultMessage="Price" />
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
                      <FormattedMessage defaultMessage="Cancellation Policy" />
                    </Typography>
                    <Typography fontSize={"10px"}>
                      <FormattedMessage defaultMessage=" 72h Prior To 11:59 Pm Local Time The Day Of Arrival Or 1 night Fee/ One Night Deposit At Booking" />
                    </Typography>
                  </Stack>
                  <Stack spacing={1}>
                    <Typography fontWeight={"bold"} fontSize={"12px"}>
                      <FormattedMessage defaultMessage="Deposit Policy" />
                    </Typography>
                    <Typography fontSize={"10px"}>
                      <FormattedMessage defaultMessage="Credit Card Deposit Required" />
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
