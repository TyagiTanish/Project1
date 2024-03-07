import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { pickersLayoutClasses } from "@mui/x-date-pickers/PickersLayout";

const current = new Date();
const date = `${current.getDate()}-${
  current.getMonth() + 1
}-${current.getFullYear()}`;

export default function ResponsiveDateRangePickers() {
  const data = localStorage.getItem("Date");

  const [startdate, setStartDate] = React.useState<any>(
    data !== null ? dayjs(JSON.parse(data).startDate) : dayjs(Date.now())
  );
  const [enddate, setEndDate] = React.useState<any>(
    data !== null
      ? dayjs(JSON.parse(data).endDate)
      : dayjs(Date.now() + 3600 * 1000 * 24)
  );

  React.useMemo(() => {
    if (data) {
      setStartDate(dayjs(JSON.parse(data).startDate));
      setEndDate(dayjs(JSON.parse(data).endDate));
    } else {
      setStartDate(dayjs(Date.now()));
      setEndDate(dayjs(Date.now()));
    }
  }, [data]);
  // const handleChange = () => {
  //   if (enddate) {
  //     const data: any = { startDate: startdate, endDate: enddate };
  //     localStorage.setItem("Date", JSON.stringify(data));
  //   } else {
  //     const data: any = {
  //       startDate: dayjs(Date.now()),
  //       endDate: dayjs(Date.now() + 3600 * 1000 * 24),
  //     };
  //     localStorage.setItem("Date", JSON.stringify(data));
  //   }
  // };
  // React.useEffect(() => {
  //   if (enddate) {
  //     const data: any = { startDate: startdate, endDate: enddate };
  //     localStorage.setItem("Date", JSON.stringify(data));
  //   } else {
  //     const data: any = {
  //       startDate: dayjs(Date.now()),
  //       endDate: dayjs(Date.now() + 3600 * 1000 * 24),
  //     };
  //     localStorage.setItem("Date", JSON.stringify(data));
  //   }
  // }, [startdate, enddate]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["SingleInputDateRangeField"]}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          name="allowedRange"
          defaultValue={[startdate, enddate]}
          sx={{
            [`.${pickersLayoutClasses.contentWrapper}`]: {
              alignItems: "center",
            },
            bgcolor: "white",
            border: "none",
          }}
          onChange={(e: any) => {
            setStartDate(e[0].$d);
            if (e[1]) {
              setEndDate(e[1].$d);
            } else {
              setEndDate(null);
            }
            // handleChange();
          }}
          minDate={dayjs(new Date())}
          format="ddd,DD-MMMM"
          onClose={() => {
            if (enddate) {
              const data: any = { startDate: startdate, endDate: enddate };
              localStorage.setItem("Date", JSON.stringify(data));
            } else {
              const data: any = {
                startDate: dayjs(Date.now()),
                endDate: dayjs(Date.now() + 3600 * 1000 * 24),
              };
              localStorage.setItem("Date", JSON.stringify(data));
            }
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
