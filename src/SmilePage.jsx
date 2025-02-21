import React from "react";
import MoleculeSVGGenerator from "./SMILE_Getter.jsx";

const MoleculePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Molecule Structure Generator</h1>
      <MoleculeSVGGenerator />
    </div>
  );
};

export default MoleculePage;
