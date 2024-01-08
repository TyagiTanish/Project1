import { Box } from "@mui/material";
import { useState } from "react";

// Importing core components
import QuillEditor from "react-quill";

// Importing styles

import "react-quill/dist/quill.snow.css";

const Editor = ({room}:any) => {
  // Editor state
  const [value, setValue] = useState(room?.description);

  return (
    <Box>
    
      <QuillEditor
        theme="snow"
        value={value}
        onChange={(value) => setValue(value)}
      />
    </Box>
  );
};

export default Editor;
