import { Routes, Route, useNavigate } from "react-router-dom";
import PasswordLock from "./PasswordLock";
import MakerOld from "./Maker_DrugDiscovery_old";
import MakerUpdated from "./Maker_DrugDiscovery_Updated";
import Analysis from "./Analysis/Analysis_DrugDiscovery";
import MoleculePage from "./SmilePage";
import MoleculeSideBarBlock from "./MoleculeDisplay/Molecule_SideBar_Block";
import DragTestPage from "./DragTest/DragTest";
import DragTestPageV2 from "./DragTest/DragTestV2";
import App from "./Examples/example";
import { nav, use } from "framer-motion/client";
import { useEffect } from "react";
import MoleculeTest from "./MoleculeDisplay/moleculeTest";
import UpdatePrompt from "./UpdatePrompt/UpdatePrompt";
import RebootScreen from "./RebootScreen/Reboot";
import Chart from "./Chart/Chart_DrugDiscovery";
import ChartBar from "./Chart/ChartBar";
import RangeSlider from "./RangeSlider/RangeSlider";

function AppRouter({ socket }) {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Navigate the current window to /maker
  //   navigate("/maker");
  // }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<PasswordLock />} />
      <Route path="/maker" element={<MakerOld socket={socket} />} />
      <Route path="/maker_new" element={<MakerUpdated socket={socket} />} />
      <Route path="/analysis" element={<Analysis socket={socket} />} />
      <Route path="/molecule" element={<MoleculeTest socket={socket} />} />
      <Route path="/dev" element={<DragTestPageV2 socket={socket} />} />
      <Route path="/dev2" element={<App socket={socket} />} />
      <Route path="/update" element={<UpdatePrompt socket={socket} />} />
      <Route path="/reboot" element={<RebootScreen socket={socket} />} />
      <Route path="/chart" element={<ChartBar socket={socket} />} />
      <Route path="/slider" element={<RangeSlider socket={socket} />} />
    </Routes>
  );
}

export default AppRouter;
