import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import SimpleMap from "../Map/Map";
import Footer from "../Footer/Footer";
import Seachbar2 from "../Header/Navbar/SearchBar/Seachbar2";
import { Link, Outlet } from "react-router-dom";
import Logo from "../../Logo/Logo";
import Hotels from "./Hotels";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
import TuneIcon from "@mui/icons-material/TuneRounded";
import ToggleDrawerFilter from "../../Filters/ToggleDrawerFilter";
import Loader from "../../loader/Loader";
import { useDispatch } from "react-redux";
import { price, category } from "./redux/user/userSlice";
import { FormattedMessage } from "react-intl";

/**
 *  To show all the hotels to user. Markdown is *HotelsPage*.
 */
const HotelsPage = () => {
  const { request } = useAuth();
  const dispatch = useDispatch();

  const search = useSelector((state: any) => state.userReducer.searchDetails);
  const reduxPrice = useSelector((state: any) => state.userReducer.price);
  const reduxCategory = useSelector((state: any) => state.userReducer.category);
  // const search = localStorage.getItem("searchTerm");
  const [searchTerm, setSearchTerm] = useState(search || "");
  const [filteredData, setFilteredData] = useState([]);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [open, setOpen] = React.useState(false);
  const [filterPrice, setFilterPrice] = React.useState<any>(
    reduxPrice ? reduxPrice : [0, 37000]
  );
  const [filterCategory, setFilterCategory] = React.useState<any>(
    reduxCategory ? reduxCategory : []
  );
  const location = useSelector((state: any) => state.userReducer.location);
  const [applyFilter, setApplyFilter] = React.useState<any>(0);
  const filterData = async () => {
    try {
      if (searchTerm === "around me") {
        const result = await request.get("/getHotels", {
          params: {
            search: location,
            price: filterPrice,
            category: filterCategory,
          },
        });
        setFilteredData(result.data);
      } else {
        var index = searchTerm.indexOf(",");
        if (index > 0) {
          var result = await request.get("/getHotels", {
            params: {
              search: searchTerm.slice(0, index),
              price: filterPrice,
              category: filterCategory,
            },
          });
        } else {
          var result = await request.get("/getHotels", {
            params: {
              search: searchTerm,
              price: filterPrice,
              category: filterCategory,
            },
          });
        }
        setFilteredData(result?.data);
      }
    } catch (error) {
      // console.log(error);
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

    dispatch(price(filterPrice));
    dispatch(category(filterCategory));
    filterData();
  }, [search, searchTerm, applyFilter]);
  useMemo(() => {
    setFilterCategory(reduxCategory ? reduxCategory : []);
  }, [open]);
  return (
    <>
      {screenSize > 1024 && filteredData?.length !== 0 ? (
        <>
          <Stack direction={"row"}>
            {" "}
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
            <Box
              sx={{
                fontWeight: "bolder",
                color: "gray",
                fontSize: "20px",
                mt: 3.5,
                ml: 5,
              }}
            >
              {filteredData?.length} results found....
            </Box>
          </Stack>
        </>
      ) : null}
      <Stack direction={"row"} sx={{ ml: { md: 4, xl: 3, sm: 3, lg: 1 } }}>
        {filteredData?.length !== 0 ? (
          <>
            {" "}
            {filteredData !== undefined ? (
              <>
                <Hotels filteredData={filteredData} screenSize={screenSize} />
              </>
            ) : null}
            {screenSize <= 1024 ? (
              <></>
            ) : (
              <SimpleMap filteredData={filteredData} />
            )}
          </>
        ) : (
          <>
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
            <Box
              margin={15}
              marginLeft={"30%"}
              sx={{ fontSize: 20, color: "red" }}
            >
           <FormattedMessage defaultMessage="No Results Match your search"/>
            </Box>
          </>
        )}
      </Stack>
      <Footer />
      <ToggleDrawerFilter
        open={open}
        setOpen={setOpen}
        setFilteredData={setFilteredData}
        searchTerm={searchTerm}
        price={filterPrice}
        setPrice={setFilterPrice}
        category={filterCategory}
        setCategory={setFilterCategory}
        applyFilter={applyFilter}
        setApplyFilter={setApplyFilter}
      />
    </>
  );
};

export default HotelsPage;
