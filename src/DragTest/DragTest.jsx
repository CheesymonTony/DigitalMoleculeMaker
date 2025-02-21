import MoleculeDisplayV2 from "../MoleculeDisplay/MoleculeDisplayV2";
import Dropzone from "../DropZone/DropZone";
import { useState, useRef } from "react";
import "./DragTest.css";

const DragTestPage = () => {
  const [dragZones, setDragZones] = useState({
    1: <Dropzone key="1" ref={useRef(null)} />,
    2: <Dropzone key="2" ref={useRef(null)} />,
    3: <Dropzone key="3" ref={useRef(null)} />,
  });

  return (
    <div className="drag-test">
      <div className="drag-zone-container">
        {Object.entries(dragZones).map(([key, zone], index) => zone)}
      </div>
      <MoleculeDisplayV2 dragZones={dragZones} />
    </div>
  );
};

export default DragTestPage;
