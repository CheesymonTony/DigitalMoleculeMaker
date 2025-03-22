import React from "react";
import OptimalBar from "./ChartBar";
import "../App.css";

const Chart = ({ potency, toxicity, synthesizability, optimalZones }) => {
  return (
    // console.log("optimalZones chart:", optimalZones),
    <div
      className="chart"
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ fontFamily: "Roboto, sans-serif" }}>Optimization Zones</h2>

      <OptimalBar
        propertyName="Potency"
        value={potency}
        optimalZones={optimalZones}
      />
      <OptimalBar
        propertyName="Toxicity"
        value={toxicity}
        optimalZones={optimalZones}
      />
      <OptimalBar
        propertyName="Synthesizability"
        value={synthesizability}
        optimalZones={optimalZones}
      />
    </div>
  );
};

export default Chart;
