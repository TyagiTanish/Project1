import { Box } from "@mui/material";
import { useState } from "react";

// Importing core components
import QuillEditor from "react-quill";

// Importing styles

import "react-quill/dist/quill.snow.css";

const Editor = ({room,setDescription}:any) => {
  // Editor state
  const [value, setValue] = useState(room?.discription);

  return (
    <Box width={500} >
      <QuillEditor
        theme="snow"
        value={value}
        onChange={(value) => {setValue(value);setDescription(value)}}
      />
    </Box>
  );
};

export default Editor;
