import { Box } from "@mui/material";
import React from "react";
import HomeLocations from "./HomeLocations";

/**
 * A Component to add on the landing page . Markdown is localhost:3000*.
 */
function HomeBody() {
  return (
    <Box sx={{ width: "98.8%" }}>
      <Box sx={{ ml: "8%", mt: "5rem" }}>
        <img
          src="https://assets.oyoroomscdn.com/cmsMedia/f0be8dc3-e384-40b3-89f9-a0a0109159ce.jpg"
          alt="OYO"
          width={"100%"}
        />
      </Box>
      <Box sx={{ ml: "8%", mt: "5rem", mb: "5rem" }}>
        <img
          src="https://assets.oyoroomscdn.com/cmsMedia/ac15627f-c423-4383-a43b-1402ef8c3a73.png"
          alt="Oyo"
          width={"90%"}
        />
      </Box>
      <HomeLocations />
    </Box>
  );
}

export default HomeBody;
