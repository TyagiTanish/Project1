import * as React from "react";
import Box from "@mui/material/Box";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts/PieChart";
import { Card, CardContent, Stack, Typography } from "@mui/material";
import styled from "styled-components";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { AnchorPosition, AnchorX, AnchorY } from "@mui/x-charts/ChartsLegend";
import { blueberryTwilightPalette } from "@mui/x-charts/colorPalettes";

const StyledText = styled("text")(({ theme }: any) => ({
  fill: theme?.palette?.text?.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

const size = {
  width: 600,
  height: 300,
};

export default function BookingPieChart({ bookingData }: any) {
  const [radius, setRadius] = React.useState(76);
  const [skipAnimation, setSkipAnimation] = React.useState(false);
  const [pendingBookings, setPendingBookings] = React.useState<any>(0);
  const [acceptedBookings, setAcceptedBookings] = React.useState<any>(0);
  const [rejectedBookings, setRejectedBookings] = React.useState<any>(0);

  React.useMemo(() => {
    setPendingBookings(0);
    setAcceptedBookings(0);
    setRejectedBookings(0);
    bookingData?.map((booking: any) => {
      if (booking?.status === "pending") {
        setPendingBookings((prev: any) => prev + 1);
      } else if (booking?.status === "accepted") {
        setAcceptedBookings((prev: any) => prev + 1);
      } else if (booking?.status === "rejected") {
        setRejectedBookings((prev: any) => prev + 1);
      }
    });
  }, [bookingData]);
  const seriesData = [
    {
      data: [
        {
          label: "Pending Bookings",
          value: pendingBookings,
          color: "#0088FE",
        },
        {
          label: "Accepted Bookings",
          value: acceptedBookings,
          color: "#00C49F",
        },
        {
          label: "Rejected Bookings",
          value: rejectedBookings,
          color: "#FFBB28",
        },
      ],
      innerRadius: radius,
      arcLabel: (params: any) => params.value.toString(),
    },
  ];
  type AnchorPosition = {
    horizontal: AnchorX;
    vertical: AnchorY;
  };
  let legendPosition: AnchorPosition = {
    horizontal: "right",
    vertical: "top",
  };
  return (
    <Card
      sx={{
        width: { xl: "48vw", md: "72vw", lg: "50vw", sm: "62vw" },
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Stack>
          <Box sx={{ width: "100%" }} position={"relative"}>
            <PieChart
              series={seriesData}
              skipAnimation={skipAnimation}
              slotProps={{
                legend: {
                  hidden: window?.innerWidth <= 768 ? true : false,
                  position: legendPosition,
                  labelStyle: {
                    fontSize: "12px",
                  },
                },
                pieArcLabel: { values: bookingData?.length },
              }}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontSize: 14,
                },
              }}
              {...size}
            />
            <Stack
              sx={{
                position: "absolute",
                top: "47%",
                left: { xl: "35%", lg: "44%", md: "43%" },
                transform: "translate(-50%, -50%)",
                alignItems: "center",
                width: 150,
              }}
            >
              <Typography color={"gray"} ml={-13}>
                Total
              </Typography>
              <Typography ml={-13} fontWeight={"bold"}>
                {" "}
                {bookingData?.length}
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
