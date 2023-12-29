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
          padding:{sm:0},
          height: "100vh",
          overflowY: "auto",
          // maxWidth: "60vw",
          width: { sm: "66%", lg: "55%" },
        
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
                padding: { sm: "5px", lg: "10px" ,md:"9px"},
                border: "1px solid lightgrey",
                borderRadius: "10px",
                m: { sm: "1px", lg: 1 },
                width: { sm: "420px", lg: "910px" , md:"570px"},
              }}
            >
              <Box sx={{ width: { sm: 100, lg: 300 } }}>
                <Box
                  component="img"
                  sx={{
                    width: { sm: "15vh", lg: "19vh",md:"140px" },
                    height: {lg:"15vh", sm:"15vh", md:"20vh" },
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    marginTop: 2,
                  }}
                  alt="The house from the offer."
                  src={require(`./${item.src}`)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: { sm: "25px", xl:"-90px",md:"55px" },
                  marginTop: { sm: "30px", xl: "20px" },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { sm: "12px", lg: "20px" ,md:"18px"},
                    opacity: 0.8,
                    width: { sm: "100px", lg: "200px", md:"180px"},
                  }}
                >
                  {item.name}
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { sm: "12px", lg: "18px",md:"14px" },
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
                      fontSize: { sm: 8, lg: 10,md:10 },
                      width: { sm: "85px", lg: 100 ,md:100},
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
                  marginLeft: { sm: "3px", lg: "110px", md:"40px" },
                  border: "1px solid lightgray",
                  width: { sm: "160px", lg: "310px" ,md:"410px"},
                  height: "85px",
                  borderRadius: "20px",
                  // backgroundColor: "rgba(241,248,234)",
                  padding: { sm: 1, lg: 2 ,md:1},
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    width: { sm: "60px", lg: "90px",md:"80px" },
                    border: "1px solid red",
                    ml: { sm: 10, lg: 22,md:9 },
                    height: { sm: "5px", lg: "25px" },
                    borderRadius: "15px",
                    color: "red",
                    fontSize: { sm: "7px", lg: "10px", md:"9px" },
                  
                   pt:{md:0.75},
                   pr:{md:1},
                   pb:{md:1.3},
                   pl:{md:1.3},
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
                      fontSize: { sm: "12px", lg: "15px" ,md:"14px"},
                      fontWeight: "bold",
                    }}
                  />{" "}
                  <Typography
                    sx={{
                      fontSize: { sm: "10px", lg: "12px",md:"12px" },
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
                      fontSize: { sm: "14px", lg: "18px",md:"15px" },
                      opacity: 0.7,
                    }}
                  >
                    ₹{item.price}
                  </Typography>
                 
               
                    <Button
                   href="/billing"
                  
                      sx={{
                        "&:hover": { backgroundColor: "#D4164B"} ,
                        width: { sm: "80px", lg: "130px" ,md:"90px"},
                        backgroundColor: "#D4164B",
                        height: { sm: "20px", lg: "30px" ,md:"25px"},
                        color: "white",
                        fontWeight: "bold",
                        marginLeft: { sm: "10px", lg: "90px" },
                        marginTop: "-9px",
                        textTransform: "none",
                        fontSize: { sm: "10px", lg: 20 ,md:12},
                                              
                      }}
                      // className="btn2"
                    >
                      View Deal
                      <Box
                        sx={{
                          width: { sm: "3px", lg: "5px" , md:"4px"},
                          mt: { sm: "5px", lg: 1.3},
                          // ml:{md:-0.5}
                        }}
                      >
                        {" "}
                        <KeyboardArrowRightIcon />
                      </Box>
                    </Button>
                  
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
