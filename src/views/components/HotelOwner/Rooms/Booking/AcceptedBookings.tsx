import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
import { format } from "date-fns";
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
  const handleChange = async(event: any,id:any) => {
        await request.put(`/updateArrival/${id}`,{
          value:event.target.value
        })
  };
  const columns: GridColDef[] = [
    {
      field: "hotelId",
      headerName: "Hotel name",
      width: 200,
      renderCell: (params: any) => (
        // Access the 'age' property from the row data
        <div style={{textTransform:"capitalize"}}>{params?.row?.hotelId?.hotelName}</div>
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
      width: 200,
     
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>Check in</strong>
      ),
      renderCell: (params: any) => (
     
        <div >     {format(new Date(params?.row?.bookFrom), "MMMM do,yyyy")}</div>
     
      ),
    },
    {
      field: "bookTo",
      headerName: "Book To",
      width: 200,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>Check Out</strong>
      ),
      renderCell: (params: any) => (
       
        <div>{format(new Date(params?.row?.bookTo), "MMMM do,yyyy")}</div>
     
      ),
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      width: 200,
      editable: true,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>Payment Status</strong>
      ),
      renderCell: (params: any) => (
       
        <div style={{textTransform:"capitalize"}}> {params?.row?.paymentStatus}</div>
     
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
      renderCell: (params: any) => (
       
        <div style={{textTransform:"capitalize"}}> {params?.row?.status}</div>
     
      ),
    },
    {
      field: "customField",
      headerName: " Arrival Status",
      width: 200,
     
      renderCell: (params: any) => (
     
        <FormControl fullWidth size="small">
      
        <Select
        
      //  to  save the arrival status of customer

          onChange={(e)=>{handleChange(e,params.row._id)}}
        >
          <MenuItem value={'Checked in'}>Checked In</MenuItem>
          <MenuItem value={'Checked Out'}>Checked Out</MenuItem>
          <MenuItem value={'Booked'}>Booked</MenuItem>
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

      width: 130,
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

    {data.length==0 ?    <Typography sx={{mt:'20%', textAlign:'center',color: "red" ,fontSize:22}}>
          No Bookings found*
        </Typography> :   
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
        sx={{ ml: "77%", mb: 4, }}
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
            sx={{ width: 370 }}
            onChange={(e)=>{
              setSearch(e.target.value)
            }}
          />
      
    
      </Stack>
      <Box sx={{ height: "auto", width: '100%',fontSize:20 }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row:any) => row._id}
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
      }
    
      {open && <DialogBox data={display} open={open} onClose={handleClose} />}
    </>
  );
}

export default AcceptedBookings;
