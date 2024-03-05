import { Box, Stack, Typography } from "@mui/material";
import SignUpComp from "../components/Loginn";
import Footer from "../components/Footer";
import { useState } from "react";
import OtpVerification from "../components/OtpVerification";
import SignUp from "../components/SignUp";
import { useSelector } from "react-redux";
import BasicCard from "../components/Home";
import MemberRegister from "./MemberRegister";
import Loaders from "./Loaders";

function MemberRegistrationPage() {
  const [verify, setVerify]: any = useState(0);
  const [LogReg, setLogReg] = useState(false);
  const [email, setEmail]: any = useState("");
  const [loader, setLoader] = useState(false);
  const user = useSelector((state: any) => state.userReducer.user);
  return (
    <>
      {!user ? (
        <>
          {loader && (
            <Box sx={{ background: "blur" }}>
              <Loaders />
            </Box>
          )}
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

              backgroundSize: "cover",

              opacity: "80%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={4}
              justifyContent={"space-around"}
              width={"100%"}
            >
              <Typography
                sx={{
                  color: "white",

                  fontWeight: "bolder",
                  textAlign: "left",

                  alignContent: "end",

                  width: { sm: "40%" },
                }}
              >
                {" "}
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xl: 45, md: 28, sm: 26 },
                  }}
                >
                  There's a smarter way to OYO around
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xl: 16, md: 11, sm: 15 },
                    mt: 1,
                    letterSpacing: 1,
                  }}
                >
                  Sign up with phone number and get exclusive access to
                  discounts and savings on OYO stays and with our many travel
                  partners.
                </Typography>
              </Typography>

              <Box>
                <MemberRegister setLoader={setLoader} />
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

export default MemberRegistrationPage;
