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
  var date1 = today.getDate()
  var month1= today.getMonth()
  var year1= today.getFullYear();
  function parseDateString(dateString:any) {
    // Split the string into parts
    var parts = dateString.split(" ");

    // Extract month, day, and year
    var month = parts[0]; // Month is the first part
    var day = parseInt(parts[1]); // Day is the second part, convert to integer
    var year = parseInt(parts[2]); // Year is the third part, convert to integer

    // Map month names to month numbers
    var monthMap : any= {
        "January": 0, "February": 1, "March": 2, "April": 3,
        "May": 4, "June": 5, "July": 6, "August": 7,
        "September": 8, "October": 9, "November": 10, "December": 11
    };

    // Get the month number from the map
    var monthNumber = monthMap[month];

    // Create a new Date object
    var date = new Date(year, monthNumber, day);

    return date;
}
  return (
    <Card sx={sx}>
      <CardHeader sx={{ fontWeight: "bolder" }} title=" Bookings for the Day " />
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
           var dateObject = parseDateString(order?.bookFrom);
         var date2=dateObject?.getDate()
         var year2=dateObject?.getFullYear()
         var month2= dateObject?.getMonth()
         if((date1===date2 && month1===month2 && year1===year2)){
          return (
            <TableRow hover key={order?._id}>
              <TableCell>{order?.fullName}</TableCell>
              <TableCell>{order?.email}</TableCell>
              <TableCell>{order?.bookFrom}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          );
         }
          
         
              
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
