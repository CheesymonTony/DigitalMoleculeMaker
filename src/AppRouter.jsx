import { Routes, Route, useNavigate } from "react-router-dom";
import PasswordLock from "./PasswordLock";
import Maker from "./Maker_DrugDiscovery";
import Database from "./Database_DrugDiscovery";
import MoleculePage from "./SmilePage";
import MoleculeDisplayV2 from "./MoleculeDisplay/MoleculeDisplayV2";
import DragTestPage from "./DragTest/DragTest";
import DragTestPageV2 from "./DragTest/DragTestV2";
import App from "./Examples/example";
import { nav, use } from "framer-motion/client";
import { useEffect } from "react";

function AppRouter({ socket }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate the current window to /maker
    navigate("/maker");
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<PasswordLock />} />
      <Route path="/maker" element={<Maker socket={socket} />} />
      <Route path="/database" element={<Database socket={socket} />} />
      <Route path="/molecule" element={<MoleculePage socket={socket} />} />
      <Route path="/dev" element={<DragTestPageV2 socket={socket} />} />
      <Route path="/dev2" element={<App socket={socket} />} />
    </Routes>
  );
}

export default AppRouter;
