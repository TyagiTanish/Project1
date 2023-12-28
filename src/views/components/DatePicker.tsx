import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { format, parseISO } from "date-fns";

export default function SingleInputDateRangePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["SingleInputDateRangeField"]}
        sx={{ bgcolor: "white", padding: 0, mt: 2 }}
      >
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          defaultValue={[dayjs(Date.now()), dayjs(Date.now())]}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
