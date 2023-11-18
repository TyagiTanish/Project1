import * as React from "react";
import "../../App.css";
import Typography from "@mui/material/Typography";
import { Box, Menu, MenuItem } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
<<<<<<< HEAD
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [banglore, setbanglore] = React.useState(null);
  const [chennai, setchennai] = React.useState(null);
  const [gurgaon, setgurgaon] = React.useState(null);
  const [hyderabad, sethyderabad] = React.useState(null);
  const [kolkata, setkolkata] = React.useState(null);
  const [mumbai, setmumbai] = React.useState(null);
  const [noida, setnoida] = React.useState(null);
  const [pune, setpune] = React.useState(null);

  function handleClick(event: any) {
    if (banglore !== event.currentTarget) {
      setbanglore(event.currentTarget);
    }
  }

  function handleClose() {
    setbanglore(null);
  }

  function handleClick2(event: any) {
    if (banglore !== event.currentTarget) {
      setchennai(event.currentTarget);
    }
  }

  function handleClose2() {
    setchennai(null);
  }

  function handleClick3(event: any) {
    if (banglore !== event.currentTarget) {
      setgurgaon(event.currentTarget);
    }
  }

  function handleClose3() {
    setgurgaon(null);
  }

  function handleClick4(event: any) {
    if (banglore !== event.currentTarget) {
      sethyderabad(event.currentTarget);
    }
  }

  function handleClose4() {
    sethyderabad(null);
  }

  function handleClick5(event: any) {
    if (banglore !== event.currentTarget) {
      setkolkata(event.currentTarget);
    }
  }

  function handleClose5() {
    setkolkata(null);
  }

  function handleClick6(event: any) {
    if (banglore !== event.currentTarget) {
      setmumbai(event.currentTarget);
    }
  }

  function handleClose6() {
    setmumbai(null);
  }

  function handleClick7(event: any) {
    if (banglore !== event.currentTarget) {
      setnoida(event.currentTarget);
    }
  }

  function handleClose7() {
    setnoida(null);
  }

  function handleClick8(event: any) {
    if (banglore !== event.currentTarget) {
      setpune(event.currentTarget);
    }
  }

  function handleClose8() {
    setpune(null);
  }
=======
import {Link} from "react-router-dom"
export default function BasicCard() {

>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid lightgray",
          marginTop: 0,
          flexDirection: "row",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          width: "100%",
          height: "70px",
        }}
      >
        <Typography
          sx={{
            alignSelf: "center",
            mt: 1,
            ml: 10,
            fontWeight: "bolder",

            mr: 165,
          }}
        >
<<<<<<< HEAD
          <Logo />
=======
>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3
        </Typography>
        <Box
          sx={{
            borderRight: "1px solid lightgray",
            height: "100%",
            borderLeft: "1px solid lightgray",
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          {" "}
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              mt: 3,
            }}
          >
            <CallIcon /> 0124-6201611
          </Box>
        </Box>

        <Box
          sx={{
            height: "100%",
            mr: 3,
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <PersonIcon sx={{ margin: 1 }} />
<<<<<<< HEAD
          <Link to={'/login'}>Login / SignUp</Link>
=======
          Login / SignUp
>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "42px",
          alignItems: "center",
          backgroundColor: "#f3f5f7",
          boxSizing: "border-box",
          marginTop: 0,
          padding: "2px 60px 0",
        }}
      >
        <Box className="headerMDD__mddListWrapper">
          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
<<<<<<< HEAD
            aria-owns={banglore ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            onMouseOver={handleClick}
          >
            {" "}
            <Box sx={{ color: "gray", marginTop: "10px" }}>Banglore</Box>
=======
         
          >
            {" "}
            <Box
              sx={{ color: "gray", marginTop: "10px" }}
            
            >
              Banglore
            </Box>
>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3
            <KeyboardArrowDownIcon
              className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
<<<<<<< HEAD
          </Box>

          <Menu
            id="simple-menu"
            anchorEl={banglore}
            open={Boolean(banglore)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            <MenuItem sx={{ fontWeight: "bold" }}>Popular Localities</MenuItem>
            <MenuItem onClick={handleClose}>Koramangala</MenuItem>
            <MenuItem onClick={handleClose}>Mg Road</MenuItem>
            <MenuItem onClick={handleClose}>Rajaji Nagar</MenuItem>
          </Menu>

=======
              <Box className='drop'>
         
              <Link   style= {{fontWeight:"bold"}} to="/" >Popular Locations</Link>  
         <Link to="/">Mg Road</Link>
         <Link to="/">Rajaji nagar</Link>
    </Box>
          </Box>

       
>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3
          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
<<<<<<< HEAD
            aria-owns={chennai ? "menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick2}
            onMouseOver={handleClick2}
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Chennai</Box>
            <KeyboardArrowDownIcon
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
          </Box>

          <Menu
            id="menu"
            anchorEl={chennai}
            open={Boolean(chennai)}
            onClose={handleClose2}
            MenuListProps={{ onMouseLeave: handleClose2 }}
          >
            <MenuItem sx={{ fontWeight: "bold" }}>Popular Localities</MenuItem>
            <MenuItem onClick={handleClose2}>Mount Road </MenuItem>
            <MenuItem onClick={handleClose2}>T Nagar</MenuItem>
          </Menu>
=======
          
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Chennai</Box>
            <KeyboardArrowDownIcon className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
             <Box className='drop'>
             <Link   style= {{fontWeight:"bold"}} to="/" >Popular Locations</Link>  
         <Link to="/">Mg Road</Link>
         <Link to="/">Rajaji nagar</Link>
    </Box>
          </Box>

>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3

          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
<<<<<<< HEAD
            aria-owns={gurgaon ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick3}
            onMouseOver={handleClick3}
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Gurgaon</Box>
            <KeyboardArrowDownIcon
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
          </Box>

          <Menu
            id="menu"
            anchorEl={gurgaon}
            open={Boolean(gurgaon)}
            onClose={handleClose3}
            MenuListProps={{ onMouseLeave: handleClose3 }}
          >
            <MenuItem sx={{ fontWeight: "bold" }}>Popular Localities</MenuItem>
            <MenuItem onClick={handleClose3}>Sector 14</MenuItem>
            <MenuItem onClick={handleClose3}>Medanta Hospital</MenuItem>
          </Menu>

=======
           
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Gurgaon</Box>
            <KeyboardArrowDownIcon className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
             <Box className='drop'>
         
             <Link   style= {{fontWeight:"bold"}} to="/" >Popular Locations</Link>  
         <Link to="/">Mg Road</Link>
         <Link to="/">Rajaji nagar</Link>
    </Box>
          </Box>

         
>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3
          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
<<<<<<< HEAD
            aria-owns={banglore ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick4}
            onMouseOver={handleClick4}
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Hyderabad</Box>
            <KeyboardArrowDownIcon
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
          </Box>

          <Menu
            id="menu"
            anchorEl={hyderabad}
            open={Boolean(hyderabad)}
            onClose={handleClose4}
            MenuListProps={{ onMouseLeave: handleClose4 }}
          >
            <MenuItem sx={{ fontWeight: "bold" }}>Popular Localities</MenuItem>
            <MenuItem onClick={handleClose4}>Gachibowli</MenuItem>
            <MenuItem onClick={handleClose4}>Ameerpet</MenuItem>
          </Menu>
=======
           
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Hyderabad</Box>
            <KeyboardArrowDownIcon className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
             <Box className='drop'>
         
             <Link   style= {{fontWeight:"bold"}} to="/" >Popular Locations</Link>  
         <Link to="/">Mg Road</Link>
         <Link to="/">Rajaji nagar</Link>
    </Box>
          </Box>

         
>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3

          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
<<<<<<< HEAD
            aria-owns={kolkata ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick5}
            onMouseOver={handleClick5}
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Kolkata</Box>
            <KeyboardArrowDownIcon
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
          </Box>

          <Menu
            id="menu"
            anchorEl={kolkata}
            open={Boolean(kolkata)}
            onClose={handleClose5}
            MenuListProps={{ onMouseLeave: handleClose5 }}
          >
            <MenuItem sx={{ fontWeight: "bold" }}>Popular Localities</MenuItem>
            <MenuItem onClick={handleClose5}>Howrah Railway Station</MenuItem>
            <MenuItem onClick={handleClose5}>
              Kolkata International Airport
            </MenuItem>
          </Menu>

=======
          
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Kolkata</Box>
            <KeyboardArrowDownIcon className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
             <Box className='drop'>
         
             <Link   style= {{fontWeight:"bold"}} to="/" >Popular Locations</Link>  
         <Link to="/">Mg Road</Link>
         <Link to="/">Rajaji nagar</Link>
    </Box>
          </Box>

         
>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3
          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
<<<<<<< HEAD
            aria-owns={mumbai ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick6}
            onMouseOver={handleClick6}
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Mumbai</Box>
            <KeyboardArrowDownIcon
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
          </Box>

          <Menu
            id="menu"
            anchorEl={mumbai}
            open={Boolean(mumbai)}
            onClose={handleClose6}
            MenuListProps={{ onMouseLeave: handleClose6 }}
          >
            <MenuItem sx={{ fontWeight: "bold" }}>Popular Localities</MenuItem>
            <MenuItem onClick={handleClose6}>Andheri West</MenuItem>
            <MenuItem onClick={handleClose6}>Thane</MenuItem>
          </Menu>
=======
     
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Mumbai</Box>
            <KeyboardArrowDownIcon className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
             <Box className='drop'>
         
             <Link   style= {{fontWeight:"bold"}} to="/" >Popular Locations</Link>  
         <Link to="/">Mg Road</Link>
         <Link to="/">Rajaji nagar</Link>
    </Box>
          </Box>

        
>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3

          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
<<<<<<< HEAD
            aria-owns={noida ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick7}
            onMouseOver={handleClick7}
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Noida</Box>
            <KeyboardArrowDownIcon
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
          </Box>

          <Menu
            id="menu"
            anchorEl={noida}
            open={Boolean(noida)}
            onClose={handleClose7}
            MenuListProps={{ onMouseLeave: handleClose7 }}
          >
            <MenuItem sx={{ fontWeight: "bold" }}>Popular Localities</MenuItem>
            <MenuItem onClick={handleClose7}>Sector 62</MenuItem>
            <MenuItem onClick={handleClose7}>Pari Chowk</MenuItem>
          </Menu>
=======
           
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Noida</Box>
            <KeyboardArrowDownIcon className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
             <Box className='drop'>
         
             <Link   style= {{fontWeight:"bold"}} to="/" >Popular Locations</Link>  
         <Link to="/">Mg Road</Link>
         <Link to="/">Rajaji nagar</Link>
    </Box>
          </Box>

       
>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3

          <Box
            className="abc"
            sx={{
              display: "flex",
              direction: "row",
              height: "100%",
              alignSelf: "center",
              paddingLeft: 1,
              paddingBottom: 0,
            }}
<<<<<<< HEAD
            aria-owns={pune ? "simple-menu" : undefined}
            aria-haspopup="true"
            onClick={handleClick8}
            onMouseOver={handleClick8}
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Pune</Box>
            <KeyboardArrowDownIcon
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
          </Box>

          <Menu
            id="menu"
            anchorEl={pune}
            open={Boolean(pune)}
            onClose={handleClose8}
            MenuListProps={{ onMouseLeave: handleClose8 }}
          >
            <MenuItem sx={{ fontWeight: "bold" }}>Popular Localities</MenuItem>
            <MenuItem onClick={handleClose8}>Baner</MenuItem>
            <MenuItem onClick={handleClose8}>Viman Nagar</MenuItem>
          </Menu>
        </Box>
      </Box>
      <SearchBar/>
      <Footer/>
=======
            
          >
            <Box sx={{ color: "gray", marginTop: "10px" }}>Pune</Box>
            <KeyboardArrowDownIcon className="xyz"
              sx={{ marginTop: "8px", color: "lightgray" }}
            />
             <Box className='drop'>
         
         <Link   style= {{fontWeight:"bold"}} to="/" >Popular Locations</Link>  
         <Link to="/">Mg Road</Link>
         <Link to="/">Rajaji nagar</Link>
    </Box>
          </Box>

         
        </Box>
      </Box>
>>>>>>> 4eaa278cd0151dd99e304e7ffccb0a4e42a43ca3
    </>
  );
}
