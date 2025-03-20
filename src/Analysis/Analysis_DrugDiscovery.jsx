import { useEffect, useState } from "react";
import Loading from "../Loading";
import Header from "../Header";
import "./Analysis_style.css";
import AnalysisBlock from "./Analysis_Component";
import { getMoleculeProperties, getSuggestedMolecule } from "../Utils";

const Analysis = ({ socket }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [optimalZones, setOptimalZones] = useState({
    potency: { min: 0, max: 10 },
    toxicity: { min: 0, max: 10 },
    synthesizability: { min: 0, max: 10 },
  });

  useEffect(() => {
    // Handle "updateImages" event
    const handleUpdateImages = (updatedImages) => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000); // Add loading screen for 2 seconds
      setSelectedImages(updatedImages);
    };

    // Handle "sliderUpdate" event
    const handleSliderUpdate = (data) => {
      // Update the corresponding property in optimalZones
      setOptimalZones((prevZones) => ({
        ...prevZones,
        [data.property.toLowerCase()]: {
          min: data.value[0],
          max: data.value[1],
        },
      }));
    };

    // Attach socket listeners
    socket.on("updateImages", handleUpdateImages);
    socket.on("sliderUpdate", handleSliderUpdate);

    // Cleanup function to remove listeners when component unmounts
    return () => {
      socket.off("updateImages", handleUpdateImages);
      socket.off("sliderUpdate", handleSliderUpdate);
    };
  }, [socket]); // Runs once when component mounts

  //if a valid molecule is passed in
  if (selectedImages.length == 3) {
    // if (loading) {
    if (false) {
      //show loading screen while loading
      return (
        <>
          <Loading />
        </>
      );
    } else {
      const data = getMoleculeProperties(selectedImages);

      const suggested = getSuggestedMolecule(selectedImages);

      if (suggested === true) {
        return (
          <>
            <Header />
            <AnalysisBlock
              selectedImages={selectedImages}
              optimalZones={optimalZones}
              data={data}
              suggested={suggested}
              optimized={true}
            />
          </>
        );

        // return displayWinningPage(selectedImages, data);
      } else {
        return (
          <>
            <Header />
            <AnalysisBlock
              selectedImages={selectedImages}
              optimalZones={optimalZones}
              data={data}
              suggested={suggested}
              optimized={false}
            />
          </>
        );
        // return displaySuggestionPage(selectedImages, suggested, data);
      }
    }
  }
  // If there is no molecule selected or the molecule is invalid
  return (
    <>
      <Header />
      <div className="analysis-default">
        <h1>No molecule selected!</h1>
      </div>
    </>
  );
};

export default Analysis;
