import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import type { SxProps } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ArrowRight as ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { useDispatch } from "react-redux";
import { end } from "../../../redux/user/userSlice";

const statusMap = {
  pending: { label: "Pending", color: "warning" },
  delivered: { label: "Delivered", color: "success" },
  refunded: { label: "Refunded", color: "error" },
} as const;

export function LatestBookings({ orders, sx }: any): React.JSX.Element {
  var today = new Date();
  return (
    <Card sx={sx}>
      <CardHeader sx={{ fontWeight: "bolder" }} title="Upcoming Bookings  " />
      <Divider />
      <Box sx={{ overflow: "auto" }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }}>Customer Name</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>
                Customer Email
              </TableCell>
              <TableCell sx={{ fontWeight: "bolder" }} sortDirection="desc">
                Date
              </TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order: any) => {
              return (
                <TableRow hover key={order?._id}>
                  <TableCell>{order?.fullName}</TableCell>
                  <TableCell>{order?.email}</TableCell>
                  <TableCell>{order?.bookFrom}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
}
