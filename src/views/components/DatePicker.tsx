
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer} from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { pickersLayoutClasses } from "@mui/x-date-pickers/PickersLayout";


const current = new Date();
const date = `${current.getDate()}-${
  current.getMonth() + 1
}-${current.getFullYear()}`;
console.log(typeof date);

export default function ResponsiveDateRangePickers() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["SingleInputDateRangeField"]}> 
          <DateRangePicker 
          slots={{ field: SingleInputDateRangeField }}
          name="allowedRange"
          defaultValue={[dayjs(Date.now()), dayjs(Date.now())]}
            sx={{
              [`.${pickersLayoutClasses.contentWrapper}`]: {
                alignItems: "center",
              },
              bgcolor:'white',
              border:'none'
            }}
            onChange={(e: any) => {
              console.log(e);
            }}
            minDate={dayjs(new Date())}
          />
      </DemoContainer>
    </LocalizationProvider>
  );
}
