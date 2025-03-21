import React from "react";
import { useState, useEffect, useRef } from "react";
import placementImage from "../assets/UpdatedImages/PurpleBlock.svg";
import MoleculeDatabase from "../molecule_database_DrugDiscovery";
import { formatChemicalFormula } from "../Utils";

import "./Molecule_SideBar_Block_Style.css";
import "../App.css";
import { use } from "react";

const MoleculeSideBarBlock = ({ module, image, classParent }) => {
  const moleculeEntry = MoleculeDatabase[module][image];
  const name = moleculeEntry.name;
  const filePath = moleculeEntry.filePath;
  const source = moleculeEntry.source;
  var selectionColor = "#6C88CF";
  console.log("name:", name);

  if (module === 0) {
  }

  return (
    <div
      // style={{ border: "1px solid red" }}
      className={`${classParent}-molecule-display-container`}
    >
      <div className={`molecule-display-outer ${module}-display-outer`}>
        <div className="molecule-display-body">
          <img src={filePath} alt={"image"} draggable={false} />
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

export default MoleculeSideBarBlock;
