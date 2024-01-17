import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  BookingDate: string,
  RoomType: string,
  CustomerName: string,
  NoOfRooms: string
) {
  return { BookingDate, RoomType, CustomerName, NoOfRooms };
}

const rows: any = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

export default function Bookings() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bolder" }}>Booking Date</TableCell>
            <TableCell align="right" style={{ fontWeight: "bolder" }}>
              Room Type
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bolder" }}>
              Customer Name
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bolder" }}>
              No. of Rooms
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: any) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.BookingDate}</TableCell>
              <TableCell align="right">{row.RoomType}</TableCell>
              <TableCell align="right">{row.CustomerName}</TableCell>
              <TableCell align="right">{row.NoOfRooms}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
