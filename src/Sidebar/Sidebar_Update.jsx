import PropTypes from "prop-types";
import MoleculeDisplayV2 from "../MoleculeDisplay/MoleculeDisplayV2";
import "./Sidebar_style_Update.css";

const SidebarUpdate = ({
  imageDatabase,
  handleImageSelect,
  selectedImages,
}) => {
  //shows each available molecule to build the trimer
  console.log("imageDatabase:", imageDatabase);
  console.log("selectedImages:", selectedImages);

  return (
    <div className="sidebar-container">
      <h2>Select Molecules</h2>
      <h4>(Click to Select)</h4>
      <div className="image-list">
        {Object.keys(imageDatabase).map((moduleKey) =>
          Object.keys(imageDatabase[moduleKey]).map((molecule, index) => {
            const isSelected = selectedImages.some(
              ([mod, idx]) => mod === moduleKey && idx === index
            );

            return (
              <div
                className={`sidebar-clickable ${isSelected ? "selected" : ""}`}
                key={`${moduleKey}-${index}2`}
                onClick={() => handleImageSelect(moduleKey, index)}
              >
                <MoleculeDisplayV2
                  module={moduleKey}
                  image={index}
                  classParent={"sidebar"}
                />
              </div>
            );
          })
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

export default SidebarUpdate;
