import { Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import DasboardScreen from "../pages/DasboardScreen";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/dashboard" element={<DasboardScreen />} />
    </Routes>
  );
};

export default AppRouter;
