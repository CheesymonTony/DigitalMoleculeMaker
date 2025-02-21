import React from "react";
import { useState, useEffect, useRef } from "react";
import placementImage from "../assets/UpdatedImages/PurpleBlock.svg";
import "./MoleculeDisplay.css";
import "../App.css";
import { use } from "react";

const MoleculeDisplayV2 = ({ dragZones }) => {
  const isDragging = useRef(false);
  const imageRef = useRef(null);
  const dropZoneRef = useRef(false);
  const blockOriginRef = useRef({ x: 0, y: 0 });

  function handleMouseDown(e) {
    e.preventDefault();
    if (imageRef.current) {
      imageRef.current.style.position = "absolute";
    }

    const rect = imageRef.current.getBoundingClientRect();
    blockOriginRef.current = { x: rect.left, y: rect.top };

    const style = window.getComputedStyle(imageRef.current);
    const marginLeft = parseFloat(style.marginLeft);
    const marginTop = parseFloat(style.marginTop);
    const offsetX = e.clientX - (rect.left - marginLeft);
    const offsetY = e.clientY - (rect.top - marginTop);

    imageRef.current.dataset.offsetX = offsetX;
    imageRef.current.dataset.offsetY = offsetY;

    isDragging.current = true;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(e) {
    if (!isDragging.current || !imageRef.current) return;
    const offsetX = imageRef.current.dataset.offsetX;
    const offsetY = imageRef.current.dataset.offsetY;

    if (imageRef.current) {
      imageRef.current.style.left = `${e.clientX - offsetX}px`;
      imageRef.current.style.top = `${e.clientY - offsetY}px`;
    }

    // console.log("Mouse Position: ", mousePosition);
  }

  function handleMouseUp(e) {
    // if (!dropZoneRef.current) {
    //   console.log("Item not dropped in dropzone");
    // }
    const offsetX = imageRef.current.dataset.offsetX;
    const offsetY = imageRef.current.dataset.offsetY;
    for (const [key, value] of Object.entries(dragZones)) {
      console.log("Key: ", key);
      console.log("Value: ", value);

      const blockRect = value.ref.current.getBoundingClientRect();
      console.log("Block Rect: ", blockRect);
      console.log("Mouse Position: ", e.clientX, e.clientY);
      const dropPositionX = e.clientX - offsetX;
      const dropPositionY = e.clientY - offsetY;
      console.log("Drop Position: ", dropPositionX, dropPositionY);

      if (dropPositionX >= blockRect.left) console.log("success");
      // if (
      //   dropPositionX >= blockRect.left &&
      //   dropPositionX <= blockRect.right &&
      //   dropPositionY >= blockRect.top &&
      //   dropPositionY <= blockRect.bottom
      // ) {
      //   console.log("Item dropped in dropzone");
      //   dropZoneRef.current = true;
      //   break;
      // }
    }

    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  return (
    <div
      className="molecule-display-container"
      ref={imageRef}
      onMouseDown={handleMouseDown}
    >
      <div className="molecule-display-body">
        <img src={placementImage} alt={"image"} />
      </div>
      <div className="molecule-display-footer">
        <strong className="formula-header">
          C<sub>8</sub>H<sub>6</sub>
        </strong>
        <p className="molecule-properties">Lambda Max Shift (nm): 70</p>
      </div>
    </div>
  );
};

export default MoleculeDisplayV2;
