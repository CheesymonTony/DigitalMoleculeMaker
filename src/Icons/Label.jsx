import React, { useRef, useState, useEffect } from "react";

const RangeLabel = ({
  number = 5.5,
  padding = 20,
  size = 20,
  backgroundColor = "black",
  style = {},
}) => {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(size); // Default width

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth + padding * (size / 30)); // Scale padding dynamically
    }
  }, [number, padding, size]);

  return (
    <div
      className="label-container"
      style={{
        position: "absolute",
        width: `${textWidth}px`,
        height: `${size}px`, // Scale height
        borderRadius: `${size / 7}px`, // Scale border radius
        backgroundColor: backgroundColor,
        ...style,
      }}
    >
      {/* Hidden text for measuring width */}
      <span
        ref={textRef}
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          fontSize: `${size / 2}px`, // Scale font size
          fontFamily: "Arial, sans-serif",
        }}
      >
        {number}
      </span>

      {/* Small rotated arrow */}
      <div
        style={{
          position: "absolute",
          top: `${size / 10}px`, // Scale position
          transform: "translate(-50%, -50%) rotate(45deg)",
          width: `${size / 2.5}px`, // Scale width
          height: `${size / 2.5}px`, // Scale height
          backgroundColor: backgroundColor,
          borderRadius: `${size / 15}px`,
          left: "50%",
        }}
      ></div>

      {/* Display number */}
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "black",
          fontSize: `${size / 1.5}px`, // Scale font size
          overflow: "visible",
        }}
      >
        {number}
      </p>
    </div>
  );
};

export default RangeLabel;
