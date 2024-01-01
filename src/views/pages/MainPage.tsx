import { Box, Stack, Typography, colors } from "@mui/material";
import SignUpComp from "../components/Loginn";
import Footer from "../components/Footer";
import { useState } from "react";
import OtpVerification from "../components/OtpVerification";
import SignUp from "../components/SignUp";
import { useSelector } from "react-redux";
import BasicCard from "../components/Home";
import { FormattedMessage } from "react-intl";
import Loaders from "../components/Loaders";
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
        {display && <Box sx={{background:'blur'}} ><Loaders/></Box>}
          <Box
            sx={{
              background: `
        linear-gradient(
          rgba(0, 0, 0, 1),
          rgba(0, 0, 0, 0.1)
        ),
        url("https://assets.oyoroomscdn.com/cmsMedia/b3c9905c-31d1-4349-8594-c07deae6b36d.jpg") no-repeat`,
              width: "100%",
              height: "100vh",
              // backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              opacity: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row", md: "row", xl: "row" }}
              alignItems={"center"}
              m={5}
              sx={{ width: "100%" }}
              spacing={6}
            >
              <Stack
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
              </Stack>
              <Box>
                {LogReg ? (
                  <SignUp setLogReg={setLogReg} setDisplay={setDisplay} />
                ) : (
                  <>
                    {verify ? (
                      <OtpVerification />
                    ) : (
                      <SignUpComp setVerify={setVerify} setLogReg={setLogReg} />
                    )}
                  </>
                )}
              </Box>
            </Stack>
          </Box>
          <Footer />{" "}
        </>
      ) : (
        <BasicCard />
      )}
    </>
  );
}

export default MainPage;
