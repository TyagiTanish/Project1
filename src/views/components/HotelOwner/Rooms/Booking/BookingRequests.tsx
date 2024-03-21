import * as React from "react";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

import useAuth from "../../../../../Hooks/useAuth/useAuth";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DialogBox from "./RecieptDialogBox";
import { ChildProcess } from "child_process";
import io from "socket.io-client";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridColumnHeaderParams,
  GridSortModel,
} from "@mui/x-data-grid";
import BookingRequestDialogBox from "./BookingRequestDialogBox";
import LoaderBeforeReciept from "./LoaderBeforeReciept";
import { FormattedMessage } from "react-intl";

const socket = io("http://localhost:8000", {
  transports: ["websocket", "polling", "flashsocket"],
});

/**
 * showing all the pending booking Requests to the admin. Markdown is *Bookings*.
 */
export default function Bookings() {
  const [open, setOpen] = React.useState(false);
  const [handle, sethandle] = React.useState("");
  const { request } = useAuth();
  const [data, setData] = React.useState<any>([]);
  const [display, setDisplay] = React.useState({});
  const [length, setLength] = React.useState();
  const [paginationModel, setPaginationModel] = React.useState<any>({
    page: 0,
    pageSize: 5,
  });
  const [search, setSearch] = React.useState("");
  const [queryOptions, setQueryOptions] = React.useState<any>();
  const handleClickOpen = (data: any) => {
    setOpen(true);
    console.log(data);
    setDisplay(data);
  };
  const handleSortModelChange = React.useCallback(
    (sortModel: GridSortModel) => {
      setQueryOptions({ sortModel: [...sortModel] });
    },
    []
  );
  // console.log(data);
  const columns: GridColDef[] = [
    {
      field: "fullName",

      width: 270,

      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Customer Name" />
        </strong>
      ),
    },

    {
      field: "email",

      width: 270,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Customer Email" />
        </strong>
      ),
    },
    {
      field: "phone",
      headerName: "Phone No.",
      width: 250,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          {" "}
          <FormattedMessage defaultMessage="Phone No." />
        </strong>
      ),
    },
    {
      field: "type",
      headerName: "Payment Method",
      width: 250,
      editable: true,
      renderCell: (params: any) => {
       
      return  <div style={{ textTransform: "capitalize" }}>
       {params?.row?.paymentId?.type}
        </div>

      },
      renderHeader: (params: GridColumnHeaderParams) => 
        {
     
      return  <strong style={{ fontSize: 18 }}>
          {" "}
          <FormattedMessage defaultMessage="Payment Method" />
        </strong>
      },

    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: 250,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Payment Status" />
        </strong>
      ),
    },

    {
      field: "actions",
      type: "actions",

      width: 270,
      cellClassName: "actions",
      getActions: (value: any) => {
        return [
          //for accept
          <GridActionsCellItem
            icon={
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundImage: "linear-gradient(270deg,green,green)",
                }}
              >
                <FormattedMessage defaultMessage="Accept" />
              </Button>
            }
            label="view"
            sx={{
              color: "lightgray",
            }}
            onClick={() => {
              handleClickAccept(value.row._id);
            }}
          />,

          // for Reject
          <GridActionsCellItem
            icon={
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundImage: "linear-gradient(270deg,#d11450,#ee2a24)",
                }}
              >
                <FormattedMessage defaultMessage="Reject" />
              </Button>
            }
            label="view"
            sx={{
              color: "lightgray",
            }}
            onClick={() => {
              handleClick(value.row._id);
            }}
          />,

          // for view
          <GridActionsCellItem
            icon={
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                <FormattedMessage defaultMessage="View" />
              </Button>
            }
            label="view"
            sx={{
              color: "lightgray",
            }}
            onClick={() => {
              handleClickOpen(value.row);
            }}
          />,
        ];
      },
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Actions" />
        </strong>
      ),
    },
  ];
  const handleClose = (value: string) => {
    setOpen(false);
  };
  const handleClickAccept = async (id: any) => {
    try {
      const data = await request.put(`/bookingAccept/${id}`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = async (id: any) => {
    try {
      const data = await request.delete(`/bookingDelete/${id}`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useMemo(async () => {
    try {
      const data = await request.get("/bookingDetails");

      setData(data.data);
      setLength(data?.data?.length);
    } catch (error) {
      console.log(error);
    }
  }, []);
  React.useMemo(async () => {
    try {
      const data = await request.get("/bookingDetails", {
        params: {
          limit: paginationModel.pageSize || null,
          page: paginationModel.page,
          orderby: queryOptions?.sortModel[0]?.field || "_id",
          sortby: queryOptions?.sortModel[0]?.sort || "asc",
          search: search,
        },
      });

      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  }, [paginationModel, queryOptions, search]);
  React.useMemo(() => {
    socket.on("recieved", (data) => {
      if (data) {
        const get = async () => {
          try {
            const data = await request.get("/bookingDetails");
            setData(data.data);
          } catch (error) {
            console.log(error);
          }
        };
        get();
      }
    });
  }, [socket]);
  return (
    <>
      {data.length !== 0 ? (
        <>
          {" "}
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: 35,
              color: "rgb(215, 0, 64)",
              fontFamily: "system-ui",
            }}
          >
            <FormattedMessage defaultMessage="Requests" />
          </Typography>
          <Stack
            sx={{ ml: "77%", mb: 2 }}
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
              placeholder="Search Here...."
              sx={{ width: 270 }}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Stack>
        </>
      ) : (
        <></>
      )}
      {data.length === 0 ? (
        <Typography
          sx={{ mt: "20%", textAlign: "center", color: "red", fontSize: 22 }}
        >
          <FormattedMessage defaultMessage="No Bookings till now*" />
        </Typography>
      ) : (
        <Box sx={{ height: "38vh", width: "100%" }}>
          {/* data grid to implement server side sorting , pagination and searching */}
          <DataGrid
            rows={data}
            columns={columns}
            getRowId={(row) => row._id}
            disableColumnMenu
            sx={{ fontSize: 15 }}
            rowCount={length}
            pageSizeOptions={[5, 10, 20]}
            paginationModel={paginationModel}
            paginationMode="server"
            onPaginationModelChange={setPaginationModel}
            sortingMode="server"
            onSortModelChange={handleSortModelChange}
          />
        </Box>
      )}

      {open && (
        <BookingRequestDialogBox
          data={display}
          open={open}
          onClose={handleClose}
        />
      )}
    </>
  );
}
