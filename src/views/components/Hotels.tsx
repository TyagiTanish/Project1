import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Seachbar2 from "./Seachbar2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HotelDetails from "./HotelDetails";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "./Footer";
import HomeBody from "./HomeBody";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import SimpleMap from "./Map";
import OverViewHotel from "./OverViewHotel";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { triggerAsyncId } from "async_hooks";

import { useDispatch, useSelector } from "react-redux";
import { hotelId } from "./redux/user/userSlice";

function Hotels({ filteredData, screenSize }: any) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [detailIndex, setDetailIndex] = useState<any>("");
  const [openModule, setOpenModule] = useState<any>("info");
  const [displayMap, SetDisplayMap] = useState(true);
  const [display, setDisplay] = useState(true);
  const [open, setOpen] = useState(false);
  const handleClick = (index: any) => {
    setDetailIndex(index);

    if (index === detailIndex) {
      setDetailIndex("");
    }
  };

  // const handleViewDeal = (item: any) => {
  //   navigate("/billing");
  // };
  const setRedux = (id: any) => {
    dispatch(hotelId(id));
  };





  return (
    <>
      <Box
        sx={{
          height: "90vh",
          overflowY: "auto",
        }}
      >
        {screenSize <= 768 ? (
          <Box>
            {display ? (
              <>
                <img
                  src={require("./Map.jpg")}
                  width={"30%"}
                  height={"50px"}
                  style={{
                    borderRadius: "10px",
                    marginLeft: "68%",
                    border: "1px solid lightgray",
                  }}
                ></img>
                <IconButton
                  onClick={() => {
                    SetDisplayMap(false);
                    setDisplay(false);
                  }}
                  sx={{
                    position: "sticky  ",
                    m: "-6% 0 0 -20%",
                    border: "1px solid",
                    borderRadius: "10px",
                    width: "9%",
                    fontSize: "10px",
                    bgcolor: "white",
                    fontWeight: "bolder",
                    color: "black",
                  }}
                >
                  {" "}
                  <LocationOnIcon fontSize="small" /> ViewMap
                </IconButton>
              </>
            ) : (
              <></>
            )}
          </Box>
        ) : (
          <></>
        )}
        
        {displayMap ? (
          <>
            {filteredData?.map((item: any, i: any) => (
              <>
                <Stack
                  direction={"row"}
                  sx={{
                    p: 2,
                    m: 2,
                    justifyContent: "space-between",
                    direction: "row",
                    border: "1px solid lightgrey",
                    borderRadius: "10px",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: { sm: "150px ", lg: "200px", md: "140px" },
                      height: { lg: "200px", sm: "15vh", md: "15vh" },
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                    alt="The house from the offer."
                    // src={require(`./${item.photo}`)}
                    src={`https://localhost:8000/${item?.photo}`}
                  />

                  <Stack m={2} width={400}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        // fontSize: { sm: "15px", lg: "20px", md: "18px" },
                        opacity: 0.8,
                        // width: { sm: "150px", lg: "200px", md: "180px" },
                      }}
                    >
                      {item.hotelName}
                    </Typography>
                    <Stack direction={"row"} sx={{ alignItems: "center" }} gap={2} >
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { sm: "12px", lg: "18px", md: "14px" },
                          opacity: 0.5,
                          // marginTop: "10px",
                        }}
                      >
                        Hotel
                      </Typography>
                      <Button
                        sx={{
                          color: "grey",
                          // ml: { sm: 0, lg: 12 },
                          // mt: { sm: "6px" },
                          fontSize: { sm: 8, lg: 10, md: 10 },
                          // width: { sm: "85px", lg: 100, md: 100 },
                        }}
                        onClick={() => {
                          handleClick(i);
                        }}
                      >
                        View More
                        <ExpandMoreIcon sx={{ fontSize: { sm: "20px" } }} />
                      </Button>
                    </Stack>
                    {/* <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      opacity: 0.5,
                      marginTop: "5px",
                    }}
                   >
                    {item.rating}
                   </Typography> */}
                  </Stack>

                  <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                      // margin: "20px",
                      // marginLeft: { sm: "120px", lg: "110px", md: "35px" },
                      border: "1px solid lightgray",
                      // width: { sm: "100%", lg: "310px", md: "410px" },
                      height: "85px",
                      borderRadius: "20px",
                      // backgroundColor: "rgba(241,248,234)",
                      padding: { sm: 1, lg: 2, md: 1 },
                      // display: "flex",
                      // flexDirection: "column",
                      marginTop: { sm: "8px" },
                    }}
                  >
                    <Stack spacing={2}>
                      <Stack
                        direction={"row"}
                        sx={{
                          color: "#D4164B",
                          fontWeight: "bold",
                          // fontSize: "8px",
                          // display: "flex",
                          // flexDirection: "row",
                        }}
                      >
                        <DoneIcon
                          sx={{
                            fontSize: { sm: "12px", lg: "15px", md: "14px" },
                            fontWeight: "bold",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: { sm: "10px", lg: "12px", md: "10px" },
                            fontWeight: "bold",
                          }}
                        >
                          Free Cancelation
                        </Typography>
                      </Stack>

                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: { sm: "15px", lg: "18px", md: "15px" },
                          opacity: 0.7,
                        }}
                      >
                        ₹{item?.rooms[0]?.price}
                      </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      <Chip
                        label="Our Lowest Price"
                        variant="outlined"
                        color="error"
                        sx={{
                          width: { sm: 150, lg: 150, md: 120 },
                          float: "right",
                        }}
                      />
                      <Button
                        variant="contained"
                        // href="/billing"
                        // href="/viewDeal"
                        onClick={() => {
                          setRedux(item._id);
                          navigate(`/viewDeal/${item._id}`);
                          // <ViewDeal />;
                        }}
                        endIcon={<KeyboardArrowRightIcon />}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#D4164B",
                          },
                          backgroundColor: "#D4164B",
                          width: { sm: 150, lg: 150, md: 120 },
                          fontSize: { md: 12, lg: 14 },
                          height: { md: 30 },
                          textTransform: "none",
                        }}
                      >
                        View Deal
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>

                {/* </Box> */}
                {detailIndex === i ? (
                  <HotelDetails
                    i={i}
                    item={item}
                    handleClick={handleClick}
                    openModule={openModule}
                    setOpenModule={setOpenModule}
                  />
                ) : null}
                {/* </Box> */}
              </>
            ))}
          </>
        ) : (
          <>
            <IconButton
              sx={{ marginLeft: "95%", marginTop: "-1%" }}
              onClick={() => {
                setDisplay(true);
                SetDisplayMap(true);
              }}
            >
              <HighlightOffIcon />
            </IconButton>
            <SimpleMap filteredData={filteredData} />
          </>
        )}
      </Box>
    </>
  );
}

export default Hotels;
