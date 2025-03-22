import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import RangeLabel from "../Icons/Label";

import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const OptimalBarSlider = styled(Slider)(() => ({
  color: "green", // Customize slider color
  "& .MuiSlider-thumb": {
    width: 2,
    height: 8,
    backgroundColor: "green",
    borderRadius: "0px",
    // border: "1px solid green",
    "& .optimal-bar-slider": {
      height: 10,
      width: 1,
      // backgroundColor: "green   ",
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
  "&.Mui-disabled": {
    color: "green", // Changes slider color
    opacity: 1, // Ensure it's visible
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    backgroundColor: "orange",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "black", // Marker color
    width: 2,
    height: 12,
  },
  "& .MuiSlider-markLabel": {
    color: "black",
    fontSize: "0.8rem",
    transform: "translate(-10px, -40px)", // Move label above the marker
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
      transform: "translate(0, 10px) rotate(-180deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(180deg)",
      color: "rgb(17, 50, 30)",
    },
  },
}));

function OptimalBarThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="optimal-bar-slider" />
    </SliderThumb>
  );
}

OptimalBarThumbComponent.propTypes = {
  children: PropTypes.node,
};

const OptimalBar = ({ value, propertyName, optimalZones }) => {
  const min = optimalZones[propertyName.toLowerCase()].min;
  const max = optimalZones[propertyName.toLowerCase()].max;

  const marks = [{ value, label: `${value.toFixed(2)}` }]; // Show actual value as a mark

  return (
    <div
      style={{
        width: "200px",
        paddingTop: "10px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <h4 style={{ width: "200px", marginTop: "10px" }}>{propertyName}</h4>
      <div style={{ width: "600px", margin: "10px" }}>
        <OptimalBarSlider
          value={[min, max]}
          min={0}
          max={10}
          marks={marks}
          step={0.1} // Allows finer adjustments
          valueLabelDisplay="on" // Shows labels above the slider
          disabled
          // slots={{ thumb: OptimalBarThumbComponent }}
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
              transform: "translate(-4px, -48px)",
            }}
          >
            0
          </span>
          <span
            style={{
              fontSize: ".7rem",
              color: "gray",
              transform: "translate(4px, -48px)",
            }}
          >
            10
          </span>
        </div>
      </div>
    </div>
  );
};

export default OptimalBar;
