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
export default function ChangedImagePreview({changedImagePreview,setChangedImagePreView,changedPhoto,ChangedImageIndex}:any){
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setChangedImagePreView(false);
  };
// console.log(changedPhoto[ChangedImageIndex]);


  return (
    <Dialog
      fullScreen={fullScreen}
      open={changedImagePreview}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={"md"}
    >
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={'center'}  >
          <Typography variant="h6" width={400} overflow={"hidden"}   >{changedPhoto[ChangedImageIndex]?.preview}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <Divider/>
      <DialogContent>
        <Box
          component={"img"}
          width={450}
          src={changedPhoto[ChangedImageIndex]?.preview}
        />
      </DialogContent>
    </Dialog>
  );
}
