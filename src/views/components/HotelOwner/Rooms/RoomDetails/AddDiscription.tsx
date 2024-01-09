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
    <Box>
      <QuillEditor
        theme="snow"
        value={content}
        onChange={(value) => {
          setContent(value);
          //   console.log(content);
        }}
        style={{ width: "80%" }}
      />
    </Box>
  );
};

export default AddDiscription;
