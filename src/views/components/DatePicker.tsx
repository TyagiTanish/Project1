import * as React from "react";
<<<<<<< Updated upstream
import { addDays, format } from "date-fns";
=======
<<<<<<< Updated upstream
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
>>>>>>> Stashed changes
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import dayjs from "dayjs";
import { Button, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { date } from "./redux/user/userSlice";


export default function BasicRangeShortcuts({ setDates, onClose }: any) {

  const dispatch = useDispatch();
  const [storeDate, setStoreDate] = React.useState<any>("");
  const handleDate = (e: any) => {
    if (e?.[0]?.$d && e?.[1]?.$d) {
      const start = format(new Date(e?.[0]?.$d), "eee,dd MMMM");
      const end = format(new Date(e?.[1]?.$d), "eee,dd MMMM");
      setStoreDate(`${start}  -  ${end}`);
    } else if (e?.[0]?.$d && !e?.[1]) {
      const startDate = new Date(e?.[0]?.$d);
      const start = format(new Date(e?.[0]?.$d), "eee,dd MMMM");
     
     const date=addDays(startDate, 1);
     
      var end=""
      if (date) {
        end = format(new Date(date?.toString()), "eee,dd MMMM");
      }

      setStoreDate(`${start}  -  ${end}`);
    }
<<<<<<< Updated upstream
    console.log(e?.[0]?.$d,e?.[1]?.$d)
=======
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
=======
import { addDays, format, isBefore, isSameDay } from "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import dayjs, { Dayjs } from "dayjs";
import { Button, FormHelperText, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { date } from "./redux/user/userSlice";

export default function BasicRangeShortcuts({ setDates, onClose }: any) {
  const dispatch = useDispatch();
  const [storeDate, setStoreDate] = React.useState<any>("");
  const [disabled, setDisabled] = React.useState({
    status: false,
    message: "",
  });

  const handleDate = (e: any) => {
    // const a = e?.[0]?.$d;
    if (String(e?.[0]?.$d) === String(e?.[1]?.$d)) {
      setDisabled({
        status: true,
        message: "check-In date and check-out date should not be same ",
      });
    } else {
      setDisabled({
        status: false,
        message: "",
      });
    }
    if (e?.[0]?.$d && e?.[1]?.$d) {
      const start = format(new Date(e?.[0]?.$d), "eee,dd MMMM");
      const end = format(new Date(e?.[1]?.$d), "eee,dd MMMM");
      if (start !== end) {
        setStoreDate(`${start}  -  ${end}`);
      }
    } else if (e?.[0]?.$d && !e?.[1]) {
      const startDate = new Date(e?.[0]?.$d);
      const start = format(new Date(e?.[0]?.$d), "eee,dd MMMM");

      const date = addDays(startDate, 1);

      var end = "";
      if (date) {
        end = format(new Date(date?.toString()), "eee,dd MMMM");
      }
      setStoreDate(`${start}  -  ${end}`);
    }
>>>>>>> Stashed changes
  };
  const handleClick = () => {
    onClose();
    setDates(storeDate);
<<<<<<< Updated upstream
    if(storeDate) {
      dispatch(date(storeDate))
    }
 
  };
  return (
    <>
      {" "}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateRangePicker
=======
    if (storeDate) {
      dispatch(date(storeDate));
    }
  };

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          onChange={(e: any) => {
            setStartDate(e[0].$d);
            if (e[1]) {
              setEndDate(e[1].$d);
            } else {
              setEndDate(null);
            }
            // handleChange();
          }}
>>>>>>> Stashed changes
          minDate={dayjs(new Date())}
          slotProps={{
            actionBar: { actions: [] },
          }}
          calendars={1}
          onChange={(e: any) => {
            handleDate(e);
          }}
        />
<<<<<<< Updated upstream
=======
      </DemoContainer>
    </LocalizationProvider>
=======
          calendars={1}
          onChange={(e: any) => handleDate(e)}
        />
>>>>>>> Stashed changes
      </LocalizationProvider>
      <Stack direction={"row"} sx={{ float: "right", m: 1 }} spacing={1}>
        {" "}
        <Button onClick={onClose}>Cancel</Button>
<<<<<<< Updated upstream
        <Button onClick={handleClick} variant="contained">
=======
        <Button
          onClick={handleClick}
          variant="contained"
          disabled={disabled.status}
        >
>>>>>>> Stashed changes
          Ok
        </Button>
      </Stack>
    </>
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
  );
}
