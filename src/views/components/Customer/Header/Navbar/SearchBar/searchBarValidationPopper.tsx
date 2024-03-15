import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { useRef, useState } from "react";

export default function SearchBarValidationPopper({
  searchBarAnchorEl,
  setSearchBarAnchorEl,
  message,
}: any) {
  const open = Boolean(searchBarAnchorEl);
  const id = open ? "simple-popper" : undefined;
  const arrowRef = useRef(null);

  const Arrow = () => {
    return <div ref={arrowRef}></div>;
  };

  return (
    <div>
      <Popper
        id={id}
        open={open}
        anchorEl={searchBarAnchorEl}
        placement="bottom-start"
        modifiers={[
          {
            name: "flip",
            enabled: true,
            options: {
              altBoundary: true,
              rootBoundary: "document",
              padding: 8,
            },
          },
          {
            name: "preventOverflow",
            enabled: true,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: "document",
              padding: 8,
            },
          },
          // {
          //   name: "arrow",
          //   enabled: true,
          //   options: {
          //     element: arrowRef,
          //   },
          // },
        ]}
        sx={{ width: 300, mt: 2 }}
      >
        <Box
          sx={{ border: 1, p: 1, bgcolor: "background.paper", color: "red" }}
        >
          {message}
        </Box>
      </Popper>
    </div>
  );
}
