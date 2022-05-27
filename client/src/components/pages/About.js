import React from "react";
import Uploady from "@rpldy/uploady";
import { getMockSenderEnhancer } from "@rpldy/mock-sender";
import UploadDropZone from "@rpldy/upload-drop-zone";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";

const mockSenderEnhancer = getMockSenderEnhancer();

const About = () => {
  return (
    <Uploady
      destination={{ url: "[upload-url]" }}
      enhancer={mockSenderEnhancer}
    >
      <div className="App">
        <h1>Hello React Uploady</h1>
        <UploadButton>Upload Files</UploadButton>
          <UploadPreview />
      </div>
    </Uploady>
//     <Uploady destination={{ url: "[upload-url]" }}>
//     <UploadDropZone onDragOverClassName="drag-over"
//                     grouped
//                     maxGroupSize={3}
//     >
//         <span>DragDrop File(s) Here</span>            
//     </UploadDropZone>
// </Uploady>
  );
};

export default About;
