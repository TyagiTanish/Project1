import React, { useEffect, useMemo } from "react";
import GoogleMapReact from "google-map-react";
import { Box, IconButton, Typography } from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
export default function HotelLocationMap({
  setLocation,
  cityCoordinates,
  setCityCoordinates,
}: any) {
  // const location = useSelector((state: any) => state.userReducer.location);
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGFuaXNoLXR5YWdpIiwiYSI6ImNscmV0YWJmcTFocmoybHFpZDQ3dHFkdzMifQ.szsjsVkaiJpDsGUe7LR_4A";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [
        cityCoordinates?.longitude || 76.779419,
        cityCoordinates?.latitude || 30.733315,
      ],
      zoom: 10,
    });
    map.addControl(new mapboxgl.NavigationControl());
    // Array of marker coordinates

    const markerCoordinates: any = [];
    var marker = new mapboxgl.Marker()
      .setLngLat([
        cityCoordinates?.longitude || 76.779419,
        cityCoordinates?.latitude || 30.733315,
      ])
      .addTo(map);

    const handleChange = (value: any) => {
      const { lng, lat } = value;
      const data: any = {
        latitude: lat,
        longitude: lng,
      };
      setCityCoordinates(data);
      setLocation(data);
      // Add markers to the map
      let center = map.getCenter();
      marker.setLngLat([center.lng, center.lat]).addTo(map);
    };

    map?.on("moveend", (value) => {
      handleChange(value?.target?.getCenter());
    });

    // Add markers to the map

    return () => map.remove();
  }, [cityCoordinates]);

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
      <Box
        id="map"
        sx={{
          height: "200px",
          minWidth: { sm: "48vw", lg: 200 },
          // zIndex: -1,
          borderRadius: 2,
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
