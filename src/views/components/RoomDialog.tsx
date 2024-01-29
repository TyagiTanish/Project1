import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { hotelId, roomDetails } from "./redux/user/userSlice";

function RoomDialog(props: any) {
  // console.log(props?.details);
  const [roomImage, setRoomImage] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const setRedux = (id: any) => {
  const reduxValue: any = {
    price: props?.details?.price,
    type: props?.details?.roomType,
    roomId: props?.details?._id,
  };
  dispatch(roomDetails(reduxValue));

  let Rooms: any = localStorage.getItem("Rooms&Guests");

  // };
  return (
    <Dialog onClose={props.handleClose} open={props.open} maxWidth="lg">
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        alignItems={"center"}
      >
        <DialogTitle sx={{ fontWeight: "bold" }}>
          {props.details?.roomType}
        </DialogTitle>{" "}
        <Tooltip title="Close">
          <IconButton>
            <CloseIcon
              onClick={() => {
                props.handleClose();
              }}
            />
          </IconButton>
        </Tooltip>
      </Stack>
      <Divider />
      <Stack direction={"row"} padding={2} overflow={"hidden"}>
        <Stack width={"50%"}>
          {/* <Stack direction={"column"} spacing={4}>
            <Box
              component="img"
              sx={{
                width: "97%",
                //  height:"100%",
                backgroundSize: "cover",
              }}
              alt="The house from the offer."
              src={`http://localhost:8000/${props?.details?.photos[1].path}`}
            />
          </Stack> */}
          <Box>
            <Stack direction={"row"} spacing={0.2}>
              <Box
                component={"img"}
                width={{ xl: "60%", md: "60%", sm: "65%", xs: "50%" }}
                // height={181.8}
                src={`http://localhost:8000/${props?.details?.photos[roomImage]?.path}`}
              />
              <>
                <Stack direction={"column"} spacing={0.2}>
                  {props?.details?.photos?.map((image: any, index: number) => {
                    return (
                      <>
                        {index != roomImage && (
                          <Box
                            component={"img"}
                            width={100}
                            height={{ lg: 90 }}
                            src={`http://localhost:8000/${image?.path}`}
                            onClick={() => setRoomImage(index)}
                          />
                        )}
                      </>
                    );
                  })}
                </Stack>
              </>
            </Stack>
          </Box>
          <Stack
            direction={"column"}
            spacing={2}
            overflow={"scroll"}
            height={"55.5%"}
            marginTop={"2%"}
            // width={"%"}
            p={1}
            textAlign={"justify"}
          >
            <Typography fontWeight={"bold"} fontSize={18}>
              Room Description
            </Typography>
            {/* <Typography fontSize={14}>{props.details.description}</Typography> */}
            <Box
              dangerouslySetInnerHTML={{
                __html: props?.details?.discription,
              }}
              sx={{ flex: 1 }}
            />
            <Typography fontWeight={"bold"} fontSize={18}>
              Hotel Amenities
            </Typography>
            <Stack spacing={1}>
              {/* <li>Ac</li>
              <li>42” LED Smart TV</li>
              <li>Coffee and tea maker</li>
              <li>Hair dryer</li>
              <li>Bath amenities</li>
              <li>Bath robes and slippers</li>
              <li>Minibar upon request</li> */}
              {props?.details?.amenities.map((item: any, i: any) => (
                // console.log(item)
                <li>{item}</li>
              ))}
            </Stack>
            {/* <Stack spacing={1}>
              <li>24-hour room service</li>
              <li>Complimentary water bottles</li>
              <li>In-room safe</li>
              <li>Iron and ironing board</li>
              <li>Complimentary high-speed Wi-Fi</li>
              <li>Daily newspaper upon request</li>
              <li>Extra bed upon request</li>
            </Stack> */}
          </Stack>
        </Stack>

        <Stack width={"50%"}>
          <Stack height={"75%"}></Stack>
          <Divider />
          <Stack direction={"row"} spacing={2}>
            {" "}
            <Stack direction={"column"} padding={1}>
              <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                From
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
                {/* ₹12,150 */}₹{props?.details?.price}/-
              </Typography>
              <Typography sx={{ fontSize: 13, color: "gray" }}>
                Avg/Night
              </Typography>
            </Stack>
            <Stack
              direction={"column"}
              width={"100%"}
              spacing={1}
              paddingTop={1}
            >
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                  Cancelation Policy
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  11:59pm Hotel Time 2 Days Before Arrival Or Pay 1 Night Fee
                  /Credit Card Required
                </Typography>
              </Stack>
              <Stack>
                <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                  Deposit Policy
                </Typography>
                <Typography sx={{ fontSize: 12 }}>
                  Credit Card Guarantee Required
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack sx={{ ml: 2 }}>
            {" "}
            <Button
              sx={{
                fontWeight: "bold",
                mt: "2%",
              }}
              color="error"
              variant="contained"
              onClick={() => {
                navigate("/billing");
              }}
              disabled={
                props?.details?.isAvailable === "false" ||
                props?.details?.roomQuantity === "0" ||
                (JSON.parse(Rooms)?.Rooms > props?.details?.roomQuantity)
              }
            >
              { props?.details?.isAvailable === "false" ||
                props?.details?.roomQuantity === "0" ||
                JSON.parse(Rooms)?.Rooms > props?.details?.roomQuantity ? ('Currently Unavailable'):('Book Now ')}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
}

export default RoomDialog;
