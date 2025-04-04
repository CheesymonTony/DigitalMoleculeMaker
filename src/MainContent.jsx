import PropTypes from "prop-types";
import MoleculeDisplay from "./MoleculeDisplay/MoleculeDisplay_DrugDiscovery";

const MainContent = ({ selectedImages }) => {
  for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 4) + 1);
  }
  return (
    // shows the molecule the user has currently built.
    <div
      className="main-content"
      style={{
        display: "flex",
        backgroundColor: "white",
        borderRadius: "25px",
        width: "70%",
        // height: "15rem",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "5%",
        marginRight: "0%",
        paddingTop: "30px",
        paddingBottom: "20px",
        paddingLeft: "30px",
        paddingRight: "100px",
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
