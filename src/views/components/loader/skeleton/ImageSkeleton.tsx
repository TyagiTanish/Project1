import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Skeletons({ width, height }: any) {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}

      {/* For other variants, adjust the size with `width` and `height` */}

      <Skeleton
        animation="wave"
        variant="rectangular"
        sx={{ width: width, height: height, borderRadius: 2 }}
      />
    </Stack>
  );
}
