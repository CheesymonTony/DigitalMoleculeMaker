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
    "/DrugDiscovery_Images/C12H10N.png",
    "/DrugDiscovery_Images/C6H3F.png",
    "/DrugDiscovery_Images/C6H4NO2.png",
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
  let databaseWindow = null;
  const handleSubmit = () => {
    if (
      selectedImages.length === 3 &&
      selectedImages[0] !== "src/assets/purple.png" &&
      selectedImages[1] !== "src/assets/green.png" &&
      selectedImages[2] !== "src/assets/blue.png"
    ) {
      console.log("Selected Images:", selectedImages);
      socket.emit("imagesSelected", selectedImages);

      // Ensure the correct full URL is used
      const databaseURL = window.location.origin + "/database";

      // Open a new window with adjustable size and scrollbars
      if (!databaseWindow || databaseWindow.closed) {
        databaseWindow = window.open(
          databaseURL,

          "width=1200,height=800,top=100,left=100,resizable=yes,scrollbars=yes"
        );

        if (databaseWindow) {
          databaseWindow.onload = () => {
            databaseWindow.postMessage(
              { type: "imagesSelected", data: selectedImages },
              "*"
            );
          };
        }
      } else {
        // If already open, bring to front and send data
        databaseWindow.focus();
        databaseWindow.postMessage(
          { type: "imagesSelected", data: selectedImages },
          "*"
        );
      }
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
