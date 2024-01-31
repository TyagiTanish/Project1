import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useAuth from "../../../../../Hooks/useAuth/useAuth";

import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from "@mui/material/Typography";

import SearchIcon from "@mui/icons-material/Search";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import VisibilityIcon from "@mui/icons-material/Visibility";

import DialogBox from "./DialogBox";

import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridColumnHeaderParams,
  GridSortModel,
} from "@mui/x-data-grid";


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
  console.log(item?.hotelId?.photo);
};
function AcceptedBookings() {
  const [data, setData] = useState<any>([]);
  const { request } = useAuth();
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = useState<any>({});
  const [paginationModel, setPaginationModel] = useState<any>({
    page: 0,
    pageSize: 5,
  });
  const [search,setSearch]=React.useState("");
  const [length, setLength] = useState();
  const [queryOptions, setQueryOptions] = useState<any>();
  const columns: GridColDef[] = [
    {
      field: "hotelId",
      headerName: "Hotel name",
      width: 200,
      renderCell: (params: any) => (
        // Access the 'age' property from the row data
        <div>{params?.row?.hotelId?.hotelName}</div>
      ),
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>Hotel Name</strong>
      ),
    },
  
    {
      field: "email",

      width: 200,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>Customer Email</strong>
      ),
    },
    {
      field: `bookFrom`,
      headerName: "Book From",
      width: 250,
     
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>Check in</strong>
      ),
    },
    {
      field: "bookTo",
      headerName: "Book To",
      width: 180,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>Check Out</strong>
      ),
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: 180,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>Payment Status</strong>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>Booking Status</strong>
      ),
    },
    {
      field: "customField",
      headerName: " Arrival Status",
      width: 180,
      renderCell: (params: any) => (
        // Access the 'age' property from the row data
        <FormControl fullWidth size="small">
      
        <Select
        
          value={age}
       
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={10}>Thirty</MenuItem>
        </Select>
      </FormControl>
      ),
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>Arrival Status</strong>
      ),
    },
    {
      field: "actions",
      type: "actions",

      width: 110,
      cellClassName: "actions",
      getActions: (value:any) => {
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


        <GridActionsCellItem
        icon={
          <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
           

         
          }}
         
        >
          View
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
        <strong style={{ fontSize: 18 }}>Actions</strong>
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
          search:search
        },
      });
      setData(data.data);
    };
    get();
  }, [paginationModel, queryOptions,search]);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleClickOpen = (data: any) => {
    setOpen(true);
    setDisplay(data);
  };
  const handleClose = (value: string) => {
    setOpen(false);
  };
  const dynamicHeight = Math.min(data.length * 3.5 + 10, 80) + "vh";
  console.log(length);
  const handleSortModelChange = useCallback((sortModel: GridSortModel) => {
    // Here you save the data you need from the sort model
    setQueryOptions({ sortModel: [...sortModel] });
  }, []);
console.log(search)
  return (
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
        Bookings
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
            sx={{ width: 250 }}
            onChange={(e)=>{
              setSearch(e.target.value)
            }}
          />
      
    
      </Stack>
      <Box sx={{ height: "auto", width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row:any) => row._id}
          disableColumnMenu
          // {...other props}
          rowCount={length}
          pageSizeOptions={[5, 10, 20]}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
          sortingMode="server"
          onSortModelChange={handleSortModelChange}
          // onSortModelChange={handleSortModelChange}
        />
      </Box>
      {open && <DialogBox data={display} open={open} onClose={handleClose} />}
    </>
  );
}

export default AcceptedBookings;
