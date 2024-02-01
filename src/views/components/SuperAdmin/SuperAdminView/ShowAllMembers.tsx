import React, { useEffect, useMemo } from "react";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import ShowHotelsModal from "./ShowHotelsModal";

export default function ShowAllMembers() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [open, setOpen] = React.useState(false);
  const [hotels, setHotels] = React.useState<any>([]);
  const [modalHotel, setModalHotel] = React.useState<any>([]);
  const { request } = useAuth();
  const [members, setMembers] = React.useState<any>([]);
  const getMembers = async () => {
    const data: any = await request.get("/getAllMembers");
    setMembers(data?.data);
    // console.log(members);
  };
  const getHotels = async (id: any) => {
    const data = await request.get(`/getHotelForParticularMember/${id}`);
    // console.log(data.data);
    const hotelsdata: any = data?.data.map((item: any, i: any) => {
      item.id = i + 1;
      return item;
    });
    setHotels(hotelsdata);
  };
  useMemo(() => {}, [hotels]);
  useEffect(() => {
    getMembers();
  }, []);

  const handleClick = async (data: any) => {
    // const data = await request.delete(`/bookingDelete/${id}`);
    setModalHotel(data);
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
  };

  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID", width: 90 },
    {
      field: "hotelName",
      width: 270,
      // editable: true,
      renderHeader: () => (
        <div style={{ fontSize: "large " }}>
          <strong>Hotel name</strong>
        </div>
      ),
    },
    {
      field: "city",
      width: 270,
      // editable: true,
      renderHeader: () => (
        <div style={{ fontSize: "large " }}>
          <strong>City</strong>
        </div>
      ),
    },
    {
      field: "state",
      width: 270,
      // editable: true,
      renderHeader: () => (
        <div style={{ fontSize: "large " }}>
          <strong>State</strong>
        </div>
      ),
    },
    {
      field: "ownerId",
      width: 270,
      // editable: true,
      renderHeader: () => (
        <div style={{ fontSize: "large " }}>
          <strong>Owner Id</strong>
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
        ];
      },
      renderHeader: () => <strong style={{ fontSize: "large" }}>Action</strong>,
    },
  ];

  return (
    <>
      <Typography
        fontSize={"large"}
        fontWeight={700}
        textAlign={"center"}
        mb={2}
      >
        Member List
      </Typography>
      <Stack direction={"row"} justifyContent={"space-between"} width={"91%"}>
        <Typography fontSize={"large"}>
          <strong>Name</strong>
        </Typography>
        <Typography fontSize={"large"}>
          <strong>Email</strong>
        </Typography>
        <Typography fontSize={"large"}>
          <strong>Phone Number</strong>
        </Typography>
      </Stack>
      {members?.map((item: any, i: any) => (
        <Accordion
          style={{
            boxShadow: "none",
            textAlign: "left",
            margin: 0,
            padding: 0,
            // border: "none",
            border: "1px solid lightgray",
            // marginBottom: 20,
            width: "95%",
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
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                width={"100%"}
                ml={-1}
              >
                <Typography>{item?.name}</Typography>
                <Typography>{item?.email}</Typography>
                <Typography>{item?.phone}</Typography>
              </Stack>
            </>
          </AccordionSummary>
          <AccordionDetails sx={{ ml: 4, mt: -1 }}></AccordionDetails>
          <Typography
            fontSize={"large"}
            fontWeight={700}
            textAlign={"center"}
            mb={2}
          >
            Hotel lists
          </Typography>
          <DataGrid
            rows={hotels}
            columns={columns}
            sx={{ ml: 5, mr: 5, mb: 5 }}
          />
        </Accordion>
      ))}

      {open && (
        <ShowHotelsModal
          open={open}
          onClose={handleClose}
          modalHotel={modalHotel}
        />
      )}
    </>
  );
}

