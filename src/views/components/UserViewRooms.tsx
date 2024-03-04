
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

import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

import RoomDialog from "./RoomDialog";

/**
 * To Show all the rooms of the Hotel. Markdown is *View Deal*.
 */

function UserViewRooms({ hotels }: any) {
  const navigate = useNavigate();
  const [roomImage, setRoomImage] = useState(0);
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


  const hotelId: any = hotels[0]?._id;
  const handleDialog = (item: any) => {
    setOpen2(true);
    setDetails(item);
  };
  const handleClose = () => {
    setOpen2(false);
  };
  return (
    <>
      <Stack
        justifyContent={"space-evenly"}

        direction={"row"}

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
                      src={`http://localhost:8000/${item?.photos[roomImage]?.path}`}
                    />
                    <>
                      <Stack direction={"column"} spacing={0.2}>
                        {item?.photos?.map((image: any, index: number) => {
                          return (
                            <>
                              {index !== roomImage && (
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
                      updateRedux(item)
                      
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
          // </Dialog>
        ))}
      </Stack>
      {/* {open2 && (
=======
            sx={{ width: "18%" }}
            boxShadow={4}
            direction={"column"}
            spacing={1}
            padding={1}
          >
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
              }}
              alt="The house from the offer."
              // src={item?.photos[0]}
              src={`http://localhost:8000/${item?.photos[i].path}`}
            />
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: { xl: 18, md: 15, sm: 14 },
              }}
            >
              {item?.roomType}
            </Typography>
            <Typography sx={{ fontSize: { xl: 14, md: 13, sm: 12 } }}>
              {/* {item?.description.slice(0, 90)}... */}

              <Box
                dangerouslySetInnerHTML={{
                  __html: item?.discription.slice(0, 90),
                }}
                sx={{ flex: 1, wordBreak: "break-word" }}
              />
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
              {" "}
              <Typography sx={{ fontSize: { xl: 15, md: 14, sm: 13 } }}>
                Member Bed and Breakfast
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xl: 15, md: 14, sm: 13 },
                }}
              >
                {item?.price}/-
              </Typography>
            </Stack>
            {/* // <Stack direction={"row"} justifyContent={"space-between"}>
            //   {" "}
            //   <Typography sx={{ fontSize: { xl: 15, md: 14, sm: 13 } }}>
            //     Bed and Breakfast
            //   </Typography>
            //   <Typography
            //     sx={{
            //       fontWeight: "bold",
            //       fontSize: { xl: 15, md: 14, sm: 13 },
            //     }}
            //   >
            //     {item.bedAndBreakfastPrice}
            //   </Typography>
            // </Stack> */}
            <Button
              sx={{
                textTransform: "capitalize",
                // backgroundImage: "linear-gradient(270deg,#D11450,#EE2A24)",
                // color: "white",
                fontWeight: "bold",
              }}
              variant="contained"
              color="error"
              onClick={() => {
                handleOpen();
                handleDialog(item);
              }}
            >
              Select & Book
            </Button>
          </Stack>
        ))}
      </Stack>
      {open && (

        <RoomDialog
          open={open2}
          handleClose={handleClose}
          details={details}
          hotelId={hotelId}
        />

      )} */}

      )}

    </>
  );
}

export default UserViewRooms;
