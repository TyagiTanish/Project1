import React, { useEffect, useMemo, useState } from "react";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridSortModel,
} from "@mui/x-data-grid";
import ShowHotelsModal from "./ShowHotelsModal";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import { enqueueSnackbar } from "notistack";
import { useIntl, FormattedMessage } from "react-intl";
// import LoginModal from "./LoginModal";
// import EditDialog from "../../EditDialog";
import Actions from "./Actions";

/**
 * to show all the  Members to the super admin. Markdown is *ShowAllMembers*.
 */

export default function ShowAllMembers() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [id, setId] = useState(0);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [paginationModel, setPaginationModel] = React.useState<any>({
    page: 0,
    pageSize: 5,
  });

  const [length, setLength] = React.useState();
  const [queryOptions, setQueryOptions] = React.useState<any>();
  const [open, setOpen] = React.useState(false);
  const [hotels, setHotels] = React.useState<any>([]);
  const [modalHotel, setModalHotel] = React.useState<any>([]);
  const { request } = useAuth();
  const [members, setMembers] = React.useState<any>([]);
  const [showHotels, setShowHotels] = useState(false);
  const [render, setRender] = useState(0);
  const getMembers = async () => {
    const data: any = await request.get("/getAllMembers");
    setMembers(data?.data);
  };
  const getHotels = async (id: any) => {
    try {
      const data = (await request.get(`/getHotelForParticularMember/${id}`))
        .data;
      // const hotelsdata: any = data?.map((item: any, i: any) => {
      //   item.id = i + 1;
      //   return item;
      // });
      setId(id);
      setLength(data.length);
      setHotels(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSortModelChange = React.useCallback(
    (sortModel: GridSortModel) => {
      setQueryOptions({ sortModel: [...sortModel] });
    },
    []
  );
  useMemo(async () => {
    try {
      const data = (
        await request.get(`/getHotelForParticularMember/${id}`, {
          params: {
            limit: paginationModel.pageSize || null,
            page: paginationModel.page,
            orderby: queryOptions?.sortModel[0]?.field || "_id",
            sortby: queryOptions?.sortModel[0]?.sort || "asc",
          },
        })
      ).data;
      setHotels(data);
    } catch (error) {
      console.log(error);
    }

    // const hotelsdata: any = data?.map((item: any, i: any) => {
    //   item.id = i + 1;
    //   return item;
    // });
  }, [paginationModel, id, queryOptions]);
  useMemo(() => {
    getMembers();
    console.log(members);
  }, [render]);

  const handleClick = async (data: any) => {
    setModalHotel(data);
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
  };
  const handleSwitch = async (e: any, value: any) => {
    // console.log(value._id);
    const id = value?._id;
    const checked = e.target.checked;
    const result = await request.put("/setHotelAvailability", { checked, id });
    if (result?.data) {
      enqueueSnackbar("Add to user view", {
        variant: "success",
        autoHideDuration: 1000,
      });
    } else {
      enqueueSnackbar("Removed from user view", {
        variant: "error",
        autoHideDuration: 1000,
      });
    }
  };

  useMemo(() => {
    if (expanded) {
      setShowHotels(false);
    }
  }, [expanded]);

  const columns: GridColDef[] = [
    {
      field: "hotelName",
      width: 270,
      // editable: true,
      renderHeader: () => (
        <div style={{ fontSize: "large " }}>
          <strong>
            <FormattedMessage defaultMessage="Hotel name" />
          </strong>
        </div>
      ),
    },
    {
      field: "city",
      width: 270,
      // editable: true,
      renderHeader: () => (
        <div style={{ fontSize: "large " }}>
          <strong>
            <FormattedMessage defaultMessage="City" />
          </strong>
        </div>
      ),
    },
    {
      field: "state",
      width: 270,
      // editable: true,
      renderHeader: () => (
        <div style={{ fontSize: "large " }}>
          <strong>
            <FormattedMessage defaultMessage="State" />
          </strong>
        </div>
      ),
    },
    {
      field: "ownerId",
      width: 270,
      // editable: true,
      renderHeader: () => (
        <div style={{ fontSize: "large " }}>
          <strong>
            <FormattedMessage defaultMessage="Owner Id" />
          </strong>
        </div>
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
                }}
              >
                View Details
              </Button>
            }
            label="view"
            sx={{
              color: "lightgray",
            }}
            onClick={() => {
              handleClick(value?.row);
            }}
          />,
          //Switch
          <GridActionsCellItem
            icon={
              <Tooltip title="Show on Site">
                {value?.row?.availability === "true" ? (
                  <Switch defaultChecked />
                ) : (
                  <Switch />
                )}
              </Tooltip>
            }
            label="view"
            sx={{
              color: "lightgray",
            }}
            onChange={(e: any) => handleSwitch(e, value?.row)}
          />,
        ];
      },
      renderHeader: () => <strong style={{ fontSize: "large" }}>Action</strong>,
    },
  ];

  return (
    <>
      {/* using accordion to display hotels of members  */}
      <Box>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: 35,
            color: "rgb(215, 0, 64)",
            fontFamily: "system-ui",
            mb: 3,
          }}
        >
          <FormattedMessage defaultMessage="Member Details-" />
          {/* Member Details- */}
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Typography fontSize={"large"} sx={{ ml: 4 }}>
            <strong>
              <FormattedMessage defaultMessage="Name" />
            </strong>
          </Typography>
          <Typography fontSize={"large"}>
            <strong>
              <FormattedMessage defaultMessage="Email" />
            </strong>
          </Typography>
          <Typography fontSize={"large"} sx={{ mr: 2 }}>
            <strong>
              <FormattedMessage defaultMessage="Phone Number" />
            </strong>
          </Typography>
        </Stack>
        {members?.map((item: any, i: any) => (
          <Accordion
            style={{
              boxShadow: "none",
              textAlign: "left",
              margin: 0,
              padding: 0,
              border: "1px solid lightgray",
            }}
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
          >
            <AccordionSummary
              style={{ fontWeight: "bold", fontSize: 17 }}
              expandIcon={<ExpandMoreIcon />}
              onClick={() => {
                getHotels(item?._id);
              }}
            >
              <>
                {/* <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  ml={-1}
                >
                  <Box m={1}>{item?.name}</Box>
                  <Box overflow={'auto'} m={1} >{item?.email}</Box>
                  <Box m={1}>{item?.phone}</Box>
                </Stack> */}
                <TableCell sx={{ border: "none", width: "100%" }}>
                  {item?.name}
                </TableCell>
                <TableCell sx={{ border: "none", width: "100%" }}>
                  {item?.email}
                </TableCell>
                <TableCell sx={{ border: "none", float: "right" }}>
                  {item?.phone}
                </TableCell>
              </>
            </AccordionSummary>
            {/* <Stack
              border={"1px solid  rgb(227, 242, 253)"}
              borderRadius={3}
              direction={"row"}
              padding={2}
              gap={2}
              m={2}
              bgcolor={"#F8F8F8"}
              sx={{
                "&:hover": {
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 0px 15px;",
                  // transition:
                  //   "box-shadow 300ms cubic-bezier(.4, 0, .2, 0.5) 0ms; ",
                },
                transition: "  box-shadow cubic-bezier(0.4, 0, 0.2, 1) 200ms  ",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  setItem(item);
                  setOpenDialog(true);
                }}
              >
                Edit
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  handleSupport();
                  setHotelOwner(item);
                }}
              >
                Support
              </Button>
              <Button variant="outlined" onClick={() => setShowHotels(true)}>
                View Hotels
              </Button>
            </Stack> */}
            <Actions
              setShowHotels={setShowHotels}
              members={members}
              item={item}
              setRender={setRender}
              modalHotel={modalHotel}
              open={open}
              setOpen={setOpen}
            />

            {/* <AccordionDetails sx={{ ml: 4, mt: -1 }}> </AccordionDetails> */}
            {showHotels && (
              <>
                <Typography
                  fontSize={"large"}
                  fontWeight={700}
                  textAlign={"center"}
                  mb={2}
                >
                  <FormattedMessage defaultMessage="Hotel lists" />
                </Typography>

                {/* server side sorting , pagination using data grid  */}

                <DataGrid
                  rows={hotels}
                  columns={columns}
                  getRowId={(row) => row._id}
                  disableColumnMenu
                  pageSizeOptions={[5, 10, 20]}
                  rowCount={length}
                  sx={{ ml: 5, mr: 5, mb: 5 }}
                  paginationModel={paginationModel}
                  paginationMode="server"
                  onPaginationModelChange={setPaginationModel}
                  sortingMode="server"
                  onSortModelChange={handleSortModelChange}
                />
              </>
            )}
          </Accordion>
        ))}

        {/* {open && (
          // view details button
          <ShowHotelsModal
            open={open}
            onClose={handleClose}
            modalHotel={modalHotel}
          />
        )}
        <LoginModal
          loginModal={loginModal}
          setLogInModal={setLogInModal}
          members={members}
          hotelOwner={hotelOwner}
        /> */}
      </Box>
      {/* <EditDialog
        open={openDialog}
        setOpen={setOpenDialog}
        item={item}
        setItem={setItem}
<<<<<<< Updated upstream
        setRender={setRender}
=======
>>>>>>> Stashed changes
      /> */}
    </>
  );
}
