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
    "DrugDiscovery_Images/C12H10N.png",
    "DrugDiscovery_Images/C6H3F.png",
    "DrugDiscovery_Images/C6H4NO2.png",
  ]);
  //the list of all molecules available
  const images = [
    "DrugDiscovery_Images/S1.png",
    "DrugDiscovery_Images/S2.png",
    "DrugDiscovery_Images/S4.png",
    "DrugDiscovery_Images/S3.png",
    "DrugDiscovery_Images/S5.png",
    "DrugDiscovery_Images/M3.png",
    "DrugDiscovery_Images/M5.png",
    "DrugDiscovery_Images/M4.png",
    "DrugDiscovery_Images/M2.png",
    "DrugDiscovery_Images/M1.png",
    "DrugDiscovery_Images/E4.png",
    "DrugDiscovery_Images/E5.png",
    "DrugDiscovery_Images/E3.png",
    "DrugDiscovery_Images/E2.png",
    "DrugDiscovery_Images/E1.png",
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

      // Check if the database window is already open
      if (!databaseWindow || databaseWindow.closed) {
        // Open the new window with correct size and force it as a separate window
        databaseWindow = window.open(
          "",
          "_blank",
          `width=${screen.availWidth},height=${screen.availHeight},top=0,left=0`
        );

        if (databaseWindow) {
          // Temporarily set blank content to prevent popup blockers
          databaseWindow.document.write(
            "<html><head><title>Loading...</title></head><body></body></html>"
          );
          databaseWindow.document.close();
          databaseWindow.location.href = window.location.origin + "/database";

          // Ensure event fires only when the window is ready
          databaseWindow.onload = () => {
            console.log("Database window loaded, sending data...");
            databaseWindow.postMessage(
              { type: "imagesSelected", data: selectedImages },
              "*"
            );
          };
        }
      } else {
        // If it's already open, focus and send the event immediately
        console.log("Database window already open, sending data...");
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
