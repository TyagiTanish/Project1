import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
<<<<<<< HEAD

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    Heeeee
  </Box>
);
=======
import { Link } from "@mui/material";
import OtpInput from "./OtpInput";
>>>>>>> e87d4ac906404d84a6288b3c64930b638777ec00

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
<<<<<<< HEAD
    <Card sx={{ maxWidth: 350, maxHeight: 600 }}>
      <CardContent>
        <Typography style={{ width: 100, height: "30px" }}></Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
=======
    <Card sx={{ maxWidth: 400, height: "400px", border: "1px solid black" }}>
      <Typography
        style={{
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
        Share Otp
      </Typography>
      <Typography sx={{ fontWeight: "bold", margin: "20px" }}>
        We have sent a temporary passcode to you at PhoneNumber{" "}
      </Typography>
      <Typography sx={{ mt: 2 }}>
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
      </Typography>
      <Typography sx={{ margin: "20px" }}>
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
      )}
>>>>>>> e87d4ac906404d84a6288b3c64930b638777ec00
    </Card>
  );
}
