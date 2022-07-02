import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";
import Checkout from "./pages/Checkout";
import Example from "./pages/Example";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/properties/:id" element={<DetailPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/tes" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
