import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import Test from "./pages/test";
import Example from "./pages/Example";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/tes" element={<Example />} exact />
      </Routes>
    </div>
  );
}

export default App;
