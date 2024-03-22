import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function PhotosDetails({ item }: any) {
  return (
    <Box
      sx={{
        width: { sm: 725, md: 930, lg: 690, xl: 920 },
        mb: 3,
        // border: "1px solid lightgray",
        ml: 2,
        boxShadow: 2,
        borderRadius: 5,
        p: 2,
      }}
    >
      <Grid container>
        {/* <Grid item xs={2.85} sx={{ m: 0.5 }}>
          <Box
            component="img"
            sx={{
              width: { sm: 170, lg: 205, md: 135, xl: 218 },

              borderRadius: "5px",
            }}
            alt="The house from the offer."
            src={`http://localhost:8000/${item?.photo}`}
          />
        </Grid> */}
        {item?.rooms?.map((room: any) =>
          room?.photos?.map((photo: any) => (
            <Grid item xs={2.8} sx={{ m: 0.5 }}>
              <Box
                component="img"
                sx={{
                  width: { sm: 170, lg: 190, md: 220, xl: 230 },

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
