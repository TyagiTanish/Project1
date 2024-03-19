import { Box } from "@mui/material";
import { useState } from "react";

// Importing core components
import QuillEditor from "react-quill";

// Importing styles

import "react-quill/dist/quill.snow.css";

const AddDiscription = ({ setContent, content ,addHotel}: any) => {
  // Editor state
  //   const [value, setValue] = useState();

  return (
    <Box width={addHotel ? 360 : 400}>
      <QuillEditor
        theme="snow"
        value={content}
        onChange={(value:any) => {
          setContent(value);
          //   console.log(content);
        }}

      />
    </Box>
  );
};

export default AddDiscription;
