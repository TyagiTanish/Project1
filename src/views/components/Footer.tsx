import { Box, Button } from "@mui/material";
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
    <Box sx={{ fontFamily: "sans-serif", mt: 5 }}>
      <Box
        sx={{
          background: "#6D787D",
          padding: "24px 70px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid white",
        }}
      >
        <Box sx={{ color: "white", display: "flex", alignItems: "center" }}>
          <Box
          // sx={{
          //   fontFamily: "sans-serif",
          //   fontWeight: "900",
          //   fontSize: "40px",
          // }}
          >
            <OyoLogo />
          </Box>

          <Box
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "900",
              ml: 3,
              fontSize: "22px",
            }}
          >
            <FooterRytLogo />
            World's leading chain of hotels and homes
          </Box>
        </Box>

        <Box
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            fontSize: "22px",
          }}
        >
          <Box
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "900",
            }}
          >
            Join our network and grow your business!
            <Button
              sx={{
                color: "#616161",
                textTransform: "none",
                background: "white",
                ml: 2,
                fontWeight: 700,
              }}
            >
              List Your Property
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          background: "#6D787D",
          padding: "24px 70px",
          display: "flex",
          justifyContent: "space-evenly",
          borderBottom: "1px solid white",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingRight: "24px",
          }}
        >
          <Box>Download OYO app for exciting offers.</Box>
          <Box>
            <AppStoreLogo />
            <PlayStoreLogo />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid white",
            paddingLeft: "24px",
            color: "white",
          }}
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
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
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
      </Box>

      <Box
        sx={{
          background: "#6D787D",
          color: "white",
          // padding: "24px 70px",
          paddingLeft: "24px",
          paddingBottom: "10px",
          paddingTop: "10px",
          fontSize: "18px",
        }}
      >
        Oyo Hotels
      </Box>
      <Box
        sx={{
          background: "#6D787D",
          padding: "0px 70px 20px 0",
          display: "flex",
          justifyContent: "space-evenly",
          borderBottom: "1px solid white",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
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
      </Box>

      <Box
        sx={{
          background: "#6D787D",
          padding: "24px 70px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid white",
          color: "white",
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
