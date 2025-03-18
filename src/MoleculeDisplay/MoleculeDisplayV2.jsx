import React from "react";
import { useState, useEffect, useRef } from "react";
import placementImage from "../assets/UpdatedImages/PurpleBlock.svg";
import MoleculeDatabase from "../molecule_database_DrugDiscovery";
import { formatChemicalFormula } from "../Utils";

import "./MoleculeDisplay.css";
import "../App.css";
import { use } from "react";

const MoleculeDisplayV2 = ({ module, image, classParent }) => {
  const moleculeEntry = MoleculeDatabase[module][image];
  const name = moleculeEntry.name;
  const filePath = moleculeEntry.filePath;
  const source = moleculeEntry.source;
  console.log("name:", name);

  return (
    <div className={`${classParent}-molecule-display-container`}>
      <div className="molecule-display-outer">
        <div className="molecule-display-body">
          <img src={filePath} alt={"image"} />
        </div>
        <strong
          className="formula-header"
          dangerouslySetInnerHTML={{ __html: formatChemicalFormula(name) }}
        />

        <p className="molecule-properties">Source: {source} </p>
      </div>
    </div>
  );
};

export default MoleculeDisplayV2;
