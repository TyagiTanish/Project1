import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import MapJpg from "../../../assets/map.jpg";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { searchDetails } from "../redux/user/userSlice";
/**
 * A Component to add on the landing page . Markdown is HomeLocations*.
 */
function HomeLocations() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOpen = (location: any) => {
    dispatch(searchDetails(location));
    window.scroll(0, 0);
    navigate("/hotels");
  };
  return (
    <>
      <Stack
        direction={"row"}
        sx={{ backgroundColor: "#f3f5f7", pt: "40px", pb: "40px" }}
      >
        <Stack width={"50%"} ml={10}>
          <img src={MapJpg} alt="World map" width={"80%"} />
        </Stack>
        <Stack width={"50%"} direction={"column"}>
          <Typography
            sx={{ fontSize: "26px", fontWeight: 700, color: "#333", mb: 2 }}
          >
            <FormattedMessage defaultMessage="There's an OYO around. Always." />
          </Typography>
          <Typography sx={{ fontSize: "16px", color: "grey" }}>
            <FormattedMessage defaultMessage="More Destinations.More Ease. More Affordable." />
          </Typography>
          <Stack direction={"row"} m={2}>
            <Box borderRight={"1px solid gray"} pr={2}>
              <Typography sx={{ fontSize: "32px" }}>35+</Typography>
              <Typography sx={{ fontSize: "14px", color: "grey" }}>
                <FormattedMessage defaultMessage="Cities" />
              </Typography>
            </Box>
            {/* <Typography sx={{ fontSize: "48px", color: "grey" }}>/</Typography> */}
            <Box pl={2}>
              <Typography sx={{ fontSize: "32px" }}>174,000+</Typography>
              <Typography sx={{ fontSize: "14px", color: "grey" }}>
                <FormattedMessage defaultMessage="    Hotels & Homes" />
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ mt: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <span
                  style={{
                    backgroundColor: "rgb(26, 182, 79)",
                    borderRadius: "50%",
                    width: "8px",
                    height: "8px",
                    marginRight: "8px",
                    display: "inline-block",
                  }}
                ></span>
                &nbsp;
                <Button
                  sx={{ textTransform: "none", color: "black" }}
                  onClick={() => {
                    handleOpen("Mumbai");
                  }}
                >
                  <FormattedMessage defaultMessage="Mumbai" />
                </Button>
              </Grid>
              <Grid item xs={4}>
                <span
                  style={{
                    backgroundColor: "rgb(255, 127, 123)",
                    borderRadius: "50%",
                    width: "8px",
                    height: "8px",
                    marginRight: "8px",
                    display: "inline-block",
                  }}
                ></span>
                &nbsp;
                <Button
                  sx={{ textTransform: "none", color: "black" }}
                  onClick={() => {
                    handleOpen("Partap Nagar");
                  }}
                >
                  Partap Nagar
                </Button>
              </Grid>
              <Grid item xs={4}>
                <span
                  style={{
                    backgroundColor: "rgb(245, 166, 35)",
                    borderRadius: "50%",
                    width: "8px",
                    height: "8px",
                    marginRight: "8px",
                    display: "inline-block",
                  }}
                ></span>
                &nbsp;
                <Button
                  sx={{ textTransform: "none", color: "black" }}
                  onClick={() => {
                    handleOpen("YamunaNagar");
                  }}
                >
                  <FormattedMessage defaultMessage="Yamuna Nagar" />
                </Button>
              </Grid>
              <Grid item xs={4}>
                <span
                  style={{
                    backgroundColor: "rgb(95, 214, 242)",
                    borderRadius: "50%",
                    width: "8px",
                    height: "8px",
                    marginRight: "8px",
                    display: "inline-block",
                  }}
                ></span>
                &nbsp;
                <Button
                  sx={{ textTransform: "none", color: "black" }}
                  onClick={() => {
                    handleOpen("Bilaspur");
                  }}
                >
                  <FormattedMessage defaultMessage="Bilaspur" />
                </Button>
              </Grid>
              <Grid item xs={4}>
                <span
                  style={{
                    backgroundColor: "rgb(254, 148, 241)",
                    borderRadius: "50%",
                    width: "8px",
                    height: "8px",
                    marginRight: "8px",
                    display: "inline-block",
                  }}
                ></span>
                &nbsp;{" "}
                <Button
                  sx={{ textTransform: "none", color: "black" }}
                  onClick={() => {
                    handleOpen("Jagadhri");
                  }}
                >
                  <FormattedMessage defaultMessage="Jagadhri" />
                </Button>
              </Grid>
              <Grid item xs={4}>
                <span
                  style={{
                    backgroundColor: "rgb(126, 137, 228)",
                    borderRadius: "50%",
                    width: "8px",
                    height: "8px",
                    marginRight: "8px",
                    display: "inline-block",
                  }}
                ></span>
                &nbsp;
                <Button
                  sx={{ textTransform: "none", color: "black" }}
                  onClick={() => {
                    handleOpen("Mohali");
                  }}
                >
                  <FormattedMessage defaultMessage="Mohali" />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default HomeLocations;
