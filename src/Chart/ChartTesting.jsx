import React from "react";
import Chart from "./Chart_DrugDiscovery";

const ChartTest = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <Chart potency={6.5} toxicity={3.2} synthesizability={8.7} />
    </div>
  );
};

export default ChartTest;
