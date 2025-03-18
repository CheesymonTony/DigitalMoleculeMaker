import PropTypes from "prop-types";
import "../App.css";
import MoleculeDatabase from "../molecule_database_DrugDiscovery";
import "./MoleculeDisplay_DD_style.css";

const MoleculeDisplay = ({ module, image, classParent }) => {
  //displays the molecule image and its name
  const moleculeEntry = MoleculeDatabase[module][image];
  const name = moleculeEntry.name;

  return (
    <>
      <div className={`${classParent}-molecule molecule-display`}>
        <img src={moleculeEntry.filePath} />
        <p>{name}</p>
      </div>
    </>
  );
};
export default MoleculeDisplay;
