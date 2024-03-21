import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const PaymentMethods = ({
  selectedMethod,
  setSelectedMethod,
  setDisplay,
  TotalRooms,
  roomQuantity,
  cardPayment,
}: any) => {
  const handleChange = (e: any) => {
    setSelectedMethod(e?.target?.value);
  };

  return (
    <Card>
      <CardContent>
        <Stack gap={2}>
          <Box>
            <Typography width={200} fontWeight={800}>
              Select a payment Method
            </Typography>
            <Divider />
          </Box>
          <Stack direction={"column"}>
            <Stack direction={"row"} alignItems={"center"}>
              {" "}
              <Radio
                disabled={TotalRooms > roomQuantity}
                checked={selectedMethod === "a" || TotalRooms > roomQuantity}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
              <Typography sx={{ fontSize: "14px", fontWeight: "800" }}>
                Credit or debit card
              </Typography>
            </Stack>
            {selectedMethod === "a" && (
              <>
                <Box
                  component={"img"}
                  marginLeft={7}
                  width={"50%"}
                  src={require("../../../../assets/cardMethods.png")}
                />
                <Box
                  component={"button"}
                  type="submit"
                  marginLeft={7}
                  padding={2}
                  sx={{
                    color: "gray",
                    "&:hover": { textDecoration: "underLine" },
                    cursor: "pointer",
                    fontWeight: "800",
                    fontSize: "12px",
                  }}
                  onClick={() => {
                    setDisplay(true);
                  }}
                >
                  Enter Card Details {">"}
                </Box>
              </>
            )}
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Radio
              checked={selectedMethod === "b" || TotalRooms > roomQuantity}
              disabled={TotalRooms > roomQuantity}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "b" }}
            />
            <Typography sx={{ fontSize: "14px", fontWeight: "800" }}>
              Pay on Arrival
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PaymentMethods;
