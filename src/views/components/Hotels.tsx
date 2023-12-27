import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Seachbar2 from "./Seachbar2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HotelDetails from "./HotelDetails";

import Footer from "./Footer";
import HomeBody from "./HomeBody";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import SimpleMap from "./Map";
import OverViewHotel from "./OverViewHotel";

function Hotels({ filteredData }: any) {
  const navigate = useNavigate();
  const [detailIndex, setDetailIndex] = useState<any>("");
  const [openModule, setOpenModule] = useState<any>("info");
  const handleClick = (index: any) => {
    setDetailIndex(index);

    if (index === detailIndex) {
      setDetailIndex("");
    }
  };

  const handleViewDeal = (item: any) => {
    navigate("/billing");
  };

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          overflowY: "auto",
          // maxWidth: "60vw",
          width: { sm: "65%", lg: "65%" },
          padding: { sm: 0 },
        }}
      >
        {filteredData?.map((item: any, i: any) => (
          <>
            <Stack
              direction={"row"}
              sx={{
                // display: "stack",
                // flexDirection: "row",
                direction: "row",
                padding: "10px",
                border: "1px solid lightgrey",
                borderRadius: "10px",
                m: { sm: "5px", lg: 1 },
                width: { sm: "420px", lg: "800px" },
              }}
            >
              <Box sx={{ width: { sm: 100, lg: 300 } }}>
                <img
                  src={require(`./${item.src}`)}
                  alt="hotel pic"
                  style={{
                    width: "14vh",
                    height: "15vh",
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    marginTop: 2,
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop: "30px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { sm: "10px", lg: "20px" },
                    opacity: 0.8,
                    width: { sm: "100px", lg: "250px" },
                  }}
                >
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { sm: "12px", lg: "15px" },
                      opacity: 0.5,
                      marginTop: "10px",
                    }}
                  >
                    Hotel
                  </Typography>
                  <Button
                    sx={{
                      color: "grey",
                      ml: { sm: 0, lg: 12 },
                      mt: { sm: "6px" },
                      fontSize: { sm: 8, lg: 10 },
                      width: { sm: "85px", lg: 100 },
                    }}
                    onClick={() => {
                      handleClick(i);
                    }}
                  >
                    View More
                    <ExpandMoreIcon sx={{ fontSize: { sm: "20px" } }} />
                  </Button>
                </Box>
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
              </Box>

              <Box
                sx={{
                  // margin: "20px",
                  marginLeft: { sm: "6px", lg: "50px" },
                  border: "1px solid lightgray",
                  width: { sm: "160px", lg: "310px" },
                  height: "85px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(241,248,234)",
                  padding: { sm: 1, lg: 2 },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: { sm: "60px", lg: "90px" },
                    border: "1px solid red",
                    ml: { sm: 10, lg: 22 },
                    height: { sm: "5px", lg: "25px" },
                    borderRadius: "15px",
                    color: "red",
                    fontSize: { sm: "7px", lg: "10px" },
                    padding: 1,
                    fontWeight: "bold",
                  }}
                >
                  Our Lowest Price
                </Box>

                <Box
                  sx={{
                    color: "#D4164B",
                    fontWeight: "bold",
                    fontSize: "8px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <DoneIcon
                    sx={{
                      fontSize: { sm: "12px", lg: "15px" },
                      fontWeight: "bold",
                    }}
                  />{" "}
                  <Typography
                    sx={{
                      fontSize: { sm: "10px", lg: "12px" },
                      fontWeight: "bold",
                    }}
                  >
                    Free Cancelation
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "10px",
                    marginLeft: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { sm: "14px", lg: "18px" },
                      opacity: 0.7,
                    }}
                  >
                    ₹{item.price}
                  </Typography>
                  <IconButton href="/billing">
                    {" "}
                    <Button
                      sx={{
                        width: { sm: "80px", lg: "130px" },
                        backgroundColor: "#D4164B",
                        height: { sm: "20px", lg: "30px" },
                        color: "white",
                        fontWeight: "bold",
                        marginLeft: { sm: "10px", lg: "90px" },
                        marginTop: "-9px",
                        textTransform: "none",
                        fontSize: { sm: "10px", lg: 20 },
                      }}
                      // className="btn2"
                    >
                      View Deal{" "}
                      <Box
                        sx={{
                          width: { sm: "3px", lg: "5px" },
                          mt: { sm: "5px", lg: 1.3 },
                        }}
                      >
                        {" "}
                        <KeyboardArrowRightIcon />
                      </Box>
                    </Button>
                  </IconButton>
                </Box>
              </Box>
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
      </Box>
    </>
  );
}

export default Hotels;
