import { Box, Button } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { Link } from "react-router-dom";
// import OYOLogo from "../../assets/OyoLogo.png";
import PlayStoreLogo from "../../../../assets/PlayStoreLogo";
import AppStoreLogo from "../../../../assets/AppStoreLogo";
import OyoLogo from "../../../../assets/OyoLogo";
import { useNavigate } from "react-router-dom";
import {FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";

function Footer() {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.userReducer.user);
  return (
    <Box
      sx={{
        fontFamily: "sans-serif",
        mt: 5,
        width: "98.8%",
      }}
    >
      <Box
        sx={{
          background: "#6D787D",
          padding: "24px 70px",
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid white",
          alignItems: "center",
        }}
      >
        <Box sx={{ color: "white", display: "flex", alignItems: "center" }}>
          <Box sx={{ ml: { md: -5, xl: 0, sm: -9 } }}>
            <OyoLogo />
          </Box>

          <Box
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "900",
              // ml: -1/,
              fontSize: { xl: "22px", md: 16, sm: "15px" },
              width: { sm: 350, xl: 500, lg: "100%" },
              mt: { md: -1, xl: 0, sm: 0 },
            }}
          >
            <FormattedMessage defaultMessage="World's leading chain of hotels and homes" />
          </Box>
        </Box>

        <Box
          sx={{
            color: "white",
            display: "flex",
            alignItems: "center",
            fontSize: { xl: "22px", md: 16, sm: 11 },
            mr: { xl: 0, md: -6, sm: -6 },
            ml: { sm: -8, lg: 0 },
          }}
        >
          <Box
            sx={{
              fontFamily: "sans-serif",
              fontWeight: "900",
            }}
          >
            <FormattedMessage
              defaultMessage={"Join our network and grow your business!"}
            />
            {user ?    <Button
              sx={{
                color: "#616161",
                textTransform: "none",
                background: "white",
                ml: 2,
                fontWeight: 700,
                fontSize: { xl: 15, md: 12, sm: 8 },
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={() => {
                navigate("/AddHotel");
              }}
            >
              <FormattedMessage defaultMessage={" List Your Property"} />
            </Button> :    <Button
              sx={{
                color: "#616161",
                textTransform: "none",
                background: "white",
                ml: 2,
                fontWeight: 700,
                fontSize: { xl: 15, md: 12, sm: 8 },
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={() => {
                navigate("/memberRegister");
              }}
            >
              <FormattedMessage defaultMessage={" List Your Property"} />
            </Button>}
            {/* <Button
              sx={{
                color: "#616161",
                textTransform: "none",
                background: "white",
                ml: 2,
                fontWeight: 700,
                fontSize: { xl: 15, md: 12, sm: 8 },
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={() => {
                navigate("/memberRegister");
              }}
            >
              <FormattedMessage defaultMessage={" List Your Property"} />
            </Button> */}
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
          <Box sx={{ fontSize: { xl: 18, md: 15, sm: 12 } }}>
            <FormattedMessage
              defaultMessage={"Download OYO app for exciting offers."}
            />
          </Box>
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
            fontSize: { xl: 18, md: 13, sm: 12 },
            mr: 2,
          }}
        >
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"About"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Teams / Careers"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Blogs"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Support"} />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xl: 18, md: 13, sm: 12 },
            mr: 1,
          }}
        >
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Official OYO Blog"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Investor Relations"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"OYO Circles"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" OYO Frames"} />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid white",
            paddingLeft: "24px",
            fontSize: { xl: 18, md: 13, sm: 12 },
            mr: 3,
          }}
        >
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Terms and conditions"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Guest Policies"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Privacy Policy"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Trust And Safety"} />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xl: 18, md: 13, sm: 12 },
          }}
        >
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Cyber Security"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Cyber Security Awareness"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Responsible Disclosure"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Advertise your Homes"} />
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
        <FormattedMessage defaultMessage={"Oyo Hotels"} />
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
            ml: { xl: 4, md: 5, sm: 4 },
            fontSize: { xl: 18, md: 15, sm: 12 },
            width: "40%",
          }}
        >
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels near me"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Manali"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Nainital"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Mount Abu"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Agra"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Hotels in Haridwar"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Gurgaon"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Coimbatore"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"OYO Hotel UK"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"OYO Vacation Homes in Europe"} />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: { xl: 0, md: 2, sm: 4 },
            fontSize: { xl: 18, md: 15, sm: 12 },
            width: "40%",
          }}
        >
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels near me"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Manali"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Nainital"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Mount Abu"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Agra"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Haridwar"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Gurgaon"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Coimbatore"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"OYO Hotel UK"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage
              defaultMessage={" OYO Vacation Homes in Europe"}
            />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xl: 18, md: 15, sm: 12 },
            ml: { xl: 0, md: 2, sm: 4 },
            width: "40%",
          }}
        >
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Hotels near me"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Hotels in Manali"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Hotels in Nainital"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Hotels in Mount Abu"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Hotels in Agra"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Haridwar"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"  Hotels in Gurgaon"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Hotels in Coimbatore"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"OYO Hotel UK"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage
              defaultMessage={" OYO Vacation Homes in Europe"}
            />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xl: 18, md: 15, sm: 12 },
            ml: { xl: 0, md: 2, sm: 4 },
            width: "40%",
          }}
        >
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Hotels near me"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" Hotels in Manali"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Nainital"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Mount Abu"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Agra"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Haridwar"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Gurgaon"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Coimbatore"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"OYO Hotel UK"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"OYO Vacation Homes in Europe"} />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xl: 18, md: 15, sm: 12 },
            ml: { xl: 0, md: 2, sm: 4 },
            width: "40%",
          }}
        >
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels near me"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Manali"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Nainital"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Mount Abu"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Agra"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Haridwar"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Gurgaon"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Coimbatore"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={" OYO Hotel UK"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage
              defaultMessage={" OYO Vacation Homes in Europe"}
            />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: { xl: 18, md: 15, sm: 12 },
            ml: { xl: 0, md: 2, sm: 4 },
            width: "40%",
          }}
        >
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels near me"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Manali"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Nainital"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Mount Abu"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Agra"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Haridwar"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Gurgaon"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"Hotels in Coimbatore"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"OYO Hotel UK"} />
          </Link>
          <Link to="/" className="linkStyle">
            <FormattedMessage defaultMessage={"OYO Vacation Homes in Europe"} />
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
        <Box fontSize={"12px"}>
          <FormattedMessage
            defaultMessage={"2013-2022 © Oravel Stays Limited"}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
