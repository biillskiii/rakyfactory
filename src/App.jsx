import React from "react";
import LandingPage from "./pages/LandingPage";
import Swiftcut from "./pages/Swiftcut";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/swiftcut" element={<Swiftcut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
