import { Box, Grid, Stack, Typography, colors } from "@mui/material";
import LoginForm from "./Loginn";
import Footer from "../Footer/Footer";
import { useState } from "react";
import OtpVerification from "../../OtherComponents/OtpVerification";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
import BasicCard from "../Header/Navbar/HotelLocations/Home";
import { FormattedMessage } from "react-intl";
import Loaders from "../../loader/Loaders";
import Language from "../../Language";
import Logo from "../../Logo/Logo";
import Oyo2 from "../../OtherComponents/Oyo2";
import OyoLogo from "../../../../assets/OyoLogo";
function MainPage() {
  const [verify, setVerify]: any = useState(0);
  const [LogReg, setLogReg] = useState(false);
  const [email, setEmail]: any = useState("");
  const [display, setDisplay] = useState(false);
  const user = useSelector((state: any) => state.userReducer.user);
  return (
    <>
      {!user ? (
        <>
          {display && (
            <Box sx={{ background: "blur" }}>
              <Loaders />
            </Box>
          )}
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            //     sx={{
            //       background: `
            // linear-gradient(
            //   rgba(0, 0, 0, 1),
            //   rgba(0, 0, 0, 0.1)
            // ),
            // url("https://assets.oyoroomscdn.com/cmsMedia/b3c9905c-31d1-4349-8594-c07deae6b36d.jpg") no-repeat`,
            //       width: "100%",
            //       height: "100vh",
            //       // backgroundRepeat: "no-repeat",
            //       backgroundSize: "cover",
            //       opacity: "80%",
            //       display: "flex",
            //       justifyContent: "center",
            //     }}
          >
            <Box
              component={"img"}
              // src={`${require("../../../../assets/pexels-pixabay-271639.jpg")}`}
              // src={
              //   "https://assets.oyoroomscdn.com/cmsMedia/b3c9905c-31d1-4349-8594-c07deae6b36d.jpg"
              // }
              src={require("../../../../assets/Group 13.jpg")}
              width={"50vw"}
              height={"100vh"}
              sx={{ position: "fixed" }}
            />

            <Grid
              // direction={{ xs: "column", sm: "row", md: "row", xl: "column" }}
              alignItems={"center"}
              m={5}
              sx={{ ml: "50%" }}
              spacing={6}
              container
              direction={"column"}
              xs={12}
              position={"relative"}
            >
              <Stack sx={{ alignItems: "flex-end" }} width={"100%"}>
                <Language />
              </Stack>
              {/* <Stack
                sx={{
                  color: "white",
                  fontWeight: "bolder",
                  textAlign: "left",
                }}
                direction={"column"}
              >
                <Typography variant="h4">
                  <FormattedMessage defaultMessage="There's a smarter way to OYO around" />
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xl: 16, md: 15, sm: 11 },
                    letterSpacing: 1,
                  }}
                >
                  <FormattedMessage
                    defaultMessage="  Sign up with phone number and get exclusive access to discounts
                and savings on OYO stays and with our many travel partners."
                  />
                </Typography>
              </Stack> */}
              <Grid item ml={-12}>
                <Logo />
              </Grid>
              {/* <Box> */}
              <Grid item xs={9.3} lg={7.5}>
                {LogReg ? (
                  <SignUp setLogReg={setLogReg} setDisplay={setDisplay} />
                ) : (
                  <>
                    {verify ? (
                      <OtpVerification />
                    ) : (
                      <LoginForm
                        setVerify={setVerify}
                        setLogReg={setLogReg}
                        setDisplay={setDisplay}
                      />
                    )}
                  </>
                )}
                {/* </Box> */}
              </Grid>
              {/* <Stack
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  // width: 600,
                  alignItems: "center",
                }}
              >
                2024 ©OYO, All right Reserved
              </Stack> */}
            </Grid>
          </Stack>

          {/* <Footer />{" "} */}
        </>
      ) : (
        <BasicCard />
      )}
    </>
  );
}

export default MainPage;
