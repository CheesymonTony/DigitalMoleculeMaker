import PropTypes from "prop-types";
import MoleculeSideBarBlock from "../MoleculeDisplay/Molecule_SideBar_Block";
import "./Sidebar_style_Update.css";

const SidebarUpdate = ({
  imageDatabase,
  layout,
  handleImageSelect,
  selectedImages,
}) => {
  return (
    <div className="sidebar-container">
      <h2>Select Molecules</h2>
      <h4>(Click to Select)</h4>
      <div className="image-list">
        {Object.keys(imageDatabase).map((moduleKey, moduleIndex) =>
          layout[moduleIndex].map((moleculeIndex) => {
            const isSelected = selectedImages.some(
              ([mod, idx]) => mod === moduleKey && idx === moleculeIndex
            );

            return (
              <div
                className={`sidebar-clickable ${isSelected ? "selected" : ""}`}
                key={`${moduleKey}-${moleculeIndex}`}
                onClick={() => handleImageSelect(moduleKey, moleculeIndex)}
              >
                <MoleculeSideBarBlock
                  module={moduleKey}
                  image={moleculeIndex}
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
