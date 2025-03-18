import PropTypes from "prop-types";
import MoleculeDisplay from "../MoleculeDisplay/MoleculeDisplay_DrugDiscovery";
import "./Sidebar_style.css";

const Sidebar = ({ imageDatabase, handleImageSelect, selectedImages }) => {
  //shows each available molecule to build the trimer
  console.log("imageDatabase:", imageDatabase);
  console.log("selectedImages:", selectedImages);

  return (
    <div className="sidebar-container">
      <div className="scrollbar">
        <div className="scroll-object"></div>
      </div>
      <h2>Select Molecules (Click to Select)</h2>
      <div className="image-list">
        {/* Maps each image available to a MoleculeDisplay option */}
        {Object.keys(imageDatabase).map((moduleKey) =>
          Object.keys(imageDatabase[moduleKey]).map((molecule, index) => (
            // When a sidebar molecule is clicked, the molecule will be added to the built molecule
            <div
              class="sidebar-clickable"
              key={`${moduleKey}-${index}`}
              onClick={() => handleImageSelect(moduleKey, index)}
            >
              <MoleculeDisplay
                module={moduleKey}
                image={index}
                classParent={"sidebar"}
                className={
                  selectedImages.includes([moduleKey, index]) ? "selected" : ""
                }
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Sidebar.propTypes = {
//   images: PropTypes.array.isRequired,
//   handleImageSelect: PropTypes.func.isRequired,
//   selectedImages: PropTypes.array.isRequired,
// };

export default Sidebar;
