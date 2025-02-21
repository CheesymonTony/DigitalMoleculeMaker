import React, { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import Draggable from "./Draggable";

// /* The implementation details of <Item> and <ScrollableList> are not
//  * relevant for this example and are therefore omitted. */

function App() {
  const [activeID, setActiveID] = useState(null);

  const handleDragStart = ({ active }) => {
    console.log("Dragging started", active.id);
    setActiveID(active.id);
  };

  const handleDragEnd = ({ active, over }) => {
    console.log("Dragging ended", active.id, "dropped on", over?.id);
    setActiveID(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <h1 style={{ color: "black" }}>Drag Test</h1>
    </DndContext>
  );
}

export default App;
