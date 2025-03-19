import React, { useState } from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const marks = [
  { value: 2, label: "2" },
  { value: 8, label: "8" },
];

const OptimalSlider = styled(Slider)(() => ({
  color: "green", // Customize slider color
  "& .MuiSlider-thumb": {
    width: 8,
    height: 18,
    backgroundColor: "white",
    borderRadius: "0px",
    border: "1px solid green",
    "& .optimal-bar": {
      height: 10,
      width: 1,
      backgroundColor: "green   ",
      marginLeft: 1,
      marginRight: 1,
    },
    "&:hover": {
      boxShadow: "0px 0px 0px 3px   rgba(0, 128, 0, 0.2)",
    },
    "&.Mui-focusVisible": {
      boxShadow: "0px 0px 0px 3px   rgba(0, 128, 0, 0.2)", // Bigger glow when active
    },
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    backgroundColor: "orange",
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 10,
    background: "unset",
    padding: 0,
    width: 24,
    height: 20,
    // borderRadius: "50% 50% 50% 0",
    // border: "1px solid rgb(134, 213, 166)",
    backgroundColor: "rgba(148, 148, 148, 0.2)",
    // transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&::before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(0, 15px) rotate(-180deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(180deg)",
      color: "rgb(17, 50, 30)",
    },
  },
}));

function OptimalThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="optimal-bar" />
    </SliderThumb>
  );
}

OptimalThumbComponent.propTypes = {
  children: PropTypes.node,
};

const RangeSlider = ({ socket, propertyName, zone = [0, 10] }) => {
  const [value, setValue] = useState(zone); // Default min and max values

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("Slider Value: ", newValue);
    console.log("socket", socket);
  };

  const handleOnCommit = (event, newValue) => {
    if (socket) {
      console.log("socketing");
      socket.emit("sliderUpdate", { value: newValue, property: propertyName });
    }
  };

  const handleMouseUp = (event) => {
    const tmp = document.createElement("input");
    tmp.style.position = "absolute";
    tmp.style.opacity = "0";
    tmp.style.border = "none";
    tmp.style.height = "0";
    tmp.style.width = "0";
    tmp.style.left = "-9999px"; // Move off-screen

    document.body.appendChild(tmp);
    tmp.focus();

    setTimeout(() => {
      document.body.removeChild(tmp);
    }, 0); // Delay removal just enough to register focus shift
  };

  return (
    <div style={{ width: "200px", margin: "20px" }}>
      <OptimalSlider
        value={value}
        onChange={handleChange}
        onChangeCommitted={handleOnCommit}
        disableSwap
        min={0}
        max={10}
        step={0.1} // Allows finer adjustments
        valueLabelDisplay="on" // Shows labels above the slider
        slots={{ thumb: OptimalThumbComponent }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "-15px",
        }}
      >
        <span
          style={{
            fontSize: ".7rem",
            color: "gray",
            transform: "translate(-4px, -33px)",
          }}
        >
          0
        </span>
        <span
          style={{
            fontSize: ".7rem",
            color: "gray",
            transform: "translate(4px, -33px)",
          }}
        >
          10
        </span>
      </div>
    </div>
  );
};

export default RangeSlider;
