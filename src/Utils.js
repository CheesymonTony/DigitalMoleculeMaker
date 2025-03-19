import allMolecules from "./molecule_database_DrugDiscovery";

export const getMoleculeProperties = (selectedImages) => {
  console.log("What are my selected images?:", selectedImages);

  // Define the path influence for each module
  const paths = {
    module1: { potency: 2, toxicity: 4, synthesizability: 2 },
    module2: { potency: 4, toxicity: 2, synthesizability: 2 },
    module3: { potency: 2, toxicity: 2, synthesizability: 4 },
  };

  // Get molecule entries from the database
  const molecules = selectedImages.map(([moduleKey, moleculeIndex]) => ({
    ...allMolecules[moduleKey][moleculeIndex],
    module: moduleKey, // Store module type
  }));

  // Compute the adjusted sums using the networked influence
  let potencySum = 0, toxicitySum = 0, synthSum = 0;
  let totalPotencyPaths = 0, totalToxicityPaths = 0, totalSynthPaths = 0;

  molecules.forEach((mol) => {
    const { module, potency, toxicity, synthesizability } = mol;

    potencySum += potency * paths[module].potency;
    toxicitySum += toxicity * paths[module].toxicity;
    synthSum += synthesizability * paths[module].synthesizability;

    totalPotencyPaths += paths[module].potency;
    totalToxicityPaths += paths[module].toxicity;
    totalSynthPaths += paths[module].synthesizability;
  });

  // Normalize by total paths to ensure results stay in expected ranges
  return [
    molecules.reduce((acc, mol) => acc + mol.weight, 0) / molecules.length / 100, // Weight
    potencySum / totalPotencyPaths, // Adjusted potency
    toxicitySum / totalToxicityPaths, // Adjusted toxicity
    synthSum / totalSynthPaths, // Adjusted synthesizability
  ];
};

export const getSuggestedMolecule = (selectedMolecules) => {
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

  var replace = -1;

  var replaceMolecule = null;
  // set up the 2 trimers that will then be used to suggest new molecules
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


  //now go through the 3 molecules and find the first one that isn't fully optimized
  //when you find the first one, store it in replaceMolecule and set the replace variable to the index of the block type that will be replaced
  if (molecule1.rank !== 5) {
    console.log('molecule1 not equal to rank 5:');
    replaceMolecule = molecule1;
    replace = 0;
  } else if (molecule2.rank !== 5) {
    console.log('molecule2 not equal to rank 5:');
    replaceMolecule = molecule2;
    replace = 1;
  } else if (molecule3.rank !== 5) {
    console.log('molecule3 not equal to rank 5:');
    replaceMolecule = molecule3;
    replace = 2;
  }
  if (replace == -1) {
    //if the molecule is fully optimized, return true to signal the winning screen
    return true;
  }
  //now setup the indexes of the molecules that will be used to replace the molecule that is not fully optimized
  var idx2 = -1;
  var idx3 = -1;

  if (replace !== null) {
    console.log('at this point the molecule that is not fully optimized is:', replaceMolecule);
    const idx = replaceMolecule.rank - 1; //get the index of the molecule in the molecule list
    console.log('idx:', idx);
    if (replaceMolecule.rank == 1) {
      //edge case: if molecule is rank 1, then get rank 2 and rank 3 of the same color molecule
      idx2 = idx + 1;
      idx3 = idx + 2;
    } else {
      //if the molecule is not rank 1, get the rank-1 and rank+1 molecule
      console.log('replaceMolecule.rank:', replaceMolecule.rank);
      idx2 = idx + 1;
      idx3 = idx - 1;
    }
    trimer1[replace] = [Object.keys(allMolecules)[replace], idx2];
    trimer2[replace] = [Object.keys(allMolecules)[replace], idx3];
    const rand = Math.floor(Math.random() * 2); // randomize which order the molecules appear in
    if (rand == 0) {
      // console.log('trimer1:', trimer1);
      return [trimer1, trimer2];
    }
    // console.log('trimer2:', trimer2);
    return [trimer2, trimer1];
  }
};

export const formatChemicalFormula = (formula) => {
  return formula.replace(/(\d+)/g, "<sub>$1</sub>");
};
