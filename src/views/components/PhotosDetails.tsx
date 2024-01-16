import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function PhotosDetails({ item }: any) {
  return (
    <Box
      sx={{
        width: { sm: 725, md: 660, lg: 900 },
        mb: 3,
        // border: "1px solid lightgray",
      }}
    >
      <Grid container>
        <Grid item xs={2.85} sx={{ m: 0.5 }}>
          <Box
            component="img"
            sx={{
              width: { sm: 100, lg: 218, md: 120 },

              borderRadius: "5px",
            }}
            alt="The house from the offer."
            src={`http://localhost:8000/${item?.photo}`}
          />
        </Grid>
        {item?.rooms?.map((room: any) =>
          room?.photos?.map((photo: any) => (
            <Grid item xs={2.85} sx={{ m: 0.5 }}>
              <Box
                component="img"
                sx={{
                  width: { sm: 100, lg: 218, md: 120 },

                  borderRadius: "5px",
                }}
                alt="The house from the offer."
                src={`http://localhost:8000/${photo?.path}`}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
