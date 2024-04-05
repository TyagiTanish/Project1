import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { CustomDashboard } from "./DashboardContext";

const DashBoardDialogBox = ({
  customDashboard,
  setCustomDashboard,
  item,
  setItem,
}: any) => {
  const handleClose = () => {
    setCustomDashboard(false);
  };

  return (
    <Dialog
      open={customDashboard}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"xl"}
    >
      <DialogContent sx={{ height: "60vh", p: 6 }}>
        <CustomDashboard item={item} setItems={setItem} />
      </DialogContent>
    </Dialog>
  );
};

export default DashBoardDialogBox;
