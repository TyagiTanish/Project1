import { Box, Stack } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import OyoLogo from "../../../assets/OyoLogo";
import Logo from "../../components/Logo/Logo";
import Seachbar2 from "../../components/Customer/Header/Navbar/SearchBar/Seachbar2";
import { Outlet, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
import ProfileIcons from "./ProfileIcons";

const CustomerView = () => {
  const URL = useParams();
  const [url, setUrl] = useState<any>(URL);
  const [screenSize, setScreenSize] = useState(window?.innerWidth);
  const params = useParams();
  console.log(params);

  // useEffect(() => {
  //   console.log(URL);
  // });

  useEffect(() => {
    const handleWindowSize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSize);
  });

  return (
    <Stack>
      <Stack boxShadow={3} padding={2} justifyContent={"space-between"}>
        {screenSize === 768 && (
          <Box>
            <Logo />
          </Box>
        )}

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {screenSize > 768 ? (
            <Box>
              <Logo />
            </Box>
          ) : null}

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {window.location.href === "http://localhost:3000/" ||
            window?.location?.href ===
              `http://localhost:3000/profile/myBookings/${params?.id}` ||
            window?.location?.href ===
              "http://localhost:3000/profile/accountSetting" ||
            window?.location?.href ===
              "http://localhost:3000/profile/myBookings" ? (
              <></>
            ) : (
              <Box sx={{ ml: { sm: 0, md: 2 }, mt: 1 }}>
                <Seachbar2 />
              </Box>
            )}
          </Stack>
          <Box>
            <ProfileIcons />
          </Box>
        </Stack>
      </Stack>
      <Outlet />
    </Stack>
  );
};

export default CustomerView;
