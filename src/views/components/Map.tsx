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
        height: "99vh",
        width: { sm: "70vh", xl: "40vw", md: "40vw" },
        marginLeft: { md: 2 },
        marginTop: { xl: "9px", md: "2px" },
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDEZ3SEb_VoWvsv0AXCsGT_Mg9f4L0gATQ" }}
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

// import React, { useRef, useEffect, useState } from "react";
// import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken = "YOUR_MAPBOX_ACCESS_TOKEN";
// export default function App() {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-70.9);
//   const [lat, setLat] = useState(42.35);
//   const [zoom, setZoom] = useState(9);
//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v12",
//       center: [lng, lat],
//       zoom: zoom,
//     });
//   });
//   return (
//     <div>
//       <div ref={mapContainer} className="map-container" />
//     </div>
//   );
// }
