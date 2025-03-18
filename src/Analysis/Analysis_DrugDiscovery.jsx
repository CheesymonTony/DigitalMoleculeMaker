import { useEffect, useState } from "react";
import Loading from "../Loading";
import Header from "../Header";
import "./Analysis_style.css";
import AnalysisBlock from "./Analysis_Component";
import { getMoleculeProperties, getSuggestedMolecule } from "../Utils";

const Analysis = ({ socket }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    socket.on(
      "updateImages",
      (updatedImages) => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000); //add loading screen for 2 seconds
        setSelectedImages(updatedImages);
      },
      [selectedImages]
    ); // Listen for changes in selectedImages

    return () => {
      // Cleanup function (e.g., removing event listeners)
      socket.off("updateImages");
    };
  }, [socket]); // Empty dependency array means this effect runs once when the component mounts

  //if a valid molecule is passed in
  if (selectedImages.length == 3) {
    if (loading) {
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
