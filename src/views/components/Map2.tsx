import React, { useEffect, useMemo, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector } from "react-redux";
import AllRooms from "./HotelOwner/Rooms/RoomDetails/Rooms";
import { Box, Stack } from "@mui/material";

const SimpleMap = ({ location, hotel }: any) => {
  hotel = [hotel];
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
    const locations = hotel?.map((item: any) => {
      const coordinates = [
        item?.location?.longitude || 76.779419,
        item?.location?.latitude || 30.733315,
      ];
      const title = item?.hotelName;
      const description = `${item?.city}, ${item?.state}, ${item?.country}`;
      const image = item?.photo;
      const id = item._id;
      return { title, description, coordinates, image, id };
    });
    // Add markers to the map

    locations?.forEach((location: any) => {
      const popup = new mapboxgl.Popup({ anchor: "left" })
        .setLngLat(location.coordinates)
        .setHTML(
          `<div  style='width:100%;' ><span><img src='http://localhost:8000/${hotel?.[0]?.photo}'  style="width: 95%;"  /></span><span style='width:100%;' ><p   style='width:100%;font-size:15px;font-weight:bolder' >${location.title}</p><p>${location.description}</p></span></div><p></p>`
        );
      const marker = new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .setPopup(popup)
        .addTo(map);
      // Attach onclick event to marker
      // Attach click event listener to the marker
      // marker.getElement().addEventListener("click", () => {
      //   window.location.href = `#${location?.id}`;
      //   console.log(location?.id);
      //   const lct = location?.id as any;
      //   // handleClick(lct );
      // });
    });
    return () => map.remove();
  }, [location, hotel]);
  return (
    <>
      <Box
        id="map"
        sx={{ height: "250px", minWidth: { sm: "48vw", lg: "35vw" } }}
      />
    </>
  );
};
export default SimpleMap;
