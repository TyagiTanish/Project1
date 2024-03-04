import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../App.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useForm } from "react-hook-form";
import Password from "../Password";
import Update from "../Update";
import { useDispatch, useSelector } from "react-redux";

import { FormattedMessage } from "react-intl";
function Account() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((state: any) => state.userReducer.user);

  return (
    <>
      {" "}
      <Typography
        sx={{ fontSize: { xl: 30, md: 23, sm: 15 }, fontWeight: "bold" }}
      >
        <FormattedMessage defaultMessage="Account Settings" />
      </Typography>
      <Box
        sx={{
          ml: { sm: 10, md: 15, xl: 50 },
          mt: 5,
          fontFamily: "Proxima Vara,Arial,Helvetica,Sans,Sans-Serif",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{ width: 300, mt: 2, fontSize: { xl: 18, md: 16, sm: 14 } }}
          >
            <FormattedMessage defaultMessage="Personal Information" />
          </Typography>
          <Typography sx={{ mt: 2 }}>Email:</Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            disabled
            sx={{
              width: { sm: 300, md: 500 },
              mt: 1,
              fontSize: { xl: 15, md: 2 },
            }}
            defaultValue={user?.email}
            inputProps={{
              style: {
                height: 15,
              },
            }}
          />
          <Update />

          <Typography sx={{ fontSize: { xl: 18, md: 16, sm: 14 }, mt: 5 }}>
            <FormattedMessage defaultMessage="Change Your Password" />
          </Typography>
          <Password />
        </Box>
      </Box>
    </>
  );
}

export default Account;
