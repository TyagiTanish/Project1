import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,

  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import "../../../../App";
import PersonIcon from "@mui/icons-material/Person";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import CircleIcon from "@mui/icons-material/Circle";

import BusinessIcon from "@mui/icons-material/Business";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CallIcon from "@mui/icons-material/Call";

import { FormattedMessage } from "react-intl";
import SelectLang from "../../OtherComponents/SelectLang";
import LaptopAccount from "../profile/LaptopAccount";
type Anchor = "top" | "left" | "bottom" | "right";
function TabletNavbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const cities = [
    "Banglore",
    "Chennai",
    "Gurgaon",
    "Hyderabad",
    "Kolkata",
    "Mumbai",
    "Noida",
    "Pune",
  ];
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const user = useSelector((state: any) => state.userReducer.user);
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography sx={{ m: 2, fontSize: 20, color: "#D4164B" }}>
      <FormattedMessage defaultMessage=" Menu Items...." />        
      </Typography>
      {user ? (
        <>
          <Stack
            direction={"column"}
            spacing={3}
            marginTop={4}
            marginLeft={2}
            marginBottom={2}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <BusinessIcon sx={{ fontSize: "20px" }} />
              <Link
                to="/AddHotel"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {" "}
                <FormattedMessage defaultMessage="Add Hotel" />      
              </Link>
            </Stack>
            <Stack
              sx={{
                alignItems: "center",
                cursor: "pointer",
              }}
              direction={"row"}
            >
              <CallIcon sx={{ mt: -0.5 }} /> 0124-6201611
            </Stack>
          </Stack>
          <LaptopAccount />
        </>
      ) : (
        <>
          <Stack
            direction={"column"}
            spacing={3}
            alignItems={"left"}
            marginLeft={2}
            marginBottom={2}
          >
            <IconButton
              href="/memberRegister"
              sx={{ fontSize: 15, color: "black" }}
            >
              <BusinessIcon sx={{ mr: 1, ml: -10 }} />
              <FormattedMessage defaultMessage="List Your Property" />
            </IconButton>

            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              {" "}
              <CallIcon /> <Typography>0124-6201611</Typography>
            </Stack>

            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              {" "}
              <PersonIcon />
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                {" "}
                <FormattedMessage defaultMessage="Login / SignUp" />
              </Link>
            </Stack>
          </Stack>
          <SelectLang />
        </>
      )}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontWeight: "bold", fontSize: 17 }}>
          <FormattedMessage defaultMessage="Popular Cities" /> 
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ marginTop: -30 }}>
          <Typography>
            <List>
              {cities.map((text) => (
                <>
                  <ListItem disablePadding>
                    <ListItemButton>
                      {/* <ListItemText primary={text} /> */}

                      <Accordion
                        style={{
                          boxShadow: "none",
                          textAlign: "left",
                          margin: 0,
                          padding: 0,
                          marginBottom: -20,
                        }}
                      >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography>{text}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography sx={{ fontSize: 14, textAlign: "left" }}>
                            <Typography
                              sx={{ fontWeight: "bold", fontSize: 15 }}
                            >
                         <FormattedMessage defaultMessage="Popular Locations" />        
                            </Typography>
                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              spacing={1}
                            >
                              <CircleIcon sx={{ fontSize: 8 }} />
                              <Link
                                to="/hotels"
                                style={{
                                  display: "block",
                                  color: "black",
                                  textDecorationLine: "none",
                                }}
                              >
                             <FormattedMessage defaultMessage=" Mg Road" />     
                              </Link>
                            </Stack>

                            <Stack
                              direction={"row"}
                              alignItems={"center"}
                              spacing={1}
                            >
                              <CircleIcon sx={{ fontSize: 8 }} />
                              <Link
                                to="/hotels"
                                style={{
                                  display: "block",
                                  color: "black",
                                  textDecorationLine: "none",
                                }}
                              >
                               <FormattedMessage defaultMessage=" Rajaji nagar" />      
                              </Link>
                            </Stack>
                          </Typography>
                          <Divider />
                        </AccordionDetails>
                      </Accordion>
                    </ListItemButton>
                  </ListItem>
                </>
              ))}
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Divider />
    </Box>
  );

  return (
    <>
      <div>
        {(["right"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              {" "}
              <Tooltip title="Menu">
                <Stack
                  direction={"row"}
                  spacing={1}
                  sx={{ mt: 3, color: "gray" }}
                  alignItems={"center"}
                >
                  <MenuIcon sx={{ fontSize: "30px" }} />
                </Stack>
              </Tooltip>
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default TabletNavbar;
