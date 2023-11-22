import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PhotosDetails() {
  return (
    <Box
      sx={{
        width: "100%",
        mb: 3,
        // border: "1px solid lightgray",
      }}
    >
      <Grid container>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partner-images/eb/90/5066eccbf8e13f3759bee8c45eb6cb38db4081fed931ef2272b47734eb9b.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partner-images/24/36/64fec7c691ceb58dce6a67c353a322552959074266764d3ad9eedc910e1b.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partner-images/20/90/f53e221d9ae767e50ec32c1d68a50cd898eba50cbe5afd3fe308e58b6973.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//hotelier-images/ab/50/1bbc701d565944c06fd3bc083f294d38a41641e904474bd4b701f8a9e852.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partner-images/1f/ee/fd2d173187b50ea83ebde68714ddb5f1abe47b1a20680a7bcd2afc83d26e.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partner-images/7c/78/91f4200bbd95159923dab2400109cfc41be471f10e16a4496afaa7f6065c.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partner-images/7c/78/91f4200bbd95159923dab2400109cfc41be471f10e16a4496afaa7f6065c.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partner-images/38/38/845ff82efd2f98411d73be9312d49e9f471518c6bfe271434f14a57e5071.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partner-images/38/38/845ff82efd2f98411d73be9312d49e9f471518c6bfe271434f14a57e5071.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partner-images/ad/f6/bce98d731f7a68d0989ba8a81f6d161a273f4cbca67b8dc85075892a1428.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//hotelier-images/65/5c/6ce531d5c37a771d359fa990c1c36db4f6a8ec899d5f195248756fc56da4.jpeg"
            />
          </Item>
        </Grid>
        <Grid item xs={2.9}>
          <Item>
            <img
              className="HotelDetailImage"
              src="https://imgcy.trivago.com/if_iw_lte_ih,c_scale,w_236/if_else,c_scale,h_160/e_improve,q_auto:low/d_dummy.jpeg,f_auto,q_auto//partner-images/1e/82/1856331779c5105b54072dfa9f4cd3ab7485b4e36e114b023135af51b306.jpeg"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
