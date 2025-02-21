import React, { useState } from "react";

const MoleculeFinder = () => {
  const [molecule, setMolecule] = useState("");
  const [cid, setCID] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    if (!molecule) return;
    setError(""); // Clear previous errors
    setCID(null); // Reset CID state

    const resultCID = await fetchCID(molecule);
    setCID(resultCID);
  };

  // Fetch CID based on molecular formula
  const fetchCID = async (moleculeFormula) => {
    try {
      const response = await fetch(
        `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/formula/${moleculeFormula}/cids/JSON`
      );
      const data = await response.json();

      if (!data.IdentifierList || !data.IdentifierList.CID?.length) {
        throw new Error("No compound found for this formula.");
      }

      return data.IdentifierList.CID[0]; // Get the first CID
    } catch (error) {
      console.error(error);
      setError(error.message);
      return null;
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Find a Molecule</h1>
      <input
        type="text"
        placeholder="Enter molecular formula (e.g., C20H12N)"
        value={molecule}
        onChange={(e) => setMolecule(e.target.value)}
      />
      <button onClick={handleFetch}>Find</button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {cid && (
        <div>
          <h3>Found Molecule</h3>
          <p>
            <strong>Formula:</strong> {molecule}
          </p>
          <p>
            <strong>PubChem CID:</strong> {cid}
          </p>
          <a
            href={`https://pubchem.ncbi.nlm.nih.gov/compound/${cid}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on PubChem
          </a>
        </div>
      )}
    </div>
  );
};

export default MoleculeFinder;
