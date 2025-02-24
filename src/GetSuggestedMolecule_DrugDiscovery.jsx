import allMolecules from "./molecule_database_DrugDiscovery";

const GetSuggestedMolecule = (selectedMolecules) => {
  // gets the actual molecule information from the molecule list
  console.log("Selected Molecules in suggested:", selectedMolecules);
  const molecule1 =
    allMolecules[selectedMolecules[0][0]][selectedMolecules[0][1]];
  const molecule2 =
    allMolecules[selectedMolecules[1][0]][selectedMolecules[1][1]];
  const molecule3 =
    allMolecules[selectedMolecules[2][0]][selectedMolecules[2][1]];

  console.log("Molecule1:", molecule1);
  console.log("Molecule2:", molecule2);
  console.log("Molecule3:", molecule3);
  if (molecule1.rank == -1 || molecule2.rank == -1 || molecule3.rank == -1) {
    return false;
  }
  var replace = -1;

  var replaceMolecule = null;
  var trimer1 = [
    selectedMolecules[0],
    selectedMolecules[1],
    selectedMolecules[2],
  ];
  var trimer2 = [
    selectedMolecules[0],
    selectedMolecules[1],
    selectedMolecules[2],
  ];

  console.log("trimer1:", trimer1);
  console.log("trimer2:", trimer2);

  // finds the first molecule that isn't fully optimized
  if (molecule1.rank !== 5) {
    replaceMolecule = molecule1;
    replace = 0;
  } else if (molecule2.rank !== 5) {
    replaceMolecule = molecule2;
    replace = 1;
  } else if (molecule3.rank !== 5) {
    replaceMolecule = molecule3;
    replace = 2;
  }
  if (replace == -1) {
    //if the molecule is fully optimized, return true to signal the winning screen
    return true;
  }
  var idx2 = -1;
  var idx3 = -1;

  if (replace !== null) {
    const idx = replace * 4 + replaceMolecule.rank - 1; //get the index of the molecule in the molecule list
    if (replaceMolecule.rank == 1) {
      //edge case: if molecule is rank 1, then get rank 2 and rank 3 of the same color molecule
      idx2 = idx + 1;
      idx3 = idx + 2;
    } else {
      //if the molecule is not rank 1, get the rank-1 and rank+1 molecule
      idx2 = idx + 1;
      idx3 = idx - 1;
    }
    trimer1[replace] = [Object.keys(allMolecules)[replace], idx2];
    trimer2[replace] = [Object.keys(allMolecules)[replace], idx3];
    const rand = Math.floor(Math.random() * 2); // randomize which order the molecules appear in
    if (rand == 0) {
      return [trimer1, trimer2];
    }
    return [trimer2, trimer1];
  }
};

export default GetSuggestedMolecule;
