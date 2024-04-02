import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import Logout from "@mui/icons-material/Logout";
import { userLogout } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
function LaptopAccount() {
  const user = useSelector((state: any) => state.userReducer.user);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    dispatch(userLogout());
  };

  return (
    <Accordion
      style={{
        boxShadow: "none",
        textAlign: "left",
        margin: 0,
        padding: 0,
        border: "none",
      }}
    >
      <AccordionSummary
        style={{ fontWeight: "bold", fontSize: 17 }}
        expandIcon={<ExpandMoreIcon />}
      >
        <FormattedMessage defaultMessage="Account Settings" />
      </AccordionSummary>
      <AccordionDetails sx={{ ml: 4, mt: -1 }}>
        <Typography sx={{ fontFamily: "cursive" }}>
          <FormattedMessage defaultMessage="Hello," />{" "}
          {user.name?.split(" ")[0]}
        </Typography>
        <Stack direction={"row"} spacing={1}>
          {" "}
          <PersonIcon fontSize="small" />
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black", marginTop: 3 }}
          >
            <FormattedMessage defaultMessage="Profile" />
          </Link>
        </Stack>
        <Stack direction={"row"} spacing={1} onClick={handleLogOut}>
          {" "}
          <Logout fontSize="small" />
          <Typography>
            <FormattedMessage defaultMessage="Logout" />
          </Typography>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default LaptopAccount;
