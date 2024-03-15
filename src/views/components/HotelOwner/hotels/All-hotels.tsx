import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Box, Button, Stack } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import SearchHotels from "../../SearchHotels";
import AboutHotel from "../../AboutHotel";
import Message from "../../Message";
import HotelListDrawer from "./DrawerWithHotelName/HotelLIstDrawer";

const Allhotels = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<any>([]);
  const [render, setRender] = useState(1);
  const [open, setOpen] = useState(false);
  const { request } = useAuth();
  const [screenSize, setScreenSize] = useState<any>(window.outerWidth);

  useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
    };
    // console.log("screenSize", screenSize);

    window.addEventListener("resize", handleWindowSize);
  });
  // const filterData = (searchTerm: any) => {
  //   const filteredData = hotels.filter((item: any) =>
  //     item.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredData(filteredData);
  // };
  const navigate = useNavigate();
  const handleInputChange = useCallback((value: any) => {
    setSearchTerm(value);
    // console.log(searchTerm);
  }, []);

  useEffect(() => {
    const get = async () => {
      const result = await request.get("/searchHotels");

      setFilteredData(result.data);
    };
    get();
  }, [render]);
  useMemo(async () => {
    const result = await request.get("/searchHotels", {
      params: {
        search: searchTerm,
      },
    });
    setFilteredData(result.data);
  }, [searchTerm]);
  const handleClick = useCallback(
    (data: any) => {
      navigate(`/member/hotels/${data}`);
    },
    [navigate]
  );
  // const handleClick=(data:any)=>{
  //   navigate(`/member/hotels/${data}`)
  // }
  return (
    <Box>
      {/* {filteredData.length !== 0 ? ( */}
      <Stack direction={screenSize > 768 ? "row" : "column"} spacing={1}>
        {filteredData.length !== 0}
        {open === false ? (
          <>
            {screenSize <= 768 ? (
              <HotelListDrawer
                filteredData={filteredData}
                handleClick={handleClick}
                handleInputChange={handleInputChange}
                seacrhTerm={searchTerm}
                data={{ id: filteredData[0]?._id }}
              />
            ) : (
              <SearchHotels
                filteredData={filteredData}
                handleClick={handleClick}
                handleInputChange={handleInputChange}
                seacrhTerm={searchTerm}
                data={{ id: filteredData[0]?._id }}
                setRender={setRender}
                setSearchTerm={setSearchTerm}
              />
            )}
            <AboutHotel setRender={setRender} data={filteredData[0]} />
          </>
        ) : (
          <Message />
        )}
      </Stack>
      {/* ) : (
        <>
          <Stack
            direction={"column"}
            sx={{ width: { xl: "70%" } }}
            alignItems={"center"}
          >
            <Box
              component="img"
              sx={{
                ml: { xl: "25%", md: "3%", sm: "3%" },
                mt: { xl: "5%" },
              }}
              alt="The house from the offer."
              src={require("../../no_result.gif")}
            />
            <Button
              onClick={() => {
                setRender((prev) => prev + 1);
              }}
              sx={{ ml: { xl: "26%", md: "5%" } }}
              variant="contained"
            >
              Back
            </Button>
          </Stack>
        </>
      )} */}
    </Box>
  );
};
export default Allhotels;
