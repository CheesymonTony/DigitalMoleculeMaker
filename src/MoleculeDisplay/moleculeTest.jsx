import MoleculeSideBarBlock from "./Molecule_SideBar_Block";
import MoleculeDatabase from "../molecule_database_DrugDiscovery";

function MoleculeTest() {
  console.log("workin it");
  console.log("MoleculeDatabase:", MoleculeDatabase);
  return (
    <>
      {Object.keys(MoleculeDatabase).map((module, index) =>
        Object.keys(MoleculeDatabase[module]).map((molecule, idx) => (
          <MoleculeSideBarBlock
            key={idx * (index + 1)}
            image={MoleculeDatabase[module][molecule].filePath}
          />
          //   <div
          //     style={{ width: "50px", height: "50px", border: "1px solid red" }}
          //   ></div>
        ))
      )}
    </>
  );
}

export default MoleculeTest;
