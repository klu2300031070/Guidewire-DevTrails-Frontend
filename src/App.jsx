import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Onboarding from "./pages/Onboarding";
import Policy from "./pages/Policy";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;