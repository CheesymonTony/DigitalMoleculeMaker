import PropTypes from "prop-types";
import MoleculeDisplay from "./MoleculeDisplay/MoleculeDisplay_DrugDiscovery";

const MainContent = ({ selectedImages }) => {
  return (
    // shows the molecule the user has currently built.
    <div
      className="main-content"
      style={{
        display: "flex",
        backgroundColor: "Gainsboro",
        borderRadius: "10px",
        marginInline: "5rem",
        width: "50%",
        height: "15rem",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "10%",
      }}
    >
      {/* {selectedImages.map(([module, index]) => (
        <MoleculeDisplay
          module={module}
          image={index}
          classParent={"selected-block"}
        ></MoleculeDisplay> */}
      <MoleculeDisplay
        module={selectedImages[0][0]}
        image={selectedImages[0][1]}
        classParent={"selected-block"}
      ></MoleculeDisplay>
      <MoleculeDisplay
        module={selectedImages[1][0]}
        image={selectedImages[1][1]}
        classParent={"selected-block"}
      ></MoleculeDisplay>
      <MoleculeDisplay
        module={selectedImages[2][0]}
        image={selectedImages[2][1]}
        classParent={"selected-block"}
      ></MoleculeDisplay>
    </div>
  );
};

// MainContent.propTypes = {
//   selectedImages: PropTypes.arrayOf(PropTypes.string),
// };

export default MainContent;
