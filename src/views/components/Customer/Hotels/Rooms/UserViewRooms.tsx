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
import UseRoomAndGuestQuantity from "../../../../../Hooks/roomAndGuestQuantity/useRoomAndGuestQuantity";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useDispatch, useSelector } from "react-redux";
import { roomDetails } from "../../../redux/user/userSlice";
import { Theme, useTheme } from "@emotion/react";
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
    <Box position={"relative"} width={"100%"}>
      <Box
        component={"img"}
        src={`http://192.168.1.114:8000/${images[currentImageIndex]?.path}`}
        alt={"RoomImage"}
        sx={{
          width: "100%",
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
          right: "0%",
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
  const lang = useSelector((state: any) => state?.userReducer?.locale);
  const { TotalRooms } = UseRoomAndGuestQuantity();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <Typography
        id="Rooms"
        position={"absolute"}
        mt={-5}
        width={0}
      ></Typography>
      <Stack
        justifyContent={"space-evenly"}
        marginTop={"4%"}
        marginBottom={"4%"}
      >
        {hotels[0]?.rooms?.map((item: any, i: any) => (
          <Stack
            key={item._id}
            maxWidth={{ xl: "60%", lg: "70%" }}
            alignSelf={"center"}
            m={3}
            // bgcolor={"#F5F5F5"}
            // boxShadow={10}
            border={"1px solid lightgray"}
            // height={"80vh"}
          >
            <DialogTitle sx={{ fontWeight: "bold" }}>
              {item?.roomType}
            </DialogTitle>
            <Divider />
            <Stack direction={"column"} padding={2} spacing={2}>
              <Stack
                width={"100%"}
                direction={window?.innerWidth <= 768 ? "column" : "row"}
                spacing={3}
                alignItems={"center"}
              >
                <Box width={{ xl: "100%", lg: "100%", md: "100%", sm: "70%" }}>
                  <RoomImageSlider images={item?.photos} />
                </Box>
                {window?.innerWidth >= 1440 && (
                  <Box>
                    <hr
                      style={{ marginLeft: 3, height: 350, color: "lightgray" }}
                    />
                  </Box>
                )}

                <Stack
                  direction={"column"}
                  spacing={2}
                  overflow={"auto"}
                  // height={"56%"}
                  marginTop={"2%"}
                  p={1}
                  textAlign={"justify"}
                  width={"90%"}
                >
                  <Typography fontWeight={"bold"} fontSize={18}>
                    <FormattedMessage defaultMessage="Room Description" />
                  </Typography>
                  <Divider />
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: item?.discription,
                    }}
                    sx={{ flex: 1, wordBreak: "break-word" }}
                  />
                  <Stack direction={"row"} spacing={2}>
                    <Stack direction={"column"} padding={1}>
                      <Typography sx={{ fontWeight: 300, fontSize: 12 }}>
                        <FormattedMessage defaultMessage="From" />
                      </Typography>
                      {lang === "en" ? (
                        <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
                          ₹{item?.price}
                        </Typography>
                      ) : (
                        <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
                          €{(item?.price / 90).toFixed(1)}
                        </Typography>
                      )}
                      <Typography sx={{ fontSize: 13, color: "gray" }}>
                        <FormattedMessage defaultMessage="Avg/Night" />
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
                          <FormattedMessage defaultMessage="Cancelation Policy" />
                        </Typography>
                        <Typography sx={{ fontSize: 12 }}>
                          <FormattedMessage
                            defaultMessage="11:59pm Hotel Time 2 Days Before Arrival Or Pay 1 Night
                        Fee /Credit Card Required"
                          />
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                          <FormattedMessage defaultMessage=" Deposit Policy" />
                        </Typography>
                        <Typography sx={{ fontSize: 12 }}>
                          <FormattedMessage defaultMessage="Credit Card Guarantee Required" />
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
                      TotalRooms.current > +item?.roomQuantity ? (
                        <FormattedMessage defaultMessage="Currently Unavailable" />
                      ) : (
                        <FormattedMessage defaultMessage="Book Now" />
                      )}
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
              <div style={{ border: "1px solid lightgray" }}></div>
            </Stack>
            <Stack
              width={"100%"}
              justifyContent={"space-between"}
              spacing={2}
              p={3}
              marginTop={-3}
            >
              <Typography fontWeight={"bold"} fontSize={18}>
                <FormattedMessage defaultMessage="Amenities" />
              </Typography>
              <Stack
                gap={4}
                direction={"row"}
                sx={{ flexWrap: "wrap" }}
                maxHeight={"60%"}
                // minHeight={"50%"}
                overflow={"auto"}
              >
                {item?.amenities.map((item: any, i: any) => (
                  <li
                    key={i}
                    style={{
                      minWidth: 200,
                      listStyle: "none",

                      alignItems: "center",
                    }}
                  >
                    <Stack
                      direction={"row"}
                      gap={2}
                      alignItems={"center"}
                      width={200}
                    >
                      <Box>
                        {highlights?.map(
                          (highLight) =>
                            item === highLight?.Highlight && highLight?.icon
                        )}
                      </Box>
                      <Box width={200}> {item}</Box>
                    </Stack>
                  </li>
                ))}
              </Stack>
              {/* <Divider sx={{ mt: "10%" }} /> */}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
}

export default UserViewRooms;
