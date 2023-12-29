import React from "react";
import GoogleMapReact from "google-map-react";
import { useDispatch, useSelector } from "react-redux";
import { userLocation } from "./redux/user/userSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, IconButton } from "@mui/material";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function SimpleMap() {
  const location = useSelector((state: any) => state.userReducer.location);
  const dispatch = useDispatch();
  const defaultProps = {
    center: {
      lat: location?.latitude || 30.733315,
      lng: location?.longitude || 76.779419,
    },
    zoom: 15,
  };
  const handleChange = (value: any) => {
  

    const data: any = {
      latitude: value.center.lat,
      longitude: value.center.lng,
    };
    dispatch(userLocation(data));
  };
  return (
    <Box
      sx={{
        height: {md:"100vh",xl:'100vh',sm:'10vh'},
        width: { sm: "50vh", lg: "20vw" },
        marginLeft: {md:17,xl:17,sm:40},
        position:{sm:'relative'},
        zIndex:{sm:1}
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: " AIzaSyDEZ3SEb_VoWvsv0AXCsGT_Mg9f4L0gATQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={(value) => handleChange(value)}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={location?.latitude || 30.733315}
          lng={location?.longitude || 76.779419}
          text={
            <IconButton sx={{ color: "red" }}>
              <LocationOnIcon />
            </IconButton>
          }
        />
      </GoogleMapReact>
    </Box>
  );
}
