import {
  Box,
  Button,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { roomDetails } from "./redux/user/userSlice";
/**
 * To Show all the rooms of the Hotel. Markdown is *View Deal*.
 */

function UserViewRooms({ hotels }: any) {
  const navigate = useNavigate();
  const [roomImage, setRoomImage] = useState({ roomID: null, index: 0 });
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

  let Rooms: any = localStorage.getItem("Rooms&Guests");
  return (
    <>
      <Stack
        justifyContent={"space-evenly"}
        marginTop={"4%"}
        marginBottom={"4%"}
      >
        {hotels[0]?.rooms?.map((item: any, i: any) => (
          <Stack
            maxWidth={"80%"}
            alignSelf={"center"}
            m={3}
            bgcolor={"	#F5F5F5"}
            boxShadow={10}
          >
            <DialogTitle sx={{ fontWeight: "bold" }}>
              {item?.roomType}
            </DialogTitle>
            <Divider />
            <Stack direction={"row"} padding={2} spacing={3}>
              <Stack width={"45%"}>
                <Box>
                  <Stack direction={"row"} spacing={0.2}>
                    <Box
                      component={"img"}
                      width={{ xl: "64%", md: "60%", sm: "65%", xs: "50%" }}
                      // height={181.8}
                      src={
                        roomImage.roomID === item?._id
                          ? `http://localhost:8000/${item?.photos[roomImage.index]?.path}`
                          : `http://localhost:8000/${item?.photos[0]?.path}`
                      }
                    />
                    <>
                      <Stack direction={"column"} spacing={0.2}>
                        {item?.photos?.map((image: any, index: number) => {
                          return (
                            <>
                              {index !== roomImage.index &&(
                                <Box
                                  component={"img"}
                                  width={100}
                                  height={{ lg: 90 }}
                                  src={`http://localhost:8000/${image?.path}`}
                                  onClick={() =>
                                    setRoomImage({
                                      roomID: item._id,
                                      index: index,
                                    })
                                  }
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
                    <li style={{ minWidth: 200 }}>{item}</li>
                  ))}
                </Stack>
                <Divider sx={{ mt: "10%" }} />
                <Stack direction={"row"} spacing={2}>
                  <Stack direction={"column"} padding={1}>
                    <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                      From
                    </Typography>
                    <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
                      ₹{item?.price}/-
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
                  {" "}
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
                      JSON.parse(Rooms)?.Rooms > item?.roomQuantity
                    }
                  >
                    {item?.isAvailable === "false" ||
                    item?.roomQuantity === "0" ||
                    JSON.parse(Rooms)?.Rooms > item?.roomQuantity
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
