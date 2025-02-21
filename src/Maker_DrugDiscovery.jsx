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
    "src/assets/DrugDiscovery_Images/C12H10N.png",
    "src/assets/DrugDiscovery_Images/C6H3F.png",
    "src/assets/DrugDiscovery_Images/C6H4NO2.png",
  ]);
  //the list of all molecules available
  const images = [
    "src/assets/DrugDiscovery_Images/S1.png",
    "src/assets/DrugDiscovery_Images/S2.png",
    "src/assets/DrugDiscovery_Images/S4.png",
    "src/assets/DrugDiscovery_Images/S3.png",
    "src/assets/DrugDiscovery_Images/S5.png",
    "src/assets/DrugDiscovery_Images/M3.png",
    "src/assets/DrugDiscovery_Images/M5.png",
    "src/assets/DrugDiscovery_Images/M4.png",
    "src/assets/DrugDiscovery_Images/M2.png",
    "src/assets/DrugDiscovery_Images/M1.png",
    "src/assets/DrugDiscovery_Images/E4.png",
    "src/assets/DrugDiscovery_Images/E5.png",
    "src/assets/DrugDiscovery_Images/E3.png",
    "src/assets/DrugDiscovery_Images/E2.png",
    "src/assets/DrugDiscovery_Images/E1.png",
  ];

  //Handles adding molecules selected from the sidebar to the currently built molecule.
  const handleImageSelect = (index) => {
    var selectedImage = images[index];
    const molecule = allMolecules[selectedImage];
    if (molecule.color == "purple") {
      //if the selected molecule is purple, replace the purple molecule
      setSelectedImages([selectedImage, selectedImages[1], selectedImages[2]]);
    } else if (molecule.color == "green") {
      //if the selected molecule is green, replace the green molecule
      setSelectedImages([selectedImages[0], selectedImage, selectedImages[2]]);
    } else if (molecule.color == "blue") {
      //if the selected molecule is blue, replace the blue molecule
      setSelectedImages([selectedImages[0], selectedImages[1], selectedImage]);
    }
  };

  const handleSubmit = () => {
    // if the molecule built is valid, on submit, send the molecule to the database page
    if (
      selectedImages.length == 3 &&
      selectedImages[0] != purple &&
      selectedImages[1] != green &&
      selectedImages[2] != blue
    ) {
      console.log("Selected Images:", selectedImages);
      socket.emit("imagesSelected", selectedImages);
    } else {
      //if an invalid molecule is submitted, show alert and do not send molecule to databse
      alert("Invalid moleucle submitted!");
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
          images={images}
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
