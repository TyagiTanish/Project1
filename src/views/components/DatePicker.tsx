// import * as React from "react";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
// import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import dayjs from "dayjs";

// export default function SingleInputDateRangePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={["SingleInputDateRangeField"]}>
//         <DateRangePicker
//           slots={{ field: SingleInputDateRangeField }}
//           sx={{ bgcolor: "white" }}
//           name="allowedRange"
//           defaultValue={[dayjs(Date.now()), dayjs(Date.now()+1)]}
         
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';

const current = new Date();
  const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;
console.log(typeof date);

export default function ResponsiveDateRangePickers() {
  return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer
      components={[
        'DateRangePicker',
        'MobileDateRangePicker',
        'DesktopDateRangePicker',
        'StaticDateRangePicker',
      ]}
    >
      
     
    
      <DemoItem label="Static variant" component="StaticDateRangePicker">
        <StaticDateRangePicker
          defaultValue={[dayjs(date), dayjs(date)]}
          sx={{
            [`.${pickersLayoutClasses.contentWrapper}`]: {
              alignItems: 'center',
            },
          }}
          onChange={(e)=>{
                console.log(e)
          }}
          minDate={dayjs(new Date())}
          
        />
      </DemoItem>
    </DemoContainer>
  </LocalizationProvider>
   
  );
}