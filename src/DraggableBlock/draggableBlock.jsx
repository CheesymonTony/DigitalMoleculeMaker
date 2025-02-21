import "./draggableBlock.css";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const DraggableBlock = ({ id, color, text, hidden }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
    opacity: hidden ? "0%" : "b100%",
  };

  return (
    <div
      className="draggable-block"
      ref={setNodeRef}
      style={{ ...style, backgroundColor: color }}
      {...attributes}
      {...listeners}
    >
      <strong>{text}</strong>
    </div>
  );
};

export default DraggableBlock;
