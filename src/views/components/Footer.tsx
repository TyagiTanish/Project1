import { Box, Button, Stack } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";
// import OYOLogo from "../../assets/OyoLogo.png";
import PlayStoreLogo from "../../assets/PlayStoreLogo";
import AppStoreLogo from "../../assets/AppStoreLogo";
import OyoLogo from "../../assets/OyoLogo";
import FooterRytLogo from "../../assets/FooterRytLogo";
import { grey } from "@mui/material/colors";
function Footer() {
  return (
    <Box
      sx={{ fontFamily: "sans-serif", mt: 5, width: { xl: "100%", lg: "98%" } }}
    >
      <Stack
        sx={{
          background: "#6D787D",
          // padding: "24px 70px",
          // justifyContent: "space-evenly",
          borderBottom: "1px solid white",
          alignItems: "center",
          justifyContent: "space-around",
          width: "99.9%",
        }}
        direction={"row"}
        spacing={1}
      >
        <Stack
          sx={{
            fontFamily: "sans-serif",
            fontWeight: "900",
            fontSize: { lg: "22px", sm: "15px", md: "22px" },
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
          direction={"row"}
        >
          <Box sx={{ color: "white", display: "flex", alignItems: "center" }}>
            {" "}
            <Box sx={{ ml: { md: -5, xl: 0 } }}>
              <OyoLogo />
            </Box>
          </Box>
          World's leading chain of hotels and homes
        </Stack>
        <Box
          sx={{
            color: "white",
            alignItems: "center",
            fontSize: { lg: "22px", sm: "12px" },
          }}
        >
          <Stack
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "900",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            direction={"row"}
            spacing={1}
          >
            <Box sx={{ sm: "12px", lg: "22px", md: "22px" }}>
              {" "}
              Join our network and grow your business!
            </Box>

            <Button
              sx={{
                color: "#616161",
                textTransform: "none",
                background: "white",
                fontWeight: 700,
                fontSize: { sm: "7.2px", lg: "15px" },
              }}
            >
              List Your Property
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Stack
        sx={{
          background: "#6D787D",
          padding: "24px 70px",
          justifyContent: "space-between",
          borderBottom: "1px solid white",
          color: "white",
          width: {lg: "92.32%"},
        }}
        direction={"row"}
        spacing={2}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "24px",
          }}
        >
          <Box>Download OYO app for exciting offers.</Box>
          <Stack direction={"row"} alignItems={"center"}>
            <AppStoreLogo />
            <PlayStoreLogo />
          </Stack>
        </Box>

        <Stack
          sx={{
            borderLeft: "1px solid white",
            paddingLeft: "24px",
            color: "white",
            fontSize:{sm:'12px'}
          }}
          direction={"column"}
          spacing={2}
        >
          <Link to="/" className="linkStyle">
            About
          </Link>
          <Link to="/" className="linkStyle">
            Teams / Careers
          </Link>
          <Link to="/" className="linkStyle">
            Blogs
          </Link>
          <Link to="/" className="linkStyle">
            Support
          </Link>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize:{sm:'12px'}
          }}
        >
          <Link to="/" className="linkStyle">
            Official OYO Blog
          </Link>
          <Link to="/" className="linkStyle">
            Investor Relations
          </Link>
          <Link to="/" className="linkStyle">
            OYO Circles
          </Link>
          <Link to="/" className="linkStyle">
            OYO Frames
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid white",
            paddingLeft: "24px",
            fontSize:{sm:'12px'}
          }}
        >
          <Link to="/" className="linkStyle">
            Terms and conditions
          </Link>
          <Link to="/" className="linkStyle">
            Guest Policies
          </Link>
          <Link to="/" className="linkStyle">
            Privacy Policy
          </Link>
          <Link to="/" className="linkStyle">
            Trust And Safety
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize:{sm:'12px',lg:'15px'}
          }}
        >
          <Link to="/" className="linkStyle">
            Cyber Security
          </Link>
          <Link to="/" className="linkStyle">
            Cyber Security Awareness
          </Link>
          <Link to="/" className="linkStyle">
            Responsible Disclosure
          </Link>
          <Link to="/" className="linkStyle">
            Advertise your Homes
          </Link>
        </Box>
      </Stack>
      <Box
        sx={{
          background: "#6D787D",
          color: "white",
          // padding: "24px 70px",
          paddingLeft: "24px",
          paddingBottom: "10px",
          paddingTop: "10px",
          fontSize: "18px",
          width: { xl: "98.7%", lg: "95.5%" },
          
        }}
      >
        Oyo Hotels
      </Box>
      <Stack
        sx={{
          background: "#6D787D",
        //  padding:'0px 50px  0px 5%',
          borderBottom: "1px solid white",
          color: "white",
          width: { xl: "100%", lg: "98%" },
          fontSize: { sm: "13px", lg: "15px" },
          justifyContent:'center'
        }}
        direction={"row"}
        spacing={2}
      >
        <Stack direction={"column"} padding={'0 2%'} >
          <Link to="/" className="linkStyle">
            Hotels near me
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Manali
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Nainital
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Mount Abu
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Agra
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Haridwar
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Gurgaon
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Coimbatore
          </Link>
          <Link to="/" className="linkStyle">
            OYO Hotel UK
          </Link>
          <Link to="/" className="linkStyle">
            OYO Vacation Homes in Europe
          </Link>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding:'0 2%'
          }}
        >
          <Link to="/" className="linkStyle">
            Hotels near me
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Manali
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Nainital
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Mount Abu
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Agra
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Haridwar
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Gurgaon
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Coimbatore
          </Link>
          <Link to="/" className="linkStyle">
            OYO Hotel UK
          </Link>
          <Link to="/" className="linkStyle">
            OYO Vacation Homes in Europe
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding:'0 2%'
          }}
        >
          <Link to="/" className="linkStyle">
            Hotels near me
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Manali
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Nainital
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Mount Abu
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Agra
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Haridwar
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Gurgaon
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Coimbatore
          </Link>
          <Link to="/" className="linkStyle">
            OYO Hotel UK
          </Link>
          <Link to="/" className="linkStyle">
            OYO Vacation Homes in Europe
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding:'0 2%'
          }}
        >
          <Link to="/" className="linkStyle">
            Hotels near me
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Manali
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Nainital
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Mount Abu
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Agra
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Haridwar
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Gurgaon
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Coimbatore
          </Link>
          <Link to="/" className="linkStyle">
            OYO Hotel UK
          </Link>
          <Link to="/" className="linkStyle">
            OYO Vacation Homes in Europe
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding:'0%'
          }}
        >
          <Link to="/" className="linkStyle">
            Hotels near me
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Manali
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Nainital
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Mount Abu
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Agra
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Haridwar
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Gurgaon
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Coimbatore
          </Link>
          <Link to="/" className="linkStyle">
            OYO Hotel UK
          </Link>
          <Link to="/" className="linkStyle">
            OYO Vacation Homes in Europe
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding:'0 2%'
          }}
        >
          <Link to="/" className="linkStyle">
            Hotels near me
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Manali
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Nainital
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Mount Abu
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Agra
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Haridwar
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Gurgaon
          </Link>
          <Link to="/" className="linkStyle">
            Hotels in Coimbatore
          </Link>
          <Link to="/" className="linkStyle">
            OYO Hotel UK
          </Link>
          <Link to="/" className="linkStyle">
            OYO Vacation Homes in Europe
          </Link>
        </Box>
      </Stack>

      <Box
        sx={{
          background: "#6D787D",
          padding: "24px 70px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid white",
          color: "white",
          width: { xl: "92.3%", lg: "98%" },
        }}
      >
        <Box>
          <FacebookIcon sx={{ marginRight: "5px" }} />
          <InstagramIcon sx={{ marginRight: "5px" }} />
          <TwitterIcon sx={{ marginRight: "5px" }} />
          <PlayArrowIcon sx={{ marginRight: "5px" }} />
          <PinterestIcon sx={{ marginRight: "5px" }} />
        </Box>
        <Box fontSize={"12px"}>2013-2022 © Oravel Stays Limited</Box>
      </Box>
    </Box>
  );
}

export default Footer;
