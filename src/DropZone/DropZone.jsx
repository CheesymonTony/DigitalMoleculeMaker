import "./DropZone.css";
import { forwardRef } from "react";

const DropZone = forwardRef((props, ref) => {
  return (
    <div className="dropzone" ref={ref}>
      <p className="drop-title">Drop your files here</p>
    </div>
  );
});

export default DropZone;
