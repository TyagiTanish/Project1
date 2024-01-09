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
import Logo from "../components/Logo";
import { Stack } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BedIcon from '@mui/icons-material/Bed';
import SearchHotels from "../components/SearchHotels";
import AboutHotel from "../components/AboutHotel";
import { Navigate, Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
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
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [open2,setOpen2]=React.useState(false);
const navigate = useNavigate()
  const [hotels] = React.useState([
    {
      name: "Hotel mountain face by snow",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
  
      location:'usa123',
      amenities:['abc,xyz'],
      ownerName:'pallavi',
      ownerEmail:'abc@gmailcom'
    },
    {
      name: "Bentewood Resort",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "JW Marriot Mumbai Sahar",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "Niranta Transit",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "Hotel Kohinoor Continental",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "Hotel mountain face by snow",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "Bentewood Resort",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "JW Marriot Mumbai Sahar",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "Niranta Transit",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "Hotel Kohinoor Continental",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "Niranta Transit",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "Hotel Kohinoor Continental",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "Hotel mountain face by snow",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },
    {
      name: "Bentewood Resort",
      city:'xyz',
      state:'abc',
      country:'alberta',
      pinCode:'123',
      id:'abc@gmailcom',
      location:'usa123',
      amenities:['abc,xyz']
    },

  ]);
  const [toGet,setToGet]=React.useState(hotels[0]);
  console.log();
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick=()=>{
    if(open2===false)
    {
      setOpen2(true);
    }
  else{
    setOpen2(false)
  }

    
  }
  console.log(toGet);
  return (

    
    <><Box sx={{ display: "flex" }}>
    <CssBaseline />
    <AppBar position="fixed" open={open}  sx={{bgcolor:'white'}}>
      <Toolbar>
          <Stack direction={"row"} spacing={3}  alignItems={'center'} height={"2vh"}>   {!open && <Logo />}
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
          <MenuIcon  sx={{color:'black'}} />
        </IconButton>
    </Stack>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <Stack direction={"row"} width={"100%"} height={"2vh"} alignItems={"center"} justifyContent={'space-between'} >
          <Box>
            <Logo />
          </Box>{" "}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <MenuIcon />
            ) : (
        
                <MenuIcon />
              
            )}
          </IconButton>
        </Stack>
      </DrawerHeader>
   
      <List >
    
       {open &&  <Typography sx={{ml:2,fontSize:14,fontWeight:'bold'}}>DashBoard</Typography>}
      <ListItem disablePadding sx={{ display: "block"}} >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  borderRadius:100,
                  backgroundColor:'lightGray'
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
             {open===true ?   <DashboardIcon fontSize="small"/> :  <DashboardIcon sx={{fontSize:'25px'}}/>} 
              </ListItemIcon>
              <ListItemText primary={'DashBoard'} sx={{ opacity: open ? 1 : 0, fontSize:10}} />
            </ListItemButton>
          </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
        
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  borderRadius:100,
                  backgroundColor:'lightGray'
                },
              }}
              onClick={()=>navigate('/member/hotels')} 
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              
              >
             {open===true ?   <BedIcon fontSize="small"/> :  <BedIcon sx={{fontSize:'25px'}}/>} 
              </ListItemIcon>
              <ListItemText primary={'All Hotels'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
      </List>
   
      <List >
    
    {open &&  <Typography sx={{ml:2,fontSize:14,fontWeight:'bold'}}>DashBoard</Typography>}
   <ListItem disablePadding sx={{ display: "block"}} >
         <ListItemButton
           sx={{
             minHeight: 48,
             justifyContent: open ? "initial" : "center",
             px: 2.5,
             "&:hover": {
               borderRadius:100,
               backgroundColor:'lightGray'
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
          {open===true ?   <DashboardIcon fontSize="small"/> :  <DashboardIcon sx={{fontSize:'25px'}}/>} 
           </ListItemIcon>
           <ListItemText primary={'DashBoard'} sx={{ opacity: open ? 1 : 0, fontSize:10}} />
         </ListItemButton>
       </ListItem>
       <ListItem disablePadding sx={{ display: "block" }} >
         <ListItemButton
       
           sx={{
             minHeight: 48,
             justifyContent: open ? "initial" : "center",
             px: 2.5,
             "&:hover": {
               borderRadius:100,
               backgroundColor:'lightGray'
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
          {open===true ?   <BedIcon fontSize="small"/> :  <BedIcon sx={{fontSize:'25px'}}/>} 
           </ListItemIcon>
           <ListItemText primary={'All Hotels'} sx={{ opacity: open ? 1 : 0 }} />
         </ListItemButton>
       </ListItem>
   </List>
    </Drawer>
  <Box  sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
             <Outlet/> 
  </Box>
  </Box>
  {/* <SearchHotels/> */}
  {/* <Outlet/> */}

  </>
    
  
  );
}
