import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormWaitlist from "./pages/FormWaitlist";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/joinwaitlist" element={<FormWaitlist/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
