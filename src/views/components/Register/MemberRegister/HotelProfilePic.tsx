import React from "react";
import Dropzone from "react-dropzone";
import Button from "@mui/material/Button";

// class App extends Component {
const ProfilePic = ({ setPic, formData }: any) => {
  const [file, setFile] = React.useState("");

  const updatedata = async () => {
    if (file) {
      //   const data = await request.post("/upload", formData);
      //   console.log(data);
    }


    setPic(file);
  };
  const onDrop = (acceptedFiles: any) => {
    setFile(acceptedFiles);
  };
  //   render() {
  return (
    <>
      <div className="text-center mt-5" style={{ display: "flex" }}>
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }: any) => (
            <div {...getRootProps()}>
              {/* <input {...getInputProps()} />
              Click me... */}
              <Button onClick={getInputProps}>Upload Profile pic</Button>
            </div>
          )}
        </Dropzone>
        <Button variant="contained" onClick={updatedata}>
          Upload
        </Button>
      </div>
    </>
  );
  //   }
};
export default ProfilePic;
