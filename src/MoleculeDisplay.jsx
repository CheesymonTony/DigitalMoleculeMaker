import PropTypes from "prop-types";
import "./App.css";
import MoleculeDatabase from "./molecule_database_DrugDiscovery";

const MoleculeDisplay = ({ image, width, height }) => {
  //dipslays the molecule image and its name
  console.log("image", image);
  console.log(
    "this is the name of the image that is being shown",
    MoleculeDatabase[image]
  );
  if (!MoleculeDatabase[image].name) {
    console.log("no name found");
  }

  const name = image.substring(11, image.length - 4);

  return (
    <>
      <div
        className="molecule-display"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <img src={image} style={{ width: width, height: height }} />
        <p style={{ marginTop: ".1em", color: "#131737" }}>{name}</p>
      </div>
    </>
  );
};
export default MoleculeDisplay;
