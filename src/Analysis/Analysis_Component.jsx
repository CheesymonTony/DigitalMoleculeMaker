import { useEffect, useState } from "react";
import MoleculeDisplay from "../MoleculeDisplay/MoleculeDisplay_DrugDiscovery";
import Chart from "../Chart/Chart_DrugDiscovery";
import "./Analysis_style.css";

const AnalysisBlock = ({
  selectedImages,
  data,
  suggested,
  optimalZones,
  optimized,
}) => {
  return (
    <>
      <div className="analysis-container">
        {/* Display the submitted molecule and its stats */}
        <div className="selected-molecule-container">
          <h2 className="selected-molecule-header">Your Selected Molecule:</h2>
          <span className="selected-molecules">
            {selectedImages.map((image, i) => (
              <MoleculeDisplay
                key={i}
                module={image[0]}
                image={image[1]}
                classParent={`selection-${i + 1}`}
              ></MoleculeDisplay>
            ))}
          </span>
          <Chart
            weight={data[0]}
            optimalZones={optimalZones}
            potency={data[1]}
            toxicity={data[2]}
            synthesizability={data[3]}
          />
        </div>
        {/* Display the suggested molecules if the best molecule has not been found yet. */}
        <span>
          <h2 className="suggested-molecule-header">Suggested Molecules:</h2>
          {!optimized ? (
            <>
              {suggested.map((suggestedTrimer, i) => (
                <div className={`suggested-set-${i + 1}`} key={i}>
                  <span className="suggested-molecules">
                    {suggestedTrimer.map((image, j) => (
                      <MoleculeDisplay
                        key={j}
                        module={image[0]}
                        image={image[1]}
                        classParent={`suggestion-${i + 1}-${j + 1}`}
                      ></MoleculeDisplay>
                    ))}
                  </span>
                  <br />
                </div>
              ))}

              <h2 className="suggested-molecule-information">
                The molecule isn't optimized yet, keep submitting new molecules!
              </h2>
            </>
          ) : (
            <h1>
              Best molecule found! This molecule is ready to be synthesized
              using the physical molecule maker.
            </h1>
          )}
        </span>
      </div>
    </>
  );
};

export default AnalysisBlock;
