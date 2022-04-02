import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import Test from "./pages/test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/tes" element={<Test />} exact />
      </Routes>
    </div>
  );
}

export default App;
