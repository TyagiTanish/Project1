import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import SimpleMap from "../Map/Map";
import Footer from "../Footer/Footer";
import Seachbar2 from "../Header/Navbar/SearchBar/Seachbar2";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Logo from "../../Logo/Logo";
import Hotels from "./Hotels";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
import TuneIcon from "@mui/icons-material/TuneRounded";
import ToggleDrawerFilter from "../../Filters/ToggleDrawerFilter";
import Loader from "../../loader/Loader";
import { useDispatch } from "react-redux";

import { FormattedMessage } from "react-intl";
import { price, category } from "../../redux/user/userSlice";
import Skeletons from "../../loader/skeleton/ImageSkeleton";
import cover from "../../../../assets/bg.avif";
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
  const [filteredData, setFilteredData] = useState<any>();
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const [open, setOpen] = React.useState(false);
  const [filterPrice, setFilterPrice] = React.useState<any>(
    reduxPrice ? reduxPrice : [0, 37000]
  );
  const [filterCategory, setFilterCategory] = React.useState<any>(
    reduxCategory ? reduxCategory : []
  );
  const navigate = useNavigate();
  const location = useSelector((state: any) => state.userReducer.location);
  const [applyFilter, setApplyFilter] = React.useState<any>(0);
  const [isMapLoading, setMapLoading] = useState(false);
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

  useMemo(() => {
    setMapLoading(true);
    setTimeout(() => {
      setMapLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {screenSize > 1024 &&
      filteredData?.length !== 0 &&
      filteredData !== false ? (
        <>
          <Stack direction={"row"} bgcolor={"rgb(250 250 250 0%)"}>
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
              <FormattedMessage defaultMessage="Filters" />
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
      <Stack
        direction={"row"}
        sx={{ bgcolor: "rgb(250 250 250 0%)" }}
        padding={2}
      >
        {filteredData !== false ? (
          filteredData?.length !== 0 ? (
            <>
              {" "}
              {filteredData !== undefined ? (
                <>
                  <Hotels filteredData={filteredData} screenSize={screenSize} />
                </>
              ) : null}
              {screenSize <= 1024 ? (
                <></>
              ) : isMapLoading ? (
                <Skeletons
                  width={{ xl: 800, sm: 700, md: "90%", lg: 650 }}
                  height={{ md: "80vh", lg: "90vh", xl: "78vh" }}
                />
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
                <FormattedMessage defaultMessage="Filters" />
              </Button>
              <Box
            sx={{
              backgroundImage: `url(${cover})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              width: "1400px",
              height: "600px",
              ml: 2,
            }}
          >
            <Stack sx={{ mt: "25%", fontSize: 26 }} direction={'column'} spacing={2} textAlign={'center'}>
              <Typography sx={{ fontSize: 30, color:'red', fontWeight:'bold',fontStyle:'oblique'}}>
                {/* <center> */}
                Oops ! No results match your filters
                  {/* </center> */}
              </Typography>

             
            </Stack>
          </Box>
            </>
          )
        ) : (
          <Box
            sx={{
              backgroundImage: `url(${cover})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              width: "1400px",
              height: "600px",
              ml: 25,
            }}
          >
            <Stack sx={{ mt: "25%", fontSize: 26 }} direction={'column'} spacing={2} textAlign={'center'}>
              <Typography sx={{ fontSize: 26 }}>
                {/* <center> */}
                  There is no property available for this search
                  {/* </center> */}
              </Typography>

              <Typography fontSize={18} >
              {/* <center> */}
                Book your next stay here:
                {/* </center> */}
              </Typography>
              
              <Button sx={{width:200,alignSelf:'center',bgcolor:'#1ab64f;', "&:hover": {
      backgroundColor: "#1ab64f"
    }}} variant="contained" onClick={()=>{window.history.back()}}>
            Go to HomePage
              </Button>
            </Stack>
          </Box>
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
