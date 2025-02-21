import MoleculeDisplayV2 from "../MoleculeDisplay/MoleculeDisplayV2";
import DraggableBlock from "../DraggableBlock/draggableBlock";
import { useState, useRef } from "react";
import "./DragTest.css";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import DropZoneV2 from "../DropZone/DropZoneV2";
import { SortableContext } from "@dnd-kit/sortable";

const DragTestPage = () => {
  const [activeDraggable, setActiveDraggable] = useState(null);

  const dropZones = useRef([
    {
      id: "drop-zone-1",
      label: "drop-zone-1",
      color: "#E0B0FF",
      accepts: "purple",
      currentItem: null,
    },
    {
      id: "drop-zone-2",
      label: "drop-zone-2",
      color: "#a0da38",
      accepts: "green",
      currentItem: null,
    },
    {
      id: "drop-zone-3",
      label: "drop-zone-3",
      color: "#3890da",
      accepts: "blue",
      currentItem: null,
    },
  ]);

  const [draggables, setDraggables] = useState([
    {
      id: "draggable-block-1",
      label: "draggable-block-1",
      parent: "drag-zone",
      color: "purple",
      text: "C6H12",
    },
    {
      id: "draggable-block-2",
      label: "draggable-block-2",
      parent: "drag-zone",
      color: "purple",
      text: "H2O",
    },
    {
      id: "draggable-block-3",
      label: "draggable-block-3",
      parent: "drag-zone",
      color: "green",
      text: "O2",
    },
    {
      id: "draggable-block-4",
      label: "draggable-block-4",
      parent: "drag-zone",
      color: "green",
      text: "CO2",
    },
    {
      id: "draggable-block-5",
      label: "draggable-block-5",
      parent: "drag-zone",
      color: "blue",
      text: "ATP",
    },
    {
      id: "draggable-block-6",
      label: "draggable-block-6",
      parent: "drag-zone",
      color: "blue",
      text: "ADP",
    },
  ]);

  function handleDragStart(event) {
    setActiveDraggable(event.active.id);
  }

  function handleDragEnd(event) {
    // setup variables for what is being dragged and what it is being dragged over
    const { active, over } = event;
    setActiveDraggable(null);

    setDraggables((prev) =>
      // map over all of the draggable items
      prev.map((draggable) => {
        // if the iteration of the loop is the active draggable item
        if (draggable.id === active.id) {
          //first we need to determine the dropzone that the draggable is over
          const dropZone = dropZones.current.find(
            // we do that by finding the dropzone that has the same id as the over object
            (zone) => zone.id === over?.id
          ); // now that is stored in the dropZone variable

          //next we need to check if the dropzone has a currentItem
          // if it does, we need to find the draggable item that has the same id as the currentItem
          // and set the parent to drag-zone and the currentItem to null
          if (dropZone.currentItem) {
            const currentItem = prev.find(
              (item) => item.id === dropZone.currentItem.id
            );
            currentItem.parent = "drag-zone";
            currentItem.currentItem = null;
          }

          // next we need to check if the dropzone accepts the draggable item
          // if it does, we set the parent to the dropzone id and the currentItem to the draggable item
          if (dropZone && dropZone.accepts === draggable.color) {
            dropZone.currentItem = draggable;
            // if the dropzone accepts the draggable item, we return the draggable item with the parent set to the dropzone id
            return {
              ...draggable,
              parent: over.id,
              currentItem: draggable,
            };
          }
          return { ...draggable, parent: "drag-zone" };
        }
        return draggable;
      })
    );
  }

  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <SortableContext items={draggables.map((d) => d.id)}>
        <div className="drag-test">
          <div className="drag-zone">
            {draggables
              .filter((draggable) => draggable.parent === "drag-zone")
              .map((draggable) =>
                draggable.id === activeDraggable ? (
                  <DraggableBlock
                    key={draggable.id}
                    id={draggable.id}
                    color={draggable.color}
                    text={draggable.text}
                    isDragging={activeDraggable === draggable.id}
                    hidden={true}
                  />
                ) : (
                  <DraggableBlock
                    key={draggable.id}
                    id={draggable.id}
                    color={draggable.color}
                    text={draggable.text}
                    isDragging={activeDraggable === draggable.id}
                    hidden={false}
                  />
                )
              )}
          </div>
          <div className="drop-zone-container">
            {dropZones.current.map((zone) => (
              <DropZoneV2 key={zone.id} id={zone.id} color={zone.color}>
                {draggables.map((draggable) =>
                  draggable.parent === zone.id ? (
                    <DraggableBlock
                      key={draggable.id}
                      id={draggable.id}
                      color={draggable.color}
                      text={draggable.text}
                      isDragging={activeDraggable === draggable.id}
                    />
                  ) : null
                )}
              </DropZoneV2>
            ))}
          </div>
          <DragOverlay>
            {activeDraggable ? (
              <DraggableBlock
                id={activeDraggable}
                color={draggables.find((d) => d.id === activeDraggable)?.color}
                text={draggables.find((d) => d.id === activeDraggable)?.text}
              />
            ) : null}
          </DragOverlay>
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default DragTestPage;
