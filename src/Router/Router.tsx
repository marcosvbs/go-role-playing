import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { RaceSelection } from "../pages/RaceSelection";
import { VocationSelection } from "../pages/VocationSelection";
import { SkillsSelection } from "../pages/SkillsSelection";

export function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/race-selection"} element={<RaceSelection />} />
      <Route path={"/vocation-selection"} element={<VocationSelection />} />
      <Route path={"/skills-selection"} element={<SkillsSelection />} />
    </Routes>
  );
}
