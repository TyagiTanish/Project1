import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "../../Logo/Logo";
import { Button, Collapse, Stack, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BedIcon from "@mui/icons-material/Bed";
import { Navigate, Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import { useSelector } from "react-redux";
import Language from "../../Language/Language";
import Menu from "../../../layout/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PeopleIcon from "@mui/icons-material/People";
import Popover from "@mui/material/Popover";
import { useIntl, FormattedMessage } from "react-intl";

// import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SuperAdminView() {
  const user = useSelector((state: any) => state?.userReducer?.user);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<any>();

  const handleClick = () => {
    if (open) {
      setOpen2(!open2);
    }
  };

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setOpen2(false);
  };

  const [screenSize, setScreenSize] = React.useState(window.outerWidth);
  React.useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
    };
    // console.log("screenSize", screenSize);

    window.addEventListener("resize", handleWindowSize);
  });

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClickPOP = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openn = Boolean(anchorEl);
  const id = openn ? "simple-popover" : undefined;

  return (
    <>
      <Stack direction={"row"}>
        <CssBaseline />
        <AppBar open={open} sx={{ bgcolor: "white" }}>
          <Toolbar>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Stack
                direction={"row"}
                spacing={3}
                alignItems={"center"}
                height={"4vh"}
              >
                {" "}
                {!open && <Logo />}
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon sx={{ color: "black" }} />
                </IconButton>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={2}
                // ml={{ lg: "85%", md: "87%", sm: "80%" }}
              >
                <Language />
                <Stack>
                  <Typography color={"black"} fontWeight={"bolder"}>
                    Hello,{user?.name?.split(" ")[0]}
                  </Typography>
                  <Typography color={"gray"} fontSize={"0.9rem"}>
                    {user?.role?.toUpperCase()}
                  </Typography>
                </Stack>
                <Menu />
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Stack
              direction={"row"}
              width={"100%"}
              height={"2vh"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box>
                <Logo />
              </Box>{" "}
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? <MenuIcon /> : <MenuIcon />}
              </IconButton>
            </Stack>
          </DrawerHeader>

          <List>
            {/* {open && (
              <Typography sx={{ ml: 2, fontSize: 14, fontWeight: "bold" }}>
                DashBoard
              </Typography>
            )} */}
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    borderRadius: 100,
                    backgroundColor: "lightGray",
                  },
                }}
                onClick={() => {
                  setSelectedIndex(2);
                  navigate("/superAdmin");
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {open === true ? (
                    <DashboardIcon fontSize="small" />
                  ) : (
                    <DashboardIcon sx={{ fontSize: "25px" }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={"DashBoard"}
                  sx={{ opacity: open ? 1 : 0, fontSize: 10 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  {open ? (
                    <PeopleIcon />
                  ) : (
                    <IconButton onClick={handleClickPOP}>
                      <PeopleIcon />
                    </IconButton>
                  )}
                </ListItemIcon>

                <ListItemText primary="All Users" />
                <Popover
                  id={id}
                  open={openn}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  {/* <Typography sx={{ p: 2 }}>
                    The content of the Popover.
                  </Typography> */}
                  <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={() => {
                      setSelectedIndex(0);
                      handleClose();
                      navigate("/superAdmin/users");
                    }}
                  >
                    <ListItemText primary="Customers" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={() => {
                      setSelectedIndex(1);
                      handleClose();
                      navigate("/superAdmin/members");
                    }}
                  >
                    <ListItemText primary="Members" />
                  </ListItemButton>
                </Popover>
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    selected={selectedIndex === 0}
                    sx={{ pl: 4 }}
                    onClick={() => {
                      setSelectedIndex(0);
                      navigate("/superAdmin/users");
                    }}
                  >
                    <ListItemText primary="Customers" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 1}
                    sx={{ pl: 4 }}
                    onClick={() => {
                      setSelectedIndex(1);
                      navigate("/superAdmin/members");
                    }}
                  >
                    <ListItemText primary="Members" />
                  </ListItemButton>
                </List>
              </Collapse>
            </ListItem>
          </List>
          {/* <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    borderRadius: 100,
                    backgroundColor: "lightGray",
                  },
                }}
                onClick={() => navigate("/addhotel")}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {open === true ? (
                    <ApartmentOutlinedIcon fontSize="small" />
                  ) : (
                    <ApartmentOutlinedIcon sx={{ fontSize: "25px" }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={"Add Hotels"}
                  sx={{ opacity: open ? 1 : 0, fontSize: 10 }}
                />
              </ListItemButton>
            </ListItem> */}
          {/* <List>
            {open && (
              <Typography sx={{ ml: 2, fontSize: 14, fontWeight: "bold" }}>
                DashBoard
              </Typography>
            )}
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    borderRadius: 100,
                    backgroundColor: "lightGray",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {open === true ? (
                    <DashboardIcon fontSize="small" />
                  ) : (
                    <DashboardIcon sx={{ fontSize: "25px" }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={"DashBoard"}
                  sx={{ opacity: open ? 1 : 0, fontSize: 10 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  "&:hover": {
                    borderRadius: 100,
                    backgroundColor: "lightGray",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {open === true ? (
                    <BedIcon fontSize="small" />
                  ) : (
                    <BedIcon sx={{ fontSize: "25px" }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={"All Hotels"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List> */}
        </Drawer>
        <Box sx={{ flexGrow: 1, overflow: "auto", height: "100vh" }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Stack>
    </>
  );
}
