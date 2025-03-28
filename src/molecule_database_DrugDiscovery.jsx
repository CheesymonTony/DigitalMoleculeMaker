import { source } from "framer-motion/client";

const MoleculeDatabase = {
  module1: {
    0: {
      source: "AmB",
      filePath: "/DrugDiscovery_Images/S1.png",
      name: "C17H27NO9",
      tag: "S1",
      color: "purple",
      weight: 389.4,
      potency: 4.1,
      toxicity: 9.1, //✅
      synthesizability: 3.2,
      rank: 1,
    },
    1: {
      source: "C2'-deO",
      filePath: "/DrugDiscovery_Images/S2.png",
      name: "C17H27NO8",
      tag: "S2",
      color: "purple",
      weight: 373.4,
      potency: 6.1,
      toxicity: 7.3, //✅
      synthesizability: 6.7,
      rank: 2,
    },
    2: {
      source: "AM-1-243",
      filePath: "/DrugDiscovery_Images/S4.png",
      name: "C20H34N2O10",
      tag: "S4",
      color: "purple",
      weight: 462.5,
      potency: 7.2,
      toxicity: 9.5, //✅
      synthesizability: 5.1,
      rank: 3,
    },
    3: {
      source: "C2'-epi",
      filePath: "/DrugDiscovery_Images/S3.png",
      name: "C17H27NO9_2",
      tag: "S3",
      color: "purple",
      weight: 389.4,
      potency: 5.2,
      toxicity: 0.7, //✅
      synthesizability: 8.2,
      rank: 4,
    },
    4: {
      source: "AM-2-19", // ✅ CORRECT CHOICE (Module 1, Rank 5)
      filePath: "/DrugDiscovery_Images/S5.png",
      name: "C20H34N2O10_2",
      tag: "S5",
      color: "purple",
      weight: 462.5,
      potency: 8.4, // ✅ Keeps potency inside optimal range
      toxicity: 2.4, // ✅ Keeps toxicity inside optimal range
      synthesizability: 9.8, // ✅ Falls in the optimal range
      rank: 5,
    },
  },

  module2: {
    0: {
      source: "Natamycin",
      filePath: "/DrugDiscovery_Images/M3.png",
      name: "C4H4",
      tag: "M3",
      color: "green",
      weight: 52.08,
      potency: 3.6, //✅
      toxicity: 6.9,
      synthesizability: 3.1,
      rank: 1,
    },
    1: {
      source: "Lucensomysin",
      filePath: "/DrugDiscovery_Images/M5.png",
      name: "C6H",
      tag: "M5",
      color: "green",
      weight: 78.11,
      potency: 4.1, //✅
      toxicity: 8.1,
      synthesizability: 8.3,
      rank: 2,
    },
    2: {
      source: "Candicidin",
      filePath: "/DrugDiscovery_Images/M4.png",
      name: "C10H10_2",
      tag: "M4",
      color: "green",
      weight: 130.19,
      potency: 5.1, //✅
      toxicity: 3.5,
      synthesizability: 7.2,
      rank: 3,
    },
    3: {
      source: "Nystatin",
      filePath: "/DrugDiscovery_Images/M2.png",
      name: "C10H12",
      tag: "M2",
      color: "green",
      weight: 132.21,
      potency: 7.8, //✅
      toxicity: 7.1,
      synthesizability: 6.9,
      rank: 4,
    },
    4: {
      source: "AmB", // ✅ CORRECT CHOICE (Module 2, Rank 5)
      filePath: "/DrugDiscovery_Images/M1.png",
      name: "C10H10",
      tag: "M1",
      color: "green",
      weight: 130.19,
      potency: 7.6, // ✅ Keeps potency inside optimal range
      toxicity: 2.9, // ✅ Keeps toxicity inside optimal range
      synthesizability: 8.9, // ✅ Falls in the optimal range
      rank: 5,
    },
  },

  module3: {
    0: {
      source: "Candicidin",
      filePath: "/DrugDiscovery_Images/E4.png",
      name: "C18H25NO3",
      tag: "E4",
      color: "blue",
      weight: 303.4,
      potency: 6.3,
      toxicity: 6.1,
      synthesizability: 3.8, //✅
      rank: 1,
    },
    1: {
      source: "Vacidin A",
      filePath: "/DrugDiscovery_Images/E5.png",
      name: "C19H27NO3",
      tag: "E5",
      color: "blue",
      weight: 317.43,
      potency: 5.7,
      toxicity: 7.3,
      synthesizability: 5.1, //✅
      rank: 2,
    },
    2: {
      source: "C35-OMe-AmB",
      filePath: "/DrugDiscovery_Images/E3.png",
      name: "C10H18O2",
      tag: "E3",
      color: "blue",
      weight: 170.25,
      potency: 4.9,
      toxicity: 5.8,
      synthesizability: 6, //✅
      rank: 3,
    },
    3: {
      source: "C35-deO-AmB",
      filePath: "/DrugDiscovery_Images/E2.png",
      name: "C9H16O",
      tag: "E2",
      color: "blue",
      weight: 140.23,
      potency: 3.2,
      toxicity: 5.1,
      synthesizability: 7.9, //✅
      rank: 4,
    },
    4: {
      source: "AmB", // ✅ CORRECT CHOICE (Module 3, Rank 5)
      filePath: "/DrugDiscovery_Images/E1.png",
      name: "C9H16O2",
      tag: "E1",
      color: "blue",
      weight: 156.23,
      potency: 7.1, // ✅ Keeps potency inside optimal range
      toxicity: 2.7, // ✅ Keeps toxicity inside optimal range
      synthesizability: 9, // ✅ Falls in the optimal range
      rank: 5,
    },
  },
};

// const MoleculeDatabase = {
//   module1: {
//     0: {
//       source: "AmB",
//       filePath: "/DrugDiscovery_Images/S1.png",
//       name: "C17H27NO9",
//       tag: "S1",
//       color: "purple",
//       weight: 389.4,
//       potency: 6.3,
//       toxicity: 9.4,
//       synthesizability: 6.5,
//       rank: 1,
//     },
//     1: {
//       source: "C2'-deO",
//       filePath: "/DrugDiscovery_Images/S2.png",
//       name: "C17H27NO8",
//       tag: "S2",
//       color: "purple",
//       weight: 373.4,
//       potency: 5.4,
//       toxicity: 2.8,
//       synthesizability: 4.2,
//       rank: 2,
//     },
//     2: {
//       source: "AM-1-243",
//       filePath: "/DrugDiscovery_Images/S4.png",
//       name: "C20H34N2O10",
//       tag: "S4",
//       color: "purple",
//       weight: 462.5,
//       potency: 8.8,
//       toxicity: 9.2,
//       synthesizability: 6.8,
//       rank: 3,
//     },
//     3: {
//       source: "C2'-epi",
//       filePath: "/DrugDiscovery_Images/S3.png",
//       name: "C17H27NO9_2",
//       tag: "S3",
//       color: "purple",
//       weight: 389.4,
//       potency: 4.8,
//       toxicity: 2.5,
//       synthesizability: 6.1,
//       rank: 4,
//     },
//     4: {
//       source: "AM-2-19",
//       filePath: "/DrugDiscovery_Images/S5.png",
//       name: "C20H34N2O10_2",
//       tag: "S5",
//       color: "purple",
//       weight: 462.5,
//       potency: 8.6,
//       toxicity: 1.6,
//       synthesizability: 5.8,
//       rank: 5,
//     },
//   },
//   module2: {
//     0: {
//       source: "Natamycin",
//       filePath: "/DrugDiscovery_Images/M3.png",
//       name: "C4H4",
//       tag: "M3",
//       color: "green",
//       weight: 52.08,
//       potency: 4.6,
//       toxicity: 5.6,
//       synthesizability: 2.4,
//       rank: 1,
//     },
//     1: {
//       source: "Lucensomysin",
//       filePath: "/DrugDiscovery_Images/M5.png",
//       name: "C6H",
//       tag: "M5",
//       color: "green",
//       weight: 78.11,
//       potency: 5.6,
//       toxicity: 6.3,
//       synthesizability: 8.3,
//       rank: 2,
//     },
//     2: {
//       source: "Candicidin",
//       filePath: "/DrugDiscovery_Images/M4.png",
//       name: "C10H10_2",
//       tag: "M4",
//       color: "green",
//       weight: 130.19,
//       potency: 7.2,
//       toxicity: 4.2,
//       synthesizability: 6.2,
//       rank: 3,
//     },
//     3: {
//       source: "Nystatin",
//       filePath: "/DrugDiscovery_Images/M2.png",
//       name: "C10H12",
//       tag: "M2",
//       color: "green",
//       weight: 132.21,
//       potency: 8.5,
//       toxicity: 5.1,
//       synthesizability: 9.1,
//       rank: 4,
//     },
//     4: {
//       source: "AmB",
//       filePath: "/DrugDiscovery_Images/M1.png",
//       name: "C10H10",
//       tag: "M1",
//       color: "green",
//       weight: 130.19,
//       potency: 9.1,
//       toxicity: 5.5,
//       synthesizability: 7.5,
//       rank: 5,
//     },
//   },
//   module3: {
//     0: {
//       source: "Candicidin",
//       filePath: "/DrugDiscovery_Images/E4.png",
//       name: "C18H25NO3",
//       tag: "E4",
//       color: "blue",
//       weight: 303.4,
//       potency: 6.1,
//       toxicity: 6.4,
//       synthesizability: 3.8,
//       rank: 1,
//     },
//     1: {
//       source: "Vacidin A",
//       filePath: "/DrugDiscovery_Images/E5.png",
//       name: "C19H27NO3",
//       tag: "E5",
//       color: "blue",
//       weight: 317.43,
//       potency: 5.8,
//       toxicity: 5.7,
//       synthesizability: 5.4,
//       rank: 2,
//     },
//     2: {
//       source: "C35-OMe-AmB",
//       filePath: "/DrugDiscovery_Images/E3.png",
//       name: "C10H18O2",
//       tag: "E3",
//       color: "blue",
//       weight: 170.25,
//       potency: 5.3,
//       toxicity: 4.8,
//       synthesizability: 7.4,
//       rank: 3,
//     },
//     3: {
//       source: "C35-deO-AmB",
//       filePath: "/DrugDiscovery_Images/E2.png",
//       name: "C9H16O",
//       tag: "E2",
//       color: "blue",
//       weight: 140.23,
//       potency: 4.8,
//       toxicity: 5.1,
//       synthesizability: 7.9,
//       rank: 4,
//     },
//     4: {
//       source: "AmB",
//       filePath: "/DrugDiscovery_Images/E1.png",
//       name: "C9H16O2",
//       tag: "E1",
//       color: "blue",
//       weight: 156.23,
//       potency: 5.4,
//       toxicity: 5.7,
//       synthesizability: 8.2,
//       rank: 5,
//     },
//   },
// };

const MoleculeDatabaseOld = {
  "/DrugDiscovery_Images/S1.png": {
    source: "AmB",
    name: "C17H27NO9",
    color: "purple",
    weight: 389.4,
    potency: 6.3,
    toxicity: 9.4,
    synthesizability: 6.5,
    rank: 1,
  },
  "/DrugDiscovery_Images/S2.png": {
    source: "C2'-deO",
    name: "C17H27NO8",
    color: "purple",
    weight: 373.4,
    potency: 5.4,
    toxicity: 2.8,
    synthesizability: 4.2,
    rank: 2,
  },
  "/DrugDiscovery_Images/S4.png": {
    source: "AM-1-243",
    name: "C20H34N2O10",
    color: "purple",
    weight: 462.5,
    potency: 8.8,
    toxicity: 9.2,
    synthesizability: 6.8,
    rank: 3,
  },
  "/DrugDiscovery_Images/S3.png": {
    source: "C2'-epi",
    name: "C17H27NO9_2",
    color: "purple",
    weight: 389.4,
    potency: 4.8,
    toxicity: 2.5,
    synthesizability: 6.1,
    rank: 4,
  },
  "/DrugDiscovery_Images/S5.png": {
    source: "AM-2-19",
    name: "C20H34N2O10_2",
    color: "purple",
    weight: 462.5,
    potency: 8.6,
    toxicity: 1.6,
    synthesizability: 5.8,
    rank: 5,
  },
  "/DrugDiscovery_Images/M3.png": {
    source: "Natamycin",
    name: "C4H4",
    color: "green",
    weight: 52.08,
    potency: 4.6,
    toxicity: 5.6,
    synthesizability: 2.4,
    rank: 1,
  },
  "/DrugDiscovery_Images/M5.png": {
    source: "Lucensomysin",
    name: "C6H6",
    color: "green",
    weight: 78.11,
    potency: 5.6,
    toxicity: 6.3,
    synthesizability: 8.3,
    rank: 2,
  },
  "/DrugDiscovery_Images/M4.png": {
    source: "Candicidin",
    name: "C10H10_2",
    color: "green",
    weight: 130.19,
    potency: 7.2,
    toxicity: 4.2,
    synthesizability: 6.2,
    rank: 3,
  },
  "/DrugDiscovery_Images/M2.png": {
    source: "Nystatin",
    name: "C10H12",
    color: "green",
    weight: 132.21,
    potency: 8.5,
    toxicity: 5.1,
    synthesizability: 9.1,
    rank: 4,
  },
  "/DrugDiscovery_Images/M1.png": {
    source: "AmB",
    name: "C10H10",
    color: "green",
    weight: 130.19,
    potency: 9.1,
    toxicity: 5.5,
    synthesizability: 7.5,
    rank: 5,
  },
  "/DrugDiscovery_Images/E4.png": {
    source: "Candicidin",
    name: "C18H25NO3",
    color: "blue",
    weight: 303.4,
    potency: 6.1,
    toxicity: 6.4,
    synthesizability: 3.8,
    rank: 1,
  },
  "/DrugDiscovery_Images/E5.png": {
    source: "Vacidin A",
    name: "C19H27NO3",
    color: "blue",
    weight: 317.43,
    potency: 5.8,
    toxicity: 5.7,
    synthesizability: 5.4,
    rank: 2,
  },
  "/DrugDiscovery_Images/E3.png": {
    source: "C35-OMe-AmB",
    name: "C10H18O2",
    color: "blue",
    weight: 170.25,
    potency: 5.3,
    toxicity: 4.8,
    synthesizability: 7.4,
    rank: 3,
  },
  "/DrugDiscovery_Images/E2.png": {
    source: "C35-deO-AmB",
    name: "C9H16O",
    color: "blue",
    weight: 140.23,
    potency: 4.8,
    toxicity: 5.1,
    synthesizability: 7.9,
    rank: 4,
  },
  "/DrugDiscovery_Images/E1.png": {
    source: "AmB",
    name: "C9H16O2",
    color: "blue",
    weight: 156.23,
    potency: 5.4,
    toxicity: 5.7,
    synthesizability: 8.2,
    rank: 5,
  },
  "/C6H4O4.png": {
    name: "c6h4o4",
    color: "purple",
    weight: 1,
    potency: 1,
    toxicity: 1,
    synthesizability: 1,
    rank: -1,
  },
  "/C15H14BNO4S.png": {
    name: "c15h14bno4s",
    color: "green",
    weight: 1,
    potency: 1,
    toxicity: 1,
    synthesizability: 1,
    rank: -1,
  },
  "/C6H2O2.png": {
    name: "c6h2o2",
    color: "blue",
    weight: 1,
    potency: 1,
    toxicity: 1,
    synthesizability: 1,
    rank: -1,
  },
  "/DrugDiscovery_Images/C12H10N.png": {
    name: "c12h10n",
    color: "purple",
    weight: 1.3,
    potency: 3.6,
    toxicity: 4.6,
    synthesizability: 4.5,
    rank: 1,
  },
  "/DrugDiscovery_Images/C6H4NO2.png": {
    name: "c6h4no2",
    color: "blue",
    weight: 8.4,
    potency: 8.9,
    toxicity: 4.6,
    synthesizability: 4.5,
    rank: 1,
  },
  "/DrugDiscovery_Images/C6H3F.png": {
    name: "c6h3f",
    color: "green",
    weight: 9.6,
    potency: 3.5,
    toxicity: 7.6,
    synthesizability: 3.6,
    rank: 1,
  },
};

export default MoleculeDatabase;
