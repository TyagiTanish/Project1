import { Box, Button, IconButton, Typography } from "@mui/material";
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
          maxWidth: "60vw",
          padding: "10px",
        }}
      >
        {filteredData?.map((item: any, i: any) => (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                border: "1px solid lightgrey",
                borderRadius: "10px",
                m: 1,
                width: "50vw",
              }}
            >
              <img
                src={require(`./${item.src}`)}
                alt="hotel pic"
                style={{
                  width: "250px",
                  height: "200px",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                }}
              />

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
                    fontSize: "20px",
                    opacity: 0.8,
                    width: "250px",
                  }}
                >
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      opacity: 0.5,
                      marginTop: "10px",
                    }}
                  >
                    Hotel
                  </Typography>
                  <Button
                    sx={{ color: "grey", ml: 12, fontSize: 10 }}
                    onClick={() => {
                      handleClick(i);
                    }}
                  >
                    View More
                    <ExpandMoreIcon />
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
                  margin: "20px",
                  marginLeft: "50px",
                  border: "1px solid lightgray",
                  width: "310px",
                  height: "85px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(241,248,234)",
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: "90px",
                    border: "1px solid red",
                    ml: 22,
                    height: "25px",
                    borderRadius: "15px",
                    color: "red",
                    fontSize: "10px",
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
                  <DoneIcon sx={{ fontSize: "15px", fontWeight: "bold" }} />{" "}
                  <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
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
                      fontSize: "18px",
                      opacity: 0.7,
                    }}
                  >
                    ₹{item.price}
                  </Typography>
                  <IconButton href="/billing">
                    {" "}
                    <Button
                      sx={{
                        width: "120px",
                        backgroundColor: "#D4164B",
                        height: "35px",
                        color: "white",
                        fontWeight: "bold",
                        marginLeft: "120px",
                        marginTop: "-9px",
                        textTransform: "none",
                      }}
                    >
                      View Deal <KeyboardArrowRightIcon />
                    </Button>
                  </IconButton>
                </Box>
              </Box>
            </Box>

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
