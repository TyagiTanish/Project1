import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import UseRoomAndGuestQuantity from "../../Hooks/roomAndGuestQuantity/useRoomAndGuestQuantity";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useDispatch } from "react-redux";
import { roomDetails } from "./redux/user/userSlice";
import { Theme, useTheme } from "@emotion/react";
function RoomImageSlider({ images }: any) {
  const theme = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // useEffect(() => {
  //   const intervalId = setInterval(nextImage, 3000);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [images.length]);

  return (
    <Box position="relative">
      <img
        src={`http://localhost:8000/${images[currentImageIndex]?.path}`}
        alt={"RoomImage"}
        style={{
          width: "90%",
          transition: `transform 300ms ease-in-out`,
          // height: "100%",
        }}
      />
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: "0%",
          transform: "translateY(-50%)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
        onClick={prevImage}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          color: "white",
          "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
        onClick={nextImage}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

function UserViewRooms({ hotels }: any) {
  const { TotalRooms } = UseRoomAndGuestQuantity();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var reduxValue: any = {};
  const updateRedux = (item: any) => {
    reduxValue = {
      price: item?.price,
      type: item?.roomType,
      roomId: item?._id,
    };
    navigate(`/billing/${hotels[0]?._id}/${item?._id}`);
  };
  dispatch(roomDetails(reduxValue));

  return (
    <>
      <Stack
        justifyContent={"space-evenly"}
        marginTop={"4%"}
        marginBottom={"4%"}
      >
        {hotels[0]?.rooms?.map((item: any, i: any) => (
          <Stack
            key={item._id}
            maxWidth={"80%"}
            alignSelf={"center"}
            m={3}
            bgcolor={"#F5F5F5"}
            boxShadow={10}
          >
            <DialogTitle sx={{ fontWeight: "bold" }}>
              {item?.roomType}
            </DialogTitle>
            <Divider />
            <Stack direction={"row"} padding={2} spacing={3}>
              <Stack width={"45%"}>
                <RoomImageSlider images={item?.photos} />
                <Stack
                  direction={"column"}
                  spacing={2}
                  overflow={"auto"}
                  height={"56%"}
                  marginTop={"2%"}
                  p={1}
                  textAlign={"justify"}
                >
                  <Typography fontWeight={"bold"} fontSize={18}>
                    Room Description
                  </Typography>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: item?.discription,
                    }}
                    sx={{ flex: 1, wordBreak: "break-word" }}
                  />
                </Stack>
              </Stack>
              <div style={{ border: "1px solid lightgray" }}></div>
              <Stack width={"50%"} justifyContent={"space-between"}>
                <Typography fontWeight={"bold"} fontSize={18}>
                  Hotel Amenities
                </Typography>
                <Stack
                  gap={2}
                  direction={"row"}
                  sx={{ flexWrap: "wrap" }}
                  maxHeight={"35%"}
                  minHeight={"10%"}
                  overflow={"auto"}
                >
                  {item?.amenities.map((item: any, i: any) => (
                    <li key={i} style={{ minWidth: 200 }}>
                      {item}
                    </li>
                  ))}
                </Stack>
                <Divider sx={{ mt: "10%" }} />
                <Stack direction={"row"} spacing={2}>
                  <Stack direction={"column"} padding={1}>
                    <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                      From
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
                      ₹{item?.price}
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
                        11:59pm Hotel Time 2 Days Before Arrival Or Pay 1 Night
                        Fee /Credit Card Required
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
                  <Button
                    sx={{
                      fontWeight: "bold",
                      mt: "2%",
                    }}
                    color="error"
                    variant="contained"
                    onClick={() => {
                      updateRedux(item);
                    }}
                    disabled={
                      item?.isAvailable === "false" ||
                      item?.roomQuantity === "0" ||
                      TotalRooms.current > +item?.roomQuantity
                    }
                  >
                    {item?.isAvailable === "false" ||
                    item?.roomQuantity === "0" ||
                    TotalRooms.current > +item?.roomQuantity
                      ? "Currently Unavailable"
                      : "Book Now "}
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
}

export default UserViewRooms;
