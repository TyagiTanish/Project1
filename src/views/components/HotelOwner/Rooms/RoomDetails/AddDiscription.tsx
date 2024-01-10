import { Box } from "@mui/material";
import { useState } from "react";

// Importing core components
import QuillEditor from "react-quill";

// Importing styles

import "react-quill/dist/quill.snow.css";

const AddDiscription = ({ setContent, content }: any) => {
  // Editor state
  //   const [value, setValue] = useState();

  return (
    <Box width={400} >
      <QuillEditor
        theme="snow"
        value={content}
        onChange={(value) => {
          setContent(value);
          //   console.log(content);
        }}

      />
    </Box>
  );
};

export default AddDiscription;
