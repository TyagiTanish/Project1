import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import SimpleMap from "./Map";
import Footer from "./Footer";
import Seachbar2 from "./Seachbar2";
import { Link, Outlet } from "react-router-dom";
import Logo from "./Logo";
import Hotels from "./Hotels";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
const HotelsPage = () => {

  const { request } = useAuth();
  const search = useSelector((state:any)=>state.userReducer.searchDetails);
  const [searchTerm, setSearchTerm] = useState(search);
  const [filteredData, setFilteredData] = useState([]);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // useMemo(async() => {
  //   const result = await request.get("/getHotels");
  //   setFilteredData(result.data);
  // }, []);

  const filterData = async() => {
    const result = await request.get("/getHotels",{
      params:{
        search:searchTerm    
        }
    });
    setFilteredData(result.data);
  };
  useEffect(() => {
    const handleWindowSize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSize);
  });

useMemo(()=>{
  setSearchTerm(search)
  filterData()
},[searchTerm])


  return (
    <>
      <Stack direction={"row"} sx={{ m: { md: 2, xl: 5, sm: 3 } }}>
        {filteredData.length!==0 ? <>  {filteredData !== undefined ? (
          <Hotels filteredData={filteredData} screenSize={screenSize} />
        ) : null}
        {screenSize <= 768 ? <></> : <SimpleMap filteredData={filteredData} />}</> : 
         <Box
          component="img"
          sx={{
            ml:{xl:'25%',md:'12%',sm:'12%'},
         
          }}
          alt="The house from the offer."
          src={require("../components/image_processing20210903-11554-1p0lr4f.gif")}
        /> }
      
      </Stack>
      <Footer />
    </>
  );
};

export default HotelsPage;
