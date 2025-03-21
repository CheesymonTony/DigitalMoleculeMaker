import { formatChemicalFormula } from "../Utils";
import MoleculeDatabase from "../molecule_database_DrugDiscovery";
import "./MoleculeDisplay_DD_style.css";

const MoleculeDisplay = ({ module, image, classParent }) => {
  const moleculeEntry = MoleculeDatabase[module][image];
  const source = moleculeEntry.source;
  const name = moleculeEntry.name;

  return (
    <>
      <div className={`${classParent}-molecule molecule-display`}>
        <img src={moleculeEntry.filePath} draggable={false} />
        <strong
          className="selected-molecule-formula-header"
          dangerouslySetInnerHTML={{ __html: formatChemicalFormula(name) }}
        />

        <p className="molecule-properties">Source: {source} </p>
      </div>
    </>
  );
};
export default MoleculeDisplay;
