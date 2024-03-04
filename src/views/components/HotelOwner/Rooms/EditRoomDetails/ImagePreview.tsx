import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
export default function ImagePreview({
  imagePreView,
  setImagePreView,
  room,
  previewIndex,
}: any) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setImagePreView(false);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={imagePreView}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"md"}
    >
      <DialogTitle>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" width={400} overflow={"hidden"}>
            {room?.photos[previewIndex]?.filename}
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <Box
          component={"img"}
          width={450}
          src={`http://localhost:8000/${room.photos[previewIndex]?.path}`}
        />
      </DialogContent>
    </Dialog>
  );
}
