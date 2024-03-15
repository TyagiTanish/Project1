import { Button, Stack } from "@mui/material";
import React, { useState } from "react";
import LoginModal from "./LoginModal";
import ShowHotelsModal from "./ShowHotelsModal";
import EditDialog from "../../EditDialog";

const Actions = ({
  setShowHotels,
  members,
  item,
  setRender,
  modalHotel,
  open,
  setOpen,
}: any) => {
  const [loginModal, setLogInModal] = useState(false);
  const [hotelOwner, setHotelOwner] = useState();
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleSupport = () => {
    setLogInModal(true);
    setShowHotels(false);
  };
  const handleClose = (value: string) => {
    setOpen(false);
  };

  return (
    <>
      <Stack
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
      </Stack>
      {open && (
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
      />
      <EditDialog
        open={openDialog}
        setOpen={setOpenDialog}
        item={item}
        setRender={setRender}
      />
    </>
  );
};

export default Actions;
