import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import PlaceIcon from "@mui/icons-material/Place";
import { useIntl, FormattedMessage } from "react-intl";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props: any) {
  const handleClose = () => onClose(false);
  const { onClose, open, modalHotel } = props;
  console.log(modalHotel);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Button
            sx={{ float: "right", mt: -2, color: "black" }}
            onClick={handleClose}
          >
            <CloseIcon fontSize="medium" />
          </Button>

          <Stack direction={"row"} spacing={10} mb={3}>
            <img
              src={`http://localhost:8000/${modalHotel?.photo}`}
              width={250}
            />
            {/* <Divider
              orientation="vertical"
              flexItem
              sx={{ borderRightWidth: 3 }}
            /> */}
            <Box>
              <Typography sx={{ fontWeight: 800, fontSize: "25px" }}>
                {modalHotel?.hotelName}
              </Typography>
              <Stack direction={"row"} mt={3}>
                <PlaceIcon />
                <Typography>
                  {`${modalHotel?.city}-${modalHotel?.pinCode}, ${modalHotel?.state}, ${modalHotel?.country}`}
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Divider sx={{ borderBottomWidth: 2, mb: 3 }} />
          <Typography sx={{ fontWeight: 800, fontSize: "large" }}>
            <FormattedMessage defaultMessage="Hotel's Discription" />
          </Typography>
          <Box
            sx={{
              pl: { sm: 3, lg: 4 },
              pr: { sm: 3, lg: 4 },
              pb: { sm: 3, lg: 4 },
              textAlign: "justify",
              fontSize: { sm: 10, lg: 17, md: 14 },
              lineHeight: { sm: 1.3, lg: 2, md: 1.5 },
              overflow: "hidden",
            }}
          >
            <Box
              dangerouslySetInnerHTML={{ __html: modalHotel?.discription }}
              sx={{ flex: 1 }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
