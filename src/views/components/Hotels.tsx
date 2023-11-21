import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Seachbar2 from "./Seachbar2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HotelDetails from "./HotelDetails";

import Footer from "./Footer";
import HomeBody from "./HomeBody";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import SimpleMap from "./Map";
import OverViewHotel from "./OverViewHotel";

function Hotels() {
  const [hotels] = useState([
    {
      name: "Hotel mountain face by snow",
      price: "8000/-",
      rating: "excellent",
      src: "pic1.jpg",
    },
    {
      name: "Bentewood Resort",
      price: "2000/-",
      rating: "excellent",
      src: "pic2.jpg",
    },
    {
      name: "JW Marriot Mumbai Sahar",
      price: "3000/-",
      rating: "excellent",
      src: "pic3.jpg",
    },
    {
      name: "Niranta Transit",
      price: "5000/-",
      rating: "excellent",
      src: "pic4.jpg",
    },
    {
      name: "Hotel Kohinoor Continental",
      price: "9000/-",
      rating: "excellent",
      src: "pic5.jpg",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(hotels);

  const filterData = (searchTerm: any) => {
    const filteredData = hotels.filter((item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const [detailIndex, setDetailIndex] = useState<any>("");
  const [openModule, setOpenModule] = useState<any>("info");
  const handleClick = (index: any) => {
    setDetailIndex(index);

    if (index === detailIndex) {
      setDetailIndex("");
    }
  };

  return (
    <>
      <Box sx={{ height: "100vh", overflowY: "auto", minWidth: "58vw" }}>
        {filteredData.map((item, i) => (
          <>
            {/* <Box
              sx={{
                width: "75%",
                margin: "10px",
                border: "1px solid lightgray",
                borderRadius: "20px",
                marginBottom: "30px",
              }}
            > */}
            <Box
              sx={{
                width: "58vw",
                margin: "10px",
                border: "1px solid lightgray",
                borderRadius: "20px",
                marginBottom: "30px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img
                  src={require(`./${item.src}`)}
                  alt="hotel pic"
                  style={{
                    width: "300px",
                    height: "250px",
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
                    width: "500px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "25px",
                      opacity: 0.8,
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
                    width: "300px",
                    height: "80px",
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
                    <Button
                      sx={{
                        width: "140px",
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
                  </Box>
                </Box>
              </Box>
            </Box>

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
