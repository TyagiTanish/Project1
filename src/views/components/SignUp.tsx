import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../App.css";
import { Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

function SignUp() {
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const { register, handleSubmit } = useForm();
  return (
    <Card
      className="oyo-cell loginCard"
      sx={{
        border: "1px solid black",
        width: 470,
        height: "40vh",
        b: "1px solid black",
      }}
    >
      <Typography
        sx={{
          backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
          margin: "0",
          paddingLeft: "50px",
          paddingTop: "5px",
          paddingBottom: "5px",
          color: "white",
          fontWeight: "bold",
          width: "100%",
        }}
        color="text.secondary"
        gutterBottom
      >
        Sign up & Get ₹500 OYO Money
      </Typography>
      <Typography
        sx={{
          margin: 2,
          fontWeight: "bold",
          fontFamily: "Inter,sans-serif",
          fontSize: "30px",
          marginBottom: 1,
        }}
      >
        Sign Up
      </Typography>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            <Typography sx={{ fontWeight: "bold" }}>Name</Typography>
            <TextField
              // sx={{width:"400px"}}
              id="demo-helper-text-aligned"
              // label="Name"
              sx={{ mb: 8, height: 2 }}
              {...register("Name")}
            />
            <Typography sx={{ fontWeight: "bold" }}>Email</Typography>
            <TextField
              sx={{ mb: 8, height: 2, border: "none" }}
              id="demo-helper-text-aligned"
              {...register("Email")}
            />
            <Typography sx={{ fontWeight: "bold" }}>Phone No</Typography>
            <TextField
              // sx={{width:"400px"}}
              id="demo-helper-text-aligned"
              // label="Name"
              sx={{ mb: 8, height: 2 }}
              {...register("Phone")}
            />
            {/* <Typography sx={{ fontWeight: "bold" }}>
              Enter four-digit passcode
            </Typography> */}
            {/* <TextField sx={{ mb: 8, height: 2 }} id="demo-helper-text-aligned"     {...register("otp")}/> */}
          </Stack>
          <Button
            size="small"
            variant="contained"
            type="submit"
            sx={{ width: 150, mt: 3, ml: 0.5, fontSize: 15 }}
          >
            SignUp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
export default SignUp;
