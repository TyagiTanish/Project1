import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import SimpleMap from "./Map";
import Footer from "./Footer";
import Seachbar2 from "./Seachbar2";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Hotels from "./Hotels";
import useAuth from "../../Hooks/useAuth/useAuth";
const HotelsPage = () => {
  // const [hotels] = useState([
  //   {
  //     name: "Hotel mountain face by snow",
  //     price: "8000/-",
  //     rating: "excellent",
  //     src: "pic1.jpg",
  //   },
  //   {
  //     name: "Bentewood Resort",
  //     price: "2000/-",
  //     rating: "excellent",
  //     src: "pic2.jpg",
  //   },
  //   {
  //     name: "JW Marriot Mumbai Sahar",
  //     price: "3000/-",
  //     rating: "excellent",
  //     src: "pic3.jpg",
  //   },
  //   {
  //     name: "Niranta Transit",
  //     price: "5000/-",
  //     rating: "excellent",
  //     src: "pic4.jpg",
  //   },
  //   {
  //     name: "Hotel Kohinoor Continental",
  //     price: "9000/-",
  //     rating: "excellent",
  //     src: "pic5.jpg",
  //   },
  // ]);
  const [hotels, sethotels] = useState<any>();
  const { request } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(hotels);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const getHotels = async () => {
    const result = await request.get("/getHotels");
    sethotels(result.data);
  };
  useEffect(() => {
    getHotels();
  }, []);
  useMemo(() => {
    setFilteredData(hotels);
  }, [hotels]);

  const filterData = (searchTerm: any) => {
    const filteredData = hotels.filter((item: any) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  useEffect(() => {
    const handleWindowSize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSize);
  });

  return (
    <>
      <Stack direction={screenSize < 1024 ? "column" : "row"} mt={2}>
        <IconButton>
          <Link to="/">
            <Logo />
          </Link>
        </IconButton>
        <Seachbar2
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterData={filterData}
        />
      </Stack>
      <Stack direction={"row"} sx={{ m: { md: 2, xl: 5, sm: 3 } }}>
        {filteredData !== undefined ? (
          <Hotels filteredData={filteredData} screenSize={screenSize} />
        ) : null}
        {screenSize <= 768 ? <></> : <SimpleMap filteredData={filteredData}  />}
      </Stack>
      <Footer />
    </>
  );
};

export default HotelsPage;
