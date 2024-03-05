import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import SimpleMap from "./Map";
import Footer from "./Footer";
import Seachbar2 from "./Seachbar2";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import Hotels from "./Hotels";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
import TuneIcon from "@mui/icons-material/TuneRounded";
import ToggleDrawerFilter from "./Filters/ToggleDrawerFilter";
import Loader from "./loader/Loader";

/**
 *  To show all the hotels to user. Markdown is *HotelsPage*.
 */
const HotelsPage = () => {
  const { request } = useAuth();
  // const search = useSelector((state: any) => state.userReducer.searchDetails);
  const search = localStorage.getItem("searchTerm");
  const [searchTerm, setSearchTerm] = useState(search);
  const [filteredData, setFilteredData] = useState([]);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [open, setOpen] = React.useState(false);
  const [price, setPrice] = React.useState<number[]>([10000, 37000]);
  const location = useSelector((state: any) => state.userReducer.location);
  const filterData = async () => {
    if (searchTerm === "around me") {
      const result = await request.get("/getHotels", {
        params: {
          search: location,
          price:price,
        },
      });
      setFilteredData(result.data);
    } else {
      const result = await request.get("/getHotels", {
        params: {
          search: searchTerm,
          price:price,
        },
      });
      setFilteredData(result.data);
    }



    // const result = await request.get("/getHotels", {
    //   params: {
    //     search: searchTerm,
    //     price:price,
    //   },
    // });
    // setFilteredData(result.data);

  };

  useEffect(() => {
    const handleWindowSize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSize);
  });

  useMemo(() => {
    setSearchTerm(search);
    filterData();
  }, [search, searchTerm,price]);
  return (
    <>
      {screenSize > 768 && filteredData.length !== 0 ? (
        <Button
          variant="outlined"
          onClick={() => setOpen(true)}
          sx={{
            height: "30px",
            width: "130px",
            ml: { xl: 8, lg: 5, md: 5 },
            mt: 3,
            mb: { xl: -3 },
          }}
        >
          <TuneIcon sx={{ mr: 1 }} />
          Filters
        </Button>
      ) : null}
      <Stack direction={"row"} sx={{ m: { md: 2, xl: 5, sm: 3 } }}>
        {filteredData.length !== 0 ? (
          <>
            {" "}
            {filteredData !== undefined ? (
              <Hotels filteredData={filteredData} screenSize={screenSize} />
            ) : null}
            {screenSize <= 768 ? (
              <></>
            ) : (
              <SimpleMap filteredData={filteredData} />
            )}
          </>
        ) : (
          <Box
            margin={15}
            marginLeft={"45%"}
            sx={{ fontSize: 20, color: "red" }}
          >
            No Results Match your search
          </Box>
        )}
      </Stack>
      <Footer />
      <ToggleDrawerFilter open={open} setOpen={setOpen} setFilteredData={setFilteredData} searchTerm={searchTerm} price={price} setPrice={setPrice}/>
    </> 
  );
};

export default HotelsPage;
