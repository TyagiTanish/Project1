// import React from "react";
// import GoogleMapReact from "google-map-react";
// import { useDispatch, useSelector } from "react-redux";
// import { userLocation } from "./redux/user/userSlice";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Box, IconButton } from "@mui/material";

// const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

// export default function SimpleMap() {
//   const location = useSelector((state: any) => state.userReducer.location);
//   const dispatch = useDispatch();
//   const defaultProps = {
//     center: {
//       lat: location?.latitude || 30.733315,
//       lng: location?.longitude || 76.779419,
//     },
//     zoom: 15,
//   };
//   const handleChange = (value: any) => {
//     const data: any = {
//       latitude: value.center.lat,
//       longitude: value.center.lng,
//     };
//     dispatch(userLocation(data));
//   };
//   return (
//     <Box
//       sx={{
//         height: "99vh",
//         width: { sm: "70vh", xl: "40vw", md: "40vw" },
//         marginLeft: { md: 2 },
//         marginTop: { xl: "9px", md: "2px" },
//       }}
//     >
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyDEZ3SEb_VoWvsv0AXCsGT_Mg9f4L0gATQ" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         onChange={(value) => handleChange(value)}
//         center={defaultProps.center}
//         zoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={location?.latitude || 30.733315}
//           lng={location?.longitude || 76.779419}
//           text={
//             <IconButton sx={{ color: "red" }}>
//               <LocationOnIcon />
//             </IconButton>
//           }
//         />
//       </GoogleMapReact>
//     </Box>
//   );
// }

import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector } from "react-redux";

const SimpleMap = () => {
  const location = useSelector((state: any) => state.userReducer.location);
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGFuaXNoLXR5YWdpIiwiYSI6ImNscmV0YWJmcTFocmoybHFpZDQ3dHFkdzMifQ.szsjsVkaiJpDsGUe7LR_4A";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [
        location?.longitude || 76.779419,
        location?.latitude || 30.733315,
      ],
      zoom: 15,
    });
    map.addControl(new mapboxgl.NavigationControl());
      // Array of marker coordinates
      const markerCoordinates = [
        [ location?.longitude,location?.latitude],
        [76.779419, 30.7325],
        [76.779419, 30.73335],
      ];
  
      // Add markers to the map
      markerCoordinates.forEach((coord:any) => {
        new mapboxgl.Marker()
          .setLngLat(coord)
          .addTo(map);
      });
    return () => map.remove();
  }, [location]);

  return <div id="map" style={{ width: "40vw", height: "82vh" }} />;
};

export default SimpleMap;
