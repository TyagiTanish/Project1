/**
 * To show all the users to superAdmin. Markdown is *ShowAllUsers*.
 */
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridColumnHeaderParams,
  GridSortModel,
} from "@mui/x-data-grid";

import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useIntl, FormattedMessage } from "react-intl";
import Actions from "./Actions";
import { createMuiTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
const StyledDataGrid = styled(DataGrid)`
  .MuiDataGrid-cell:focus {
    outline: none;
  }
`;

const theme = createMuiTheme();

function ShowAllUsers() {
  const [data, setData] = useState<any>([]);
  const { request } = useAuth();
  const [length, setLength] = useState();
  const [search, setSearch] = React.useState("");
  const [paginationModel, setPaginationModel] = useState<any>({
    page: 0,
    pageSize: 5,
  });
  const handleSortModelChange = useCallback((sortModel: GridSortModel) => {
    setQueryOptions({ sortModel: [...sortModel] });
  }, []);
  const [queryOptions, setQueryOptions] = useState<any>();
  const intl = useIntl();
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Hotel name",
      headerClassName: "MuiDataGrid-cell",
      width: 500,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Customer Name" />
        </strong>
      ),
    },

    {
      field: "email",
      headerClassName: "MuiDataGrid-cell",
      width: 500,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Customer Email" />
        </strong>
      ),
    },
    {
      field: `phone`,
      headerName: "Book From",
      width: 500,
      headerClassName: "MuiDataGrid-cell",
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{ fontSize: 18 }}>
          <FormattedMessage defaultMessage="Customer Phone" />
        </strong>
      ),
    },
  ];
  useMemo(() => {
    const get = async () => {
      const data = await request.get("/getAllUsers");
      setData(data?.data);

      setLength(data?.data?.length);
    };
    get();
  }, []);

  useEffect(() => {
    const get = async () => {
      const data = await request.get("/getAllUsers", {
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
  }, [paginationModel, queryOptions, search]);
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
        <FormattedMessage defaultMessage="User Details-" />
      </Typography>

      <Stack
        sx={{ ml: "81%", mb: 2 }}
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
          sx={{ width: 300 }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Stack>
      <Box sx={{ height: "auto", width: "100%" }}>
        <StyledDataGrid
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
          // onSortModelChange={handleSortModelChange}
        />
      </Box>
    </>
  );
}

export default ShowAllUsers;
