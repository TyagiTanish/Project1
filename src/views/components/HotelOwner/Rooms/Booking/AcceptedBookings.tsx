import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
import { format } from "date-fns";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { saveAs } from "file-saver";
import SearchIcon from "@mui/icons-material/Search";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import VisibilityIcon from "@mui/icons-material/Visibility";

import DialogBox from "./RecieptDialogBox";

import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridColumnHeaderParams,
  GridSortModel,
} from "@mui/x-data-grid";
import PdfViewer from "./DisplayPdf";
import PdfViewerFromBuffer from "./DisplayPdf";
import LoaderBeforeReciept from "./LoaderBeforeReciept";
import { FormattedMessage, useIntl } from "react-intl";

/**
 * To show all the accepted Bookings by the Hotel Owner. Markdown is *AcceptedBooking*.
 */

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const handleClick = (item: any) => {
  // console.log(item?.hotelId?.photo);
};
function AcceptedBookings() {
  const [data, setData] = useState<any>([]);
  const { request } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = useState<any>(null);
  const [paginationModel, setPaginationModel] = useState<any>({
    page: 0,
    pageSize: 5,
  });
  const [loader, setLoader] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [length, setLength] = useState();
  const [render, setRender] = useState(0);
  const [queryOptions, setQueryOptions] = useState<any>();
  const intl = useIntl();
  const handleChange = async (event: any, id: any) => {
    await request.put(`/updateArrival/${id}`, {
      value: event.target.value,
    });
    setRender((prev: any) => prev + 1);
  };
  const handleChangeStatus = async (event: any, id: any) => {
    await request.put(`/updatePaymentStatus/${id}`, {
      value: event.target.value,
    });

    setRender((prev: any) => prev + 1);
  };

  const columns: GridColDef[] = [
    {
      field: "hotelId",
      headerName: "Hotel name",
      width: 200,
      renderCell: (params: any) => (
        // Access the 'age' property from the row data
        <div style={{ textTransform: "capitalize" }}>
          {params?.row?.hotelId?.hotelName}
        </div>
      ),
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Hotel Name" />
        </strong>
      ),
    },

    {
      field: "email",

      width: 200,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Customer Email" />
        </strong>
      ),
    },
    {
      field: `bookFrom`,
      headerName: "Book From",
      width: 200,

      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Check in" />
        </strong>
      ),
      renderCell: (params: any) => (
        <div> {format(new Date(params?.row?.bookFrom), "MMMM do,yyyy")}</div>
      ),
    },
    {
      field: "bookTo",
      headerName: "Book To",
      width: 200,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Check Out" />
        </strong>
      ),
      renderCell: (params: any) => (
        <div>{format(new Date(params?.row?.bookTo), "MMMM do,yyyy")}</div>
      ),
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: 200,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Payment Status" />
        </strong>
      ),
      renderCell: (params: any) => (
        <FormControl fullWidth size="small">
          {params?.row?.paymentStatus === "paid" ? (
            <Select disabled value={params?.row?.paymentStatus}>
              <MenuItem value={"paid"}>
                <FormattedMessage defaultMessage="Paid" />
              </MenuItem>
            </Select>
          ) : (
            <Select
              defaultValue={params?.row?.paymentStatus}
              onChange={(e) => {
                handleChangeStatus(e, params.row._id);
              }}
            >
              <MenuItem value={"paid"}>
                <FormattedMessage defaultMessage="Paid" />
              </MenuItem>
              <MenuItem value={"unpaid"}>
                <FormattedMessage defaultMessage="Unpaid" />
              </MenuItem>
            </Select>
          )}
        </FormControl>
      ),
    },
    {
      field: "paymentMethod",
      headerName: "Payment Method",
      width: 200,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Payment Method" />
        </strong>
      ),
      renderCell: (params: any) => (
        <div style={{ textTransform: "capitalize" }}>
          {params?.row?.paymentId?.type}
        </div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Booking Status" />
        </strong>
      ),
      renderCell: (params: any) => (
        <Box
          style={{ textTransform: "capitalize" }}
          color={
            params?.row?.status === "accepted"
              ? "green"
              : // : params?.row?.status === "rejected"
                // ? "red"
                "red"
          }
        >
          {" "}
          {params?.row?.status}
        </Box>
      ),
    },
    {
      field: "customField",
      headerName: " Arrival Status",
      width: 200,

      renderCell: (params: any) => (
        <FormControl fullWidth size="small">
          {params?.row?.arrival !== "Canceled" &&
          params?.row?.status !== "rejected" &&
          params?.row?.status !== "pending" ? (
            <Select
              //  to  save the arrival status of customer
              defaultValue={
                params?.row?.arrival === "" ? "Booked" : params?.row?.arrival
              }
              onChange={(e) => {
                handleChange(e, params.row._id);
              }}
            >
              <MenuItem value={"Checked in"}>
                <FormattedMessage defaultMessage="Checked In" />
              </MenuItem>
              <MenuItem value={"Checked Out"}>
                <FormattedMessage defaultMessage="Checked Out" />
              </MenuItem>
              <MenuItem value={"Booked"}>
                <FormattedMessage defaultMessage="Booked" />
              </MenuItem>
              <MenuItem value={"Canceled"}>
                <FormattedMessage defaultMessage="Canceled" />
              </MenuItem>
            </Select>
          ) : params?.row?.status === "rejected" ||
            params?.row?.status === "pending" ? (
            <Typography textAlign={"center"}>--</Typography>
          ) : (
            <Select
              disabled
              //  to  save the arrival status of customer
              defaultValue={params?.row?.arrival}
              onChange={(e) => {
                handleChange(e, params.row._id);
              }}
            >
              <MenuItem value={"Checked in"}>
                <FormattedMessage defaultMessage="Checked In" />
              </MenuItem>
              <MenuItem value={"Checked Out"}>
                <FormattedMessage defaultMessage="Checked Out" />
              </MenuItem>
              <MenuItem value={"Booked"}>
                <FormattedMessage defaultMessage="Booked" />
              </MenuItem>
              <MenuItem value={"Canceled"}>
                <FormattedMessage defaultMessage="Canceled" />
              </MenuItem>
            </Select>
          )}
        </FormControl>
      ),
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Arrival Status" />
        </strong>
      ),
    },
    {
      field: "actions",
      type: "actions",

      width: 130,
      cellClassName: "actions",
      getActions: (value: any) => {
        return [
          //   <GridActionsCellItem
          //     icon={<VisibilityIcon />}
          //     label="view"
          //     sx={{
          //       color: "lightgray",
          //     }}
          //     onClick={() => {
          //       handleClickOpen(value.row);
          //     }}
          //   />,

          value?.row?.paymentStatus !== "unpaid" ? (
            <GridActionsCellItem
              icon={
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  <FormattedMessage defaultMessage="View Reciept" />
                </Button>
              }
              label="view"
              sx={{
                color: "lightgray",
              }}
              onClick={() => {
                handleClickOpen(value.row);
              }}
            />
          ) : (
            <>-</>
          ),
        ];
      },
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Actions" />
        </strong>
      ),
    },
  ];
  useMemo(() => {
    const get = async () => {
      const data = await request.get("/acceptedBookings");
      setData(data.data);

      setLength(data.data.length);
    };
    get();
  }, []);

  useEffect(() => {
    const get = async () => {
      const data = await request.get("/acceptedBookings", {
        params: {
          limit: paginationModel.pageSize || null,
          page: paginationModel.page,
          orderby: queryOptions?.sortModel[0]?.field || "_id",
          sortby: queryOptions?.sortModel[0]?.sort || "asc",
          search: search,
        },
      });
      setData(data.data);
    };
    get();
  }, [paginationModel, queryOptions, search, render]);
  const [age, setAge] = React.useState("");

  const handleClickOpen = async (data: any) => {
    setDisplay(data);
    setLoader(true);
    const buffer = (
      await request.get("/viewReciept", {
        responseType: "blob",
        params: { bookingId: data?._id },
      })
    ).data;
    setDisplay(buffer);
    setTimeout(() => {
      setLoader(false);
      setOpen(true);
    }, 2000);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };
  const dynamicHeight = Math.min(data.length * 3.5 + 10, 80) + "vh";
  // console.log(length);
  const handleSortModelChange = useCallback((sortModel: GridSortModel) => {
    // Here you save the data you need from the sort model
    setQueryOptions({ sortModel: [...sortModel] });
  }, []);
  // console.log(search);
  return (
    <>
      {/* {data.length == 0 ? (
        <Typography
          sx={{ mt: "20%", textAlign: "center", color: "red", fontSize: 22 }}
        >
          No Bookings found*
        </Typography>
      ) : ( */}
      <>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 35,
            color: "rgb(215, 0, 64)",
            fontFamily: "system-ui",
            mb: 3,
          }}
        >
          <FormattedMessage defaultMessage="Bookings" />
        </Typography>
        <Stack
          sx={{ ml: "77%", mb: 4 }}
          direction={"row"}
          alignItems={"center"}
          spacing={2}
        >
          {" "}
          <TextField
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder={intl.formatMessage({
              defaultMessage: "Search Here....",
            })}
            sx={{ width: 370 }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Stack>
        <Box sx={{ height: "38vh", width: "100%", fontSize: 20 }}>
          {loader && <LoaderBeforeReciept />}
          <DataGrid
            rows={data}
            columns={columns}
            getRowId={(row: any) => row._id}
            disableColumnMenu
            rowCount={length}
            pageSizeOptions={[5, 10, 20]}
            paginationModel={paginationModel}
            paginationMode="server"
            onPaginationModelChange={setPaginationModel}
            sortingMode="server"
            onSortModelChange={handleSortModelChange}
          />
        </Box>
      </>
      {/* )} */}

      {open && <DialogBox pdfBuffer={display} open={open} setOpen={setOpen} />}
    </>
  );
}

export default AcceptedBookings;
