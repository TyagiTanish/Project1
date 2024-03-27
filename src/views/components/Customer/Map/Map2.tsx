import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Box, IconButton, Typography } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector } from "react-redux";
// const AnyReactComponent = ({ text }: any) => <div>{text}</div>;
export default function SimpleMap({ isViewDeal }: any) {
  const location = useSelector((state: any) => state.userReducer.location);
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGFuaXNoLXR5YWdpIiwiYSI6ImNscmV0YWJmcTFocmoybHFpZDQ3dHFkdzMifQ.szsjsVkaiJpDsGUe7LR_4A";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [
        location?.longitude || 76.779419,
        location?.latitude || 30.733315,
      ],
      zoom: 10,
    });
    map.addControl(new mapboxgl.NavigationControl());
    // Array of marker coordinates
    const markerCoordinates = [
      [76.779419, 30.733315],
      [-74.6, 40.2],
      [-74.7, 40.3],
    ];

    // Add markers to the map
    markerCoordinates.forEach((coord: any) => {
      new mapboxgl.Marker().setLngLat(coord).addTo(map);
    });
    return () => map.remove();
  }, [location]);

  // const defaultProps = {
  //   center: {
  //     lat: 30.733315,
  //     lng: 76.779419,
  //   },
  //   zoom: 11,
  // };

  // const handleChange = (value: any) => {
  //   console.log(value);
  // };
  return (
    <>
      <Typography id="Discription"></Typography>
      <Box
        id="map"
        sx={{
          height: "200px",
          minWidth:
            isViewDeal === true
              ? { sm: "25vw", lg: "20vw" }
              : { sm: "48vw", lg: "35vw" },
          zIndex: -1,
        }}
      />
    </>
  );
}
// <Box sx={{ height: "200px", minWidth: { sm: "48vw", lg: "35vw" } }}>
{
  /* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={(value) => handleChange(value)}
      >
        <AnyReactComponent
          lat={30.733315}
          lng={76.779419}
          text={
            <IconButton sx={{ color: "red" }}>
              <LocationOnIcon />
            </IconButton>
          }
        />
      </GoogleMapReact> */
}

// </Box>
