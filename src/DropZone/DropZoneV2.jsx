import "./DropZoneV2.css";
import { useDroppable } from "@dnd-kit/core";

const DropZoneV2 = ({ children, id, color }) => {
  const { isOver, setNodeRef } = useDroppable({
    accepts: "none",
    id,
  });

  return (
    <div
      className="dropzoneV2"
      ref={setNodeRef}
      style={{
        backgroundColor: isOver ? `${color}7c` : color,
      }}
    >
      {children}
    </div>
  );
};

export default DropZoneV2;
