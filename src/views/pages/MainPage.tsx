import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import OtpVerification from "../components/OtpVerification";

// import SignUpComp from "../components/SignUpComp";

import SignUp from "../components/SignUp";
import SignUpComp from "../components/Loginn";
import Footer from "../components/Footer";

function MainPage() {
  const [verify, setVerify]: any = useState(0);
  const [email, setEmail]: any = useState("");
  return (
    <>
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
          display: "block",
          opacity: "80%",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            color: "white",
            m: "12%",
            width: "55%",
            fontWeight: "bolder",
            textAlign: "left",
          }}
        >
          {" "}
          <Typography variant="h2">
            There's a smarter way to OYO around
          </Typography>
          <Typography sx={{ width: "77%" }}>
            Sign up with phone number and get exclusive access to discounts and
            savings on OYO stays and with our many travel partners.
          </Typography>
        </Typography>
        {verify ? (
          <Box sx={{ ml: "70%", position: "absolute", mt: "10%" }}>
            <OtpVerification />
            {/* <SignUpComp/> */}
            {/* <SignUp/> */}
          </Box>
        ) : (
          <Box sx={{ ml: "70%", position: "absolute", mt: "10%" }}>
            {/* <OtpVerification /> */}``
            <SignUpComp setVerify={setVerify} />
            {/* <SignUp/> */}
          </Box>
        )}

        <Typography sx={{ width: "77%" }}>
          Sign up with phone number and get exclusive access to discounts and
          savings on OYO stays and with our many travel partners.
        </Typography>

        <Box sx={{ ml: "70%", position: "absolute", mt: "10%" }}>
          {/* <OtpVerification /> */}
          {/* <SignUpComp/> */}
          {/* <SignUp/> */}
        </Box>
      </Box>
      <Footer />
    </>
  );
}

export default MainPage;
