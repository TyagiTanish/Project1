import React, { useEffect, useState } from "react";

const PdfViewerFromBuffer = ({ pdfBuffer }: any) => {
  return (
    <div>
      {pdfBuffer && (
        <iframe
          title="PDF Viewer"
          src={
            URL.createObjectURL(
              new Blob([pdfBuffer], { type: "application/pdf" })
            ) + "#zoom=64"
          }
          style={{ width: "100%", height: "70vh" }}
        />
      )}
    </div>
  );
};

export default PdfViewerFromBuffer;
