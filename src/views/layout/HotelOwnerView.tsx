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
import Logo from "../components/Logo/Logo";
import { Stack, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BedIcon from "@mui/icons-material/Bed";
import SearchHotels from "../components/HotelOwner/hotels/SearchHotels";
import AboutHotel from "../components/HotelOwner/AboutHotel";
import { Navigate, Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "./Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import { useSelector } from "react-redux";
import Language from "../components/Language/Language";
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

export default function HotelOwnerView() {
  const user = useSelector((state: any) => state?.userReducer?.user);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [open2, setOpen2] = React.useState(false);
  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = React.useState<any>(0);
  const [screenSize, setScreenSize] = React.useState<any>(window.outerWidth);
  React.useEffect(() => {
    if (window.location.href === "http://localhost:3000/member") {
      setSelectedIndex(0);
    } else if (window.location.href === "http://localhost:3000/member/hotels") {
      setSelectedIndex(1);
    } else if (
      window.location.href === "http://localhost:3000/member/bookings"
    ) {
      setSelectedIndex(2);
    } else if (
      window.location.href === "http://localhost:3000/member/acceptedBookings"
    ) {
      setSelectedIndex(3);
    }
  }, [window.location.href]);
  React.useEffect(() => {
    setScreenSize(window.innerWidth);
    const handleWindowSize = () => {
      setScreenSize(window.outerWidth);
      screenSize <= 768 && setOpen(false);
      screenSize > 1022 && setOpen(true);
    };
    window.addEventListener("resize", handleWindowSize);
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (open2 === false) {
      setOpen2(true);
    } else {
      setOpen2(false);
    }
  };

  // const handleListItemClick = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //   index: number
  // ) => {
  //   // setSelectedIndex(index);
  // };

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
                height={"2vh"}
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
                    Hello,{user?.name}
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
                  borderRadius: selectedIndex === 0 ? 100 : null,
                  backgroundColor: selectedIndex === 0 ? "lightgray" : null,
                }}
                // selected={selectedIndex === 0}
                onClick={(event) => {
                  // handleListItemClick(event, 0);
                  navigate("/member");
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
                    <Tooltip title="Dashboard">
                      <DashboardIcon sx={{ fontSize: "25px" }} />
                    </Tooltip>
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
                  borderRadius: selectedIndex === 1 ? 100 : null,
                  backgroundColor: selectedIndex === 1 ? "lightgray" : null,
                }}
                // selected={selectedIndex === 1}
                onClick={(event) => {
                  // handleListItemClick(event, 1);
                  navigate("/member/hotels");
                }}
                // onClick={() => navigate("/member/hotels")}
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
                    <Tooltip title={"All Hotels"}>
                      <BedIcon sx={{ fontSize: "25px" }} />
                    </Tooltip>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={"All Hotels"}
                  sx={{ opacity: open ? 1 : 0 }}
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
                  borderRadius: selectedIndex === 2 ? 100 : null,
                  backgroundColor: selectedIndex === 2 ? "lightgray" : null,
                }}
                // selected={selectedIndex === 2}
                onClick={(event) => {
                  // handleListItemClick(event, 2);
                  navigate("/member/bookings");
                }}
                // onClick={() => navigate("/member/bookings")}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {open === true ? (
                    <CalendarMonthIcon fontSize="small" />
                  ) : (
                    <Tooltip title="Booking Requests">
                      <CalendarMonthIcon sx={{ fontSize: "25px" }} />
                    </Tooltip>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={"Booking Requests"}
                  sx={{ opacity: open ? 1 : 0 }}
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
                  borderRadius: selectedIndex === 3 ? 100 : null,
                  backgroundColor: selectedIndex === 3 ? "lightgray" : null,
                }}
                // selected={selectedIndex === 3}
                onClick={(event) => {
                  // handleListItemClick(event, 3);
                  navigate("/member/acceptedBookings");
                }}
                // onClick={() => navigate("/member/acceptedBookings")}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {open === true ? (
                    <InsertInvitationIcon fontSize="small" />
                  ) : (
                    <Tooltip title="All Bookings">
                      <InsertInvitationIcon sx={{ fontSize: "25px" }} />
                    </Tooltip>
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={"All Bookings"}
                  sx={{ opacity: open ? 1 : 0, fontSize: 10 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box sx={{ flexGrow: 1, p: 2, overflow: "hidden", height: "100vh" }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Stack>
    </>
  );
}
