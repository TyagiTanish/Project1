import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Checkbox,
  Dialog,
  DialogTitle,
  FormControlLabel,
  Grid,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import PlaceIcon from "@mui/icons-material/Place";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { IconHotelService } from "@tabler/icons-react";
import { IconBarbell } from "@tabler/icons-react";
import { IconWashMachine } from "@tabler/icons-react";
import { IconGlassGin } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";

import "react-awesome-slider/dist/styles.css";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { IconParkingCircle } from "@tabler/icons-react";
import { IconWifi } from "@tabler/icons-react";
import { IconSwimming } from "@tabler/icons-react";
// Import Swiper styles

import { FreeMode, Pagination } from "swiper/modules";

export default function BasicModal(props: any) {
  const handleClose = () => onClose(false);
  const { onClose, open, modalHotel } = props;
  console.log(modalHotel);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const amenitie = [
    {
      id: "parking",
      label: "Parking",
      icon: <IconParkingCircle stroke={2} />,
      index: 0,
    },
    { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: 1 },
    { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: 2 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <IconHotelService stroke={2} />,
      index: 3,
    },
    { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: 4 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <IconWashMachine stroke={2} />,
      index: 5,
    },
    { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: 6 },
    {
      id: "meeting",
      label: "Meeting",
      icon: <IconUsersGroup stroke={2} />,
      index: "7",
    },
    {
      id: "parking",
      label: "Parking",
      icon: <IconParkingCircle stroke={2} />,
      index: 8,
    },
    { id: "wifi", label: "Wifi", icon: <IconWifi stroke={2} />, index: 9 },
    { id: "pool", label: "Pool", icon: <IconSwimming stroke={2} />, index: 10 },
    {
      id: "roomService",
      label: "Room Service",
      icon: <IconHotelService stroke={2} />,
      index: 11,
    },
    { id: "gym", label: "Gym", icon: <IconBarbell stroke={2} />, index: 12 },
    {
      id: "dryClean",
      label: "DryClean",
      icon: <IconWashMachine stroke={2} />,
      index: 13,
    },
    { id: "bar", label: "Bar", icon: <IconGlassGin stroke={2} />, index: 14 },
    {
      id: "meeting",
      label: "Meeting",
      icon: <IconUsersGroup stroke={2} />,
      index: 15,
    },
  ];

  const ShowAmenities = amenitie.filter((item: any, index: any) =>
    modalHotel?.amenities?.includes(String(item.index))
  );

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth={"lg"}
      aria-labelledby="responsive-dialog-title"
      fullScreen={fullScreen}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {" "}
        <DialogTitle>Hotel Details</DialogTitle>{" "}
        <Box sx={{ cursor: "pointer" }} onClick={handleClose} mr={2}>
          <CloseIcon fontSize="small" />
        </Box>
      </Stack>
      <Divider />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>
          <Stack direction={"column"} spacing={1} mb={3} padding={2}>
            <img
              src={`http://localhost:8000/${modalHotel?.photo}`}
              width={400}
              height={250}
            />

            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "22px", mt: 2 }}>
                {modalHotel?.hotelName}
              </Typography>
              <Stack direction={"row"} mt={1}>
                <PlaceIcon fontSize="small" />
                <Typography width={300}>
                  {`${modalHotel?.city}-${modalHotel?.pinCode}, ${modalHotel?.state}, ${modalHotel?.country}`}
                </Typography>
              </Stack>
            </Box>
          </Stack>
          {/* <Divider /> */}
          <Stack direction={"column"} sx={{ pl: 2, pb: 2, pr: 2 }} spacing={1}>
            <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
              Hotel Description
            </Typography>
            <Box
              dangerouslySetInnerHTML={{ __html: modalHotel?.discription }}
              sx={{
                flex: 1,
                letterSpacing: "1px",
                wordWrap: "break-word",
                width: 600,
              }}
            />
          </Stack>
          <Divider />
          <Stack width={300} padding={2}>
            <Typography
              width={"100%"}
              sx={{ fontSize: 18, fontWeight: "bold" }}
            >
              {modalHotel?.rooms?.length ? (
                <Typography
                  width={200}
                  color={"green"}
                >{`No. of rooms added - ${modalHotel?.rooms.length} `}</Typography>
              ) : (
                <Typography color={"red"}>No Room is added</Typography>
              )}
            </Typography>
          </Stack>
        </Stack>
        <hr color="lightgray" />
        <Stack width={500}>
          <Stack spacing={2} width={300} padding={2}>
            <Typography width={"100%"} sx={{ fontSize: 20 }}>
              Categories Available
            </Typography>
            {modalHotel?.categories?.map((i: any, category: any) => {
              return (
                <Typography>
                  {category + 1}
                  {")"} {i}
                </Typography>
              );
            })}
          </Stack>
          <Stack spacing={2} padding={2}>
            <Typography width={"100%"} sx={{ fontSize: 20 }}>
              Amenities-
            </Typography>

            <Grid container gap={4}>
              {ShowAmenities.map((item) => (
                <Grid item xl={3}>
                  <Stack direction={"column"} alignItems={"center"}>
                    <Stack>{item.icon}</Stack>
                    <Stack sx={{ fontSize: 15 }}>{item.label}</Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
}
