import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useSelector } from "react-redux";
import AllRooms from "../../HotelOwner/Rooms/RoomDetails/Rooms";
import { Box, Stack } from "@mui/material";
import Skeletons from "../../loader/skeleton/ImageSkeleton";

const SimpleMap = ({ filteredData, setToggle }: any) => {
  const location = useSelector((state: any) => state.userReducer.location);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGFuaXNoLXR5YWdpIiwiYSI6ImNscmV0YWJmcTFocmoybHFpZDQ3dHFkdzMifQ.szsjsVkaiJpDsGUe7LR_4A";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [
        filteredData[0]?.location?.longitude || 76.779419,
        filteredData[0]?.location?.latitude || 30.733315,
      ],
      zoom: 10,
    });
    map.addControl(new mapboxgl.NavigationControl());
    // Array of marker coordinates
    const locations = filteredData?.map((item: any) => {
      const coordinates = [
        JSON.parse(item?.location?.longitude),
        JSON.parse(item?.location?.latitude),
      ];
      const title = item?.hotelName;
      const description = `${item?.city}, ${item?.state}, ${item?.country}`;
      const image = item.photo;
      const id = item._id;
      return { title, description, coordinates, image, id };
    });
    // Add markers to the map
    locations?.forEach((location: any) => {
      const popup = new mapboxgl.Popup()
        .setLngLat(location.coordinates)
        .setHTML(
          `<div  style='width:100%;' ><span><img src='http://localhost:8000/${location?.image}'  style="width: 95%;"  /></span><span style='width:100%;' ><p   style='width:100%;font-size:15px;font-weight:bolder' >${location.title}</p><p>${location.description}</p></span></div><p></p>`
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
  }, [location, filteredData]);
  useEffect(() => {}, [filteredData]);
  return (
    <>
      <Stack>
        {" "}
        <Box
          id="map"
          sx={{
            width: { xl: 800, sm: 700, md: "90%", lg: 650 },
            // height: { sm: 600, xl: 800, md: 1000 },
            height: { md: "80vh", lg: "90vh", xl: "78vh" },
            borderRadius: 5,
            zIndex: -1,
          }}
        />
      </Stack>
    </>
  );
};
export default SimpleMap;
