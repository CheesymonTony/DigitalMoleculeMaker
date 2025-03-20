import React from "react";
import RangeSlider from "../RangeSlider/RangeSlider";

const OptimalSliders = ({ socket }) => {
  console.log("opt socket:", socket);
  return (
    <div
      className="sliders-container"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "6%",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <h4
          style={{
            position: "relative",
            textAlign: "center",
            fontVariant: "small-caps",
            marginBottom: "0px",
            color: "#868686",
          }}
        >
          Potency
        </h4>
        <RangeSlider socket={socket} propertyName={"Potency"} zone={[0, 10]} />
      </div>
      <div>
        <h4
          style={{
            position: "relative",
            textAlign: "center",
            fontVariant: "small-caps",
            marginBottom: "0px",
            color: "#868686",
          }}
        >
          Toxicity
        </h4>
        <RangeSlider socket={socket} propertyName={"Toxicity"} zone={[0, 10]} />
      </div>
      <div>
        <h4
          style={{
            position: "relative",
            textAlign: "center",
            fontVariant: "small-caps",
            marginBottom: "0px",
            color: "#868686",
          }}
        >
          Synthesizability
        </h4>
        <RangeSlider
          socket={socket}
          propertyName={"Synthesizability"}
          zone={[0, 10]}
        />
      </div>
    </div>
  );
};

export default OptimalSliders;
