import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  PopperPlacementType,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
import { useSelector } from "react-redux";
import ReminderDetail from "./ReminderDetailPopper";
import ReminderDetailPopper from "./ReminderDetailPopper";
import { FormattedMessage } from "react-intl";

const Remainder = () => {
  const { request } = useAuth();
  const [value, setValue] = useState();
  const user = useSelector((state: any) => state.userReducer.user);
  const [reminders, setReminders] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const getReminders = async () => {
    const reminders = await request.get("/getReminders", {
      params: {
        ownerId: user?._id,
      },
    });

    setReminders(reminders.data);
  };

  useEffect(() => {
    getReminders();
  }, []);

  return (
    <>
      <Card sx={{ maxWidth: 600, minHeight: 500 }} variant="outlined">
        <CardContent>
          <Stack>
            <Typography sx={{ fontSize: "30px" }}>
              <FormattedMessage defaultMessage="Reminder" />
            </Typography>
            <Divider />
          </Stack>
          <Stack gap={2} mt={2}>
            {reminders?.map((value, index: any) => (
              <Card variant="outlined" sx={{ padding: 1 }}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    <FiberManualRecordIcon fontSize="small" color="success" />
                    <FormattedMessage defaultMessage="There is a booking today" />
                  </Stack>
                  <Button
                    variant="text"
                    onClick={(e) => {
                      setValue(value);
                      handleClick(e);
                    }}
                  >
                    <FormattedMessage defaultMessage="view details" />
                  </Button>
                </Stack>
              </Card>
            ))}
          </Stack>
          {/* <ReminderDetailPopper open={open} anchorEl={anchorEl} value={value} /> */}
        </CardContent>
      </Card>
    </>
  );
};

export default Remainder;
