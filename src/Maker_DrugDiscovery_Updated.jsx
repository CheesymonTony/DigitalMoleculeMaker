import "./App.css";
import SidebarUpdate from "./Sidebar/Sidebar_Update";
import MainContent from "./MainContent";
import { useState } from "react";
import allMolecules from "./molecule_database_DrugDiscovery";
import Header from "./Header";
import UpdatePrompt from "./UpdatePrompt/UpdatePrompt";
import RebootScreen from "./RebootScreen/Reboot";
import { use, useEffect } from "react";
import "typeface-roboto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import OptimalSliders from "./OptimalSliders/OptimalSliders";

const MakerUpdated = ({ socket }) => {
  const [showRebootScreen, setShowRebootScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRebootScreen(false);
    }, 19000);
    return () => clearTimeout(timer);
  }, []);

  //The basic molecule outline
  const purple = "src/assets/purple.png";
  const green = "src/assets/green.png";
  const blue = "src/assets/blue.png";

  const [selectedImages, setSelectedImages] = useState([
    // ["module1", Math.floor(Math.random() * 4)],
    // ["module2", Math.floor(Math.random() * 4)],
    // ["module3", Math.floor(Math.random() * 4)],
    ["module1", 1],
    ["module2", 1],
    ["module3", 2],
  ]);
  //the list of all molecules available
  const images = [
    [1, 2, 0, 4, 3],
    [1, 0, 4, 2, 3],
    [2, 0, 1, 4, 3],
  ];
  //   "/DrugDiscovery_Images/S2.png",
  //   "/DrugDiscovery_Images/S3.png",
  //   "/DrugDiscovery_Images/S5.png",
  //   "/DrugDiscovery_Images/S1.png",
  //   "/DrugDiscovery_Images/S4.png",
  //   "/DrugDiscovery_Images/M2.png",
  //   "/DrugDiscovery_Images/M1.png",
  //   "/DrugDiscovery_Images/M5.png",
  //   "/DrugDiscovery_Images/M3.png",
  //   "/DrugDiscovery_Images/M4.png",
  //   "/DrugDiscovery_Images/E3.png",
  //   "/DrugDiscovery_Images/E2.png",
  //   "/DrugDiscovery_Images/E5.png",
  //   "/DrugDiscovery_Images/E1.png",
  //   "/DrugDiscovery_Images/E4.png",
  // ];

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
      console.log("socket: ", socket);
    } else {
      alert("Invalid molecule submitted!");
    }
  };

  return (
    <section className="maker-container" style={{ padding: "none" }}>
      {showRebootScreen && <RebootScreen />}

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
        <SidebarUpdate
          imageDatabase={allMolecules}
          layout={images}
          handleImageSelect={handleImageSelect}
          selectedImages={selectedImages}
        />
        <div className="main-content-section">
          <div
            className="selection-container"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MainContent selectedImages={selectedImages} />
            <button onClick={handleSubmit}>
              Submit
              <span className="arrow">
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </button>
          </div>
          <div
            className="slider-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              width: "70%",
              borderRadius: "20px",
              border: "1px solid #868686",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "5%",
              marginTop: "10px",
              height: "10rem",
            }}
          >
            <h3>Optimization Zones</h3>
            <OptimalSliders socket={socket} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakerUpdated;
