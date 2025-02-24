import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent";
import { useState } from "react";
import allMolecules from "./molecule_database_DrugDiscovery";
import Header from "./Header";

const Maker = ({ socket }) => {
  //The basic molecule outline
  const purple = "src/assets/purple.png";
  const green = "src/assets/green.png";
  const blue = "src/assets/blue.png";

  const [selectedImages, setSelectedImages] = useState([
    ["module1", Math.floor(Math.random() * 4)],
    ["module2", Math.floor(Math.random() * 4)],
    ["module3", Math.floor(Math.random() * 4)],
  ]);
  //the list of all molecules available
  const images = [
    "/DrugDiscovery_Images/S1.png",
    "/DrugDiscovery_Images/S2.png",
    "/DrugDiscovery_Images/S4.png",
    "/DrugDiscovery_Images/S3.png",
    "/DrugDiscovery_Images/S5.png",
    "/DrugDiscovery_Images/M3.png",
    "/DrugDiscovery_Images/M5.png",
    "/DrugDiscovery_Images/M4.png",
    "/DrugDiscovery_Images/M2.png",
    "/DrugDiscovery_Images/M1.png",
    "/DrugDiscovery_Images/E4.png",
    "/DrugDiscovery_Images/E5.png",
    "/DrugDiscovery_Images/E3.png",
    "/DrugDiscovery_Images/E2.png",
    "/DrugDiscovery_Images/E1.png",
  ];

  //Handles adding molecules selected from the sidebar to the currently built molecule.
  const handleImageSelect = (moduleKey, molecule) => {
    console.log("moduleKey:", moduleKey);
    console.log("molecule:", molecule);
    var selectedImage = allMolecules[moduleKey][molecule];

    if (selectedImage.color == "purple") {
      //if the selected molecule is purple, replace the purple molecule
      setSelectedImages([
        [moduleKey, molecule],
        selectedImages[1],
        selectedImages[2],
      ]);
    } else if (selectedImage.color == "green") {
      //if the selected molecule is green, replace the green molecule
      setSelectedImages([
        selectedImages[0],
        [moduleKey, molecule],
        selectedImages[2],
      ]);
    } else if (selectedImage.color == "blue") {
      //if the selected molecule is blue, replace the blue molecule
      setSelectedImages([
        selectedImages[0],
        selectedImages[1],
        [moduleKey, molecule],
      ]);
    }
  };
  let databaseWindow = null;
  const handleSubmit = () => {
    if (
      selectedImages.length === 3 &&
      selectedImages[0] !== "src/assets/purple.png" &&
      selectedImages[1] !== "src/assets/green.png" &&
      selectedImages[2] !== "src/assets/blue.png"
    ) {
      socket.emit("imagesSelected", selectedImages);
    } else {
      alert("Invalid molecule submitted!");
    }
  };

  return (
    <section className="maker-container" style={{ padding: "none" }}>
      <Header />
      <div
        className="main-container"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <Sidebar
          imageDatabase={allMolecules}
          handleImageSelect={handleImageSelect}
          selectedImages={selectedImages}
        />
        <MainContent selectedImages={selectedImages} />
        <button style={{ padding: "1rem" }} onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </section>
  );
};

export default Maker;
