import Navbar from "../src/components/Navbar";
import React from "react";
import Card from "./components/Card";
import LandingPage from "./pages/LandingPage";
import TaskList from "./pages/Tasklist";
function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      {/* <TaskList/> */}
    </>
  );
}

export default App;
