import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import OtpInput from "./OtpInput";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     he111
//   </Box>
// );
export default function OtpVerification() {
  const [otp, setOtp] = React.useState("");

  return (
    <Card sx={{ maxWidth: 400, border: "1px solid black" }}>
      <Typography
        sx={{
          maxWidth: "800px",
          height: "30px",
          backgroundColor: " #D4164B",
          color: "white",
        }}
      >
        <Typography sx={{ padding: "5px", ml: "10px", fontSize: "15px" }}>
          Sign Up and get upto Rs.500 OYO Money
        </Typography>
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bolder", mt: "20px", ml: "20px", m: 2 }}
      >
        Verify Your Email
      </Typography>
      <Typography sx={{ fontWeight: "bold", margin: "20px" }}>
        We have sent a mail on your Email id ####### Please click on the link to
        login.{" "}
      </Typography>
      {/* <Typography sx={{ mt: 2 }}>
        {" "}
        <Link
          sx={{
            textDecoration: "none",
            color: "#D4164B",
            margin: "20px",
            fontWeight: "bold",
          }}
        >
          Use a different number
        </Link>
      </Typography> */}
      {/* <Typography sx={{ margin: "20px" }}>
        Enter your 4-digit passcode
      </Typography>
      <Typography sx={{ margin: "20px" }}>
        <OtpInput otp={otp} setOtp={setOtp} />
      </Typography>
      {otp !== "" ? (
        <Button
          variant="contained"
          sx={{ mt: "5px", ml: "30px", width: "50%" }}
        >
          Submit
        </Button>
      ) : (
        <Button
          variant="contained"
          disabled
          sx={{ mt: "5px", ml: "30px", width: "50%" }}
        >
          Submit
        </Button>
      )} */}
    </Card>
  );
}
